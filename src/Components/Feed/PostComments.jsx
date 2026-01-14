import { Avatar } from "@heroui/react";
import CommentActions from "./Actions/CommentActions";
import { useUserData } from "../../hooks/useUserData";

const PostComments = ({ commentInfo }) => {
  const userImage = commentInfo?.commentCreator.photo.includes("undefined")
    ? null
    : commentInfo?.commentCreator.photo;
  const { data: userData } = useUserData();
  return (
    <section
      key={commentInfo?.commentCreator._id}
      className="flex  items-start gap-3"
    >
      <Avatar src={userImage} size="sm" />
      <div className="flex-1">
        <div className=" dark:bg-slate-800/50 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2.5 border border-white/10 dark:border-white/10 light:border-[#6dd7fd]/30 flex justify-between">
          {/* Comment Content */}
          <div>
            <p className="font-semibold text-sm theme-text-primary">
              {commentInfo?.commentCreator.name}
            </p>
            <p className="theme-text-secondary text-sm mt-0.5">
              {commentInfo?.content}
            </p>
          </div>
          {/* Comment Actions */}
          {userData?._id == commentInfo?.commentCreator?._id && (
            <div>
              <CommentActions
                key={commentInfo?._id}
                commentId={commentInfo?._id}
                commentContent={commentInfo?.content}
              />
            </div>
          )}
        </div>
        <div className="flex items-center gap-4 mt-1.5 px-4 *:text-xs">
          <button className=" dark:text-slate-400 text-[#5c7a99] hover:text-blue-500 focus:text-blue-500 font-medium cursor-pointer">
            Like
          </button>
          <button className=" dark:text-slate-400 text-[#5c7a99] hover:text-red-500 focus:text-red-500 font-medium cursor-pointer">
            Reply
          </button>
          <time className="theme-text-muted">
            {new Date(commentInfo?.createdAt).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
              day: "numeric",
              month: "short",
              timeZone: "UTC",
            })}
          </time>
        </div>
      </div>
    </section>
  );
};

export default PostComments;
