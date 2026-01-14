import AddComment from "./AddComment";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import { useParams } from "react-router-dom";
import PostComments from "./PostComments";

const PostCard = ({ postInfo }) => {
  let { id } = useParams();

  return (
    <article
      key={postInfo?._id}
      className=" dark:bg-slate-800/60 bg-white/80 backdrop-blur-md rounded-2xl 
        border dark:border-white/10 border-[#6dd7fd]/30  shadow-lg dark:shadow-lg shadow-[#005acd]/10 overflow-hidden"
    >
      {/* Post Header */}
      <CardHeader postInfo={postInfo} />

      {/* Post Body */}

      <CardBody postInfo={postInfo} />

      {/* Post Comments */}
      <section className="p-5 space-y-4  dark:bg-slate-900/30 bg-[#f5ffff]/50">
        {postInfo?.comments ? (
          postInfo?.comments
            .slice(!id ? -2 : 0, postInfo?.comments?.length)
            .map((comment) => (
              <PostComments commentInfo={comment} key={comment?._id} />
            ))
        ) : (
          <p className=" dark:text-slate-400 text-[#3d5a80] text-lg text-center">
            No Comment Yet, Be the first comment
          </p>
        )}

        {/* Add Comment */}
        <AddComment postId={postInfo?._id} />
      </section>
    </article>
  );
};

export default PostCard;
