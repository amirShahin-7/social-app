import { Avatar } from "@heroui/react";

const PostComments = ({ commentInfo }) => {
  const userImage = commentInfo?.commentCreator.photo.includes("undefined")
    ? null
    : commentInfo?.commentCreator.photo;
  return (
    <section
      key={commentInfo?.commentCreator._id}
      className="flex  items-start gap-3"
    >
      <Avatar src={userImage} size="sm" />
      <div className="flex-1">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl px-4 py-2.5 border border-white/10">
          <p className="font-semibold text-sm text-white">
            {commentInfo?.commentCreator.name}
          </p>
          <p className="text-slate-300 text-sm mt-0.5">{commentInfo?.content}</p>
        </div>
        <div className="flex items-center gap-4 mt-1.5 px-4 *:text-xs">
          <button className="text-slate-400 hover:text-blue-500 focus:text-blue-500 font-medium cursor-pointer">
            Like
          </button>
          <button className="text-slate-400 hover:text-red-500 focus:text-red-500 font-medium cursor-pointer">
            Reply
          </button>
          <time className="text-slate-500">
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
