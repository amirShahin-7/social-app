import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalBody,
  Input,
  ModalFooter,
} from "@heroui/react";
import { FaRegEdit } from "react-icons/fa";
import { useDeleteComment, useEditComment } from "../../../hooks/useComments";
import { toast } from "react-toastify";
import { useState } from "react";
import { RxUpdate } from "react-icons/rx";
import { MdDeleteOutline } from "react-icons/md";

const CommentActions = ({ commentId, commentContent }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [updatedContent, setUpdatedContent] = useState(commentContent);
  const { mutate: deleteComment, isPending: deletePending } =
    useDeleteComment();
  const { mutate: editComment, isPending: editPending } = useEditComment();
  const handleDelete = (commentId) => {
    deleteComment(commentId, {
      onSuccess: () => {
        toast.success("Comment deleted successfully!");
      },
      onError: (error) => {
        toast.error(error?.response?.data?.error || "Failed to delete comment");
      },
    });
  };
  const handleEdit = (commentId) => {
    let content = updatedContent;

    editComment(
      { commentId, content },
      {
        onSuccess: () => {
          toast.success("Comment Edited successfully!");
        },
        onError: (error) => {
          console.log(error);

          toast.error(error?.response?.data?.error || "Failed to edit comment");
        },
      }
    );
  };

  return (
    <>
      <Modal
        className="bg-slate-800/80 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-sm hover:shadow-lg hover:scale-102 transition-all max-w-2/6"
        isOpen={isOpen}
        placement="top-center"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleEdit(commentId);
                  setTimeout(() => {
                    onClose();
                  }, 2000);
                }}
              >
                <ModalBody>
                  <Input
                    variant="bordered"
                    color="primary"
                    className="text-white"
                    minLength={2}
                    disabled={editPending}
                    value={updatedContent}
                    onChange={(e) => {
                      setUpdatedContent(e.target.value);
                    }}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    className="text-white disabled:opacity-50 disabled:hover:opacity-50 disabled:cursor-not-allowed"
                    disabled={!updatedContent.trim() || editPending}
                    color="success"
                    type="submit"
                  >
                    {editPending ? (
                      <RxUpdate className="animate-spin" />
                    ) : (
                      "Update"
                    )}
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
      <Dropdown className="bg-slate-800/60 backdrop-blur-md">
        <DropdownTrigger>
          <Button
            className="bg-transparent outline-none"
            isLoading={deletePending}
            isDisabled={deletePending}
          >
            <HiOutlineDotsHorizontal
              className={`text-white  ${deletePending ? "hidden" : "block"}`}
            />
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
            onPress={() => handleDelete(commentId)}
          >
            Delete Post
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default CommentActions;
