import { Avatar, Button, Input } from "@heroui/react";
import { useState } from "react";
import { FaImage } from "react-icons/fa";
import { toast } from "react-toastify";
import { useUploadPhoto, useUserData } from "../../hooks/useUserData";

const UpdatePhoto = () => {
  const { data: userData } = useUserData();
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const { mutate: uploadPhoto, isPending } = useUploadPhoto();

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
    e.target.value = "";
  };

  const handleChangeImg = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", image);

    uploadPhoto(formData, {
      onSuccess: () => {
        toast.success("Changed successfully!");
        setImage(null);
        setImagePreview("");
      },
      onError: (error) => {
        toast.error(error?.response?.data?.error || "Failed to Change");
      },
    });
  };

  return (
    <div className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl overflow-hidden p-6 w-full">
      <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-4">
        Profile Photo
      </h3>

      <form
        onSubmit={handleChangeImg}
        className="flex flex-col items-center gap-6 py-4"
      >
        <div className="relative group">
          <Avatar
            src={imagePreview ? imagePreview : userData?.photo}
            className="w-32 h-32 text-large ring-4 ring-white/10 group-hover:ring-blue-500/50 transition-all duration-300"
            isBordered
            color="secondary"
          />
          <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer pointer-events-none">
            <FaImage className="text-white text-2xl" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 w-full max-w-xs">
          <label className="w-full flex items-center justify-center gap-2 cursor-pointer px-6 py-3 rounded-xl bg-slate-700/50 hover:bg-slate-600/80 border border-white/5 hover:border-blue-500/30 transition-all duration-300 group">
            <FaImage className="text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="text-slate-200 font-medium">Choose Image</span>
            <input
              onChange={handleImage}
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>

          <Button
            type="submit"
            isLoading={isPending}
            isDisabled={!image || isPending}
            className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/20"
            size="lg"
            radius="lg"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePhoto;
