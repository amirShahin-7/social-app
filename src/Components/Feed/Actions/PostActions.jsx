import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoAlertOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";
import { FaImage, FaRegEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { useDeletePost, useEditPost } from "../../../hooks/usePostMutations";
import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Input,
  Textarea,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalFooter,
} from "@heroui/react";
import { RxUpdate } from "react-icons/rx";

const PostActions = ({ postInfo: { _id } }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onOpenChange: onOpenChangeDelete,
  } = useDisclosure();
  const targetRef = useRef(null);
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const { mutate: editPost, isPending: editPending } = useEditPost();
  const { mutate: deletePost, isPending: deletePending } = useDeletePost();

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
  const handleEdit = (postId) => {
    const formData = new FormData();
    content && formData.append("body", content);
    image && formData.append("image", image);

    editPost(
      { postId, formData },
      {
        onSuccess: () => {
          toast.success("Post Edited successfully!");
          setContent("");
          setImage(null);
          setImagePreview("");
        },
        onError: (error) => {
          toast.error(error?.response?.data?.error || "Failed to edit post");
        },
      }
    );
  };

  const handleDelete = (postId) => {
    deletePost(postId, {
      onSuccess: () => {
        toast.success("Post deleted successfully!");
        id && navigate(-1);
      },
      onError: (error) => {
        toast.error(error?.response?.data?.error || "Failed to delete post");
      },
    });
  };

  return (
    <>
      {/* Modal Edit Form */}

      <Modal
        ref={targetRef}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-slate-800/80 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-sm hover:shadow-lg hover:scale-102 transition-all max-w-2/6"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-white">Update a Post</ModalHeader>
              <ModalBody>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleEdit(_id);
                  }}
                  className="space-y-4"
                >
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
                        inputWrapper:
                          "bg-slate-900/50 border-white/10 hover:border-white/20 rounded-xl",
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
                      <span className="text-white text-sm font-medium">
                        Photo
                      </span>
                      <Input
                        onChange={handleImage}
                        type="file"
                        className="hidden"
                        accept="image/*"
                      />
                    </label>

                    {/* Action Buttons */}
                    <div className=" flex gap-2 flex-wrap">
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button
                        onPress={() =>
                          setTimeout(() => {
                            onClose();
                          }, 3000)
                        }
                        type="submit"
                        disabled={(!content.trim() && !image) || editPending}
                        startContent={
                          <RxUpdate className={editPending && "animate-spin"} />
                        }
                        color="primary"
                        size="md"
                        className="rounded-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:opacity-50"
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Modal Delete Alert */}

      <Modal
        ref={targetRef}
        isOpen={isOpenDelete}
        onOpenChange={onOpenChangeDelete}
        className="bg-slate-800/80 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-sm hover:shadow-lg hover:scale-102 transition-all"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <p className="text-white flex items-center gap-2">
                  Do you want to continue
                  <IoAlertOutline className="text-red-500 animate-blink" />
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="success" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  isLoading={deletePending}
                  isDisabled={deletePending}
                  startContent={<MdDeleteOutline />}
                  color="danger"
                  onPress={() => {
                    handleDelete(_id);
                    setTimeout(() => {
                      onClose();
                    }, 3000);
                  }}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Dropdown className="bg-slate-800/60 backdrop-blur-md">
        <DropdownTrigger>
          <Button
            isLoading={deletePending}
            className="bg-transparent outline-none"
          >
            {!deletePending && (
              <HiOutlineDotsHorizontal className="text-white" />
            )}
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Actions">
          <DropdownItem
            textValue="Edit Post"
            className="text-white"
            startContent={<FaRegEdit className="text-yellow-400" />}
            onPress={onOpen}
          >
            Edit Post
          </DropdownItem>
          <DropdownItem
            textValue="Delete Post"
            className="text-white"
            startContent={<MdDeleteOutline className="text-red-400" />}
            onPress={onOpenDelete}
          >
            Delete Post
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default PostActions;
