import { Avatar, Button, Input, Textarea } from "@heroui/react";
import { useState } from "react";
import { FaImage } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useCreatePost } from "../../hooks/usePostMutations";
import { toast } from "react-toastify";
import { useUserData } from "../../hooks/useUserData";

const CreatePost = () => {
  const { data: userData } = useUserData();

  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const { mutate: createPost, isPending } = useCreatePost();

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
    e.target.value = "";
  };
  const removeImage = () => {
    setImage(null);
    setImagePreview("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    content && formData.append("body", content);
    image && formData.append("image", image);

    //  Call mutation
    createPost(formData, {
      onSuccess: () => {
        toast.success("Post created successfully!");
        setContent("");
        setImage(null);
        setImagePreview("");
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || "Failed to create post");
      },
    });
  };

  return (
    <section className="bg-slate-800/60 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-sm hover:shadow-lg hover:scale-102 transition-all">
      <header className="bg-transparent py-3">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white opacity-90">
                Create a Post
              </h2>
              <p className="text-sm text-slate-400">
                Share your thoughts with your network
              </p>
            </div>
            <Avatar
              src={userData?.photo}
              size="md"
              isBordered
              color="default"
            />
          </div>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Textarea */}
        <div className="flex items-start gap-3">
          <Textarea
            placeholder="What's on your mind?"
            variant="bordered"
            color="primary"
            minRows={2}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            classNames={{
              input: "text-base text-white",
              inputWrapper: "bg-slate-900/50 border-white/10 hover:border-white/20 rounded-xl",
            }}
          />
        </div>

        {/* Image Preview */}
        {imagePreview && (
          <div className="relative">
            <IoIosCloseCircleOutline
              size={30}
              className="absolute top-2 right-2 text-blue-400 cursor-pointer hover:text-red-500 transition-colors z-10"
              onClick={removeImage}
            />
            <img
              className="w-full rounded-xl"
              src={imagePreview}
              alt="preview"
            />
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between pt-4 border-t border-white/10 gap-3">
          {/* Image Upload */}
          <label className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors">
            <FaImage className="text-blue-400 text-lg" />
            <span className="text-white text-sm font-medium">Photo</span>
            <Input
              onChange={handleImage}
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>

          {/* Submit Button */}
          <Button
            type="submit"
            isLoading={isPending} 
            disabled={(!content.trim() && !image) || isPending}
            color="primary"
            size="md"
            className="rounded-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:opacity-50"
          >
            Post
          </Button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
