import { Avatar } from "@heroui/react";

const CardHeader = ({ postInfo }) => {
  return (
    <div className="p-5 pb-4">
      <div key={postInfo?.user?.id} className="flex items-center gap-3">
        <Avatar src={postInfo?.user?.photo} size="md" />
        <div className="flex-1">
          <h3 className="font-semibold text-white">
            {postInfo?.user?.name}
          </h3>
          <time className="text-sm text-slate-400">
            {new Date(postInfo?.createdAt)
              .toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
                month: "short",
                day: "numeric",
                year: "numeric",
                timeZone: "UTC",
              })
              .replace(",", " ")
              .replace(",", " ")}
          </time>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
