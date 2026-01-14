import { Button } from "@heroui/react";
import { AiFillLike } from "react-icons/ai";
import { FaComment, FaShare } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const CardBody = ({ postInfo }) => {
  let { id } = useParams();
  return (
    <>
      {/* PostInfo Text */}
      <div className="px-5 pb-4">
        <p className="dark:text-slate-200 text-slate-800 leading-relaxed">
          {postInfo.body}
        </p>
      </div>

      {/* PostInfo Image */}
      {postInfo.image && (
        <Link to={`/post-details/${postInfo.id}`} className="w-full">
          <img
            src={postInfo.image}
            alt="Post content"
            className={`w-full    object-cover ${!id ? "h-96" : "h-full"}`}
          />
        </Link>
      )}

      {/* Engagement Stats */}
      <div className="px-5 py-3 flex items-center justify-between text-sm text-slate-400 border-b border-white/10 *:hover:underline *:cursor-pointer">
        <span className="hover:text-blue-500">0 likes</span>
        <Link
          to={`/post-details/${postInfo.id}`}
          className="hover:text-red-500"
        >
          {postInfo.comments.length} comments
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="px-5 py-2 flex *:grow flex-wrap items-center justify-around border-b border-white/10 *:text-slate-400 *:transition-colors">
        <Button
          variant="light"
          className=" hover:text-blue-500 focus:text-blue-500"
          startContent={<AiFillLike size={18} />}
        >
          Like
        </Button>
        <Button
          variant="light"
          className=" hover:text-red-500 focus:text-red-500"
          startContent={<FaComment size={18} />}
        >
          Comment
        </Button>
        <Button
          variant="light"
          className=" hover:text-green-500 focus:text-green-500"
          startContent={<FaShare size={18} />}
        >
          Share
        </Button>
      </div>
    </>
  );
};

export default CardBody;
