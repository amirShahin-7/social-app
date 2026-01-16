import { Avatar } from "@heroui/react";

import PostActions from "./Actions/PostActions";
import { useUserData } from "../../hooks/useUserData";

const CardHeader = ({ postInfo }) => {
  const { data: userData } = useUserData();

  return (
    <div className="p-5 pb-4">
      <div
        key={postInfo?.user?.id}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <Avatar src={postInfo?.user?.photo} size="md" />
          <div className="flex-1">
            <h3 className="font-semibold bg-linear-to-r from-[#005acd] via-[#0093cb] to-[#005acd] bg-clip-text text-transparent dark:text-white">
              {postInfo?.user?.name}
            </h3>
            <time className="text-sm text-slate-500">
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
        <>
          {postInfo?.user?._id === userData?._id && (
            <PostActions postInfo={postInfo} />
          )}
        </>
      </div>
    </div>
  );
};

export default CardHeader;
