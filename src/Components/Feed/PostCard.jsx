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
      className="bg-slate-800/60 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg overflow-hidden"
    >
      {/* Post Header */}
      <CardHeader postInfo={postInfo} />

      {/* Post Body */}

      <CardBody postInfo={postInfo} />

      {/* Post Comments */}
      <section className="p-5 space-y-4 bg-slate-900/30">
        {postInfo?.comments ? (
          postInfo?.comments
            .slice(!id ? -2 : 0, postInfo?.comments?.length)
            .map((comment) => (
              <PostComments commentInfo={comment} key={comment?._id} />
            ))
        ) : (
          <p className="text-slate-400 text-lg text-center">
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
