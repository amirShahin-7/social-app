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
            <h3 className="font-semibold text-white light:bg-linear-to-r light:from-[#005acd] light:via-[#0093cb] light:to-[#005acd] light:bg-clip-text light:text-transparent">{postInfo?.user?.name}</h3>
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
