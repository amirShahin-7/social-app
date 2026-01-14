import { Avatar, Button, Input } from "@heroui/react";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useUserData } from "../../hooks/useUserData";
import { toast } from "react-toastify";
import { useCreateComment } from "./../../hooks/useComments";

const AddComment = ({ postId }) => {
  const { data: userData } = useUserData();
  const [comment, setComment] = useState("");
  const { mutate: createComment, isPending } = useCreateComment();

  const handleSubmit = (e) => {
    e.preventDefault();

    //  Call mutation
    createComment(
      { content: comment, postId },
      {
        onSuccess: () => setComment(""),
        onError: (error) => {
          toast.error(
            error?.response?.data?.message || "Failed to add comment"
          );
        },
      }
    );
  };

  return (
    <div className="flex flex-wrap items-end gap-3 pt-2 ">
      <Avatar src={userData?.photo} size="md" />
      <form
        onSubmit={handleSubmit}
        className="flex-1 flex flex-wrap sm:flex-nowrap items-end gap-2 justify-end"
      >
        <Input
          placeholder="Write a comment..."
          variant="bordered"
          size="md"
          color="primary"
          classNames={{
            inputWrapper: "rounded-full bg-slate-800/80 dark:bg-slate-800/80 light:bg-white border-white/10 dark:border-white/10 light:border-[#6dd7fd]/30 data-[hover=true]:bg-slate-700 dark:data-[hover=true]:bg-slate-700 light:data-[hover=true]:bg-white",
            input: "theme-text-primary"
          }}
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <Button
          type="submit"
          isLoading={isPending}
          disabled={!comment || isPending}
          isIconOnly
          color="primary"
          className="rounded-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:opacity-50"
          size="md"
        >
          <FaPaperPlane className="text-sm" />
        </Button>
      </form>
    </div>
  );
};

export default AddComment;
