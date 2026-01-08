import { useUserPosts } from "../../hooks/usePosts";
import { useUserData } from "../../hooks/useUserData";
import PostCard from "../Feed/PostCard";
import PostCardSkeleton from "../Feed/Skeletons/PostCardSkeleton";
import { BsArchive } from "react-icons/bs";

const UserPosts = () => {
  const { data: userData } = useUserData();
  const { data: posts, isLoading: postsLoading } = useUserPosts();
  if (postsLoading) {
    return <PostCardSkeleton />;
  }

  if (posts?.length == 0) {
    return (
      <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl shadow-lg p-8 text-center border border-white/10">
        <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
          <BsArchive className="text-2xl text-slate-400" />
        </div>
        <p className="text-slate-400">No Posts Available</p>
      </div>
    );
  }
  return (
    <>
      {posts?.length > 0 &&
        posts
          ?.map((postInfo) => (
            <PostCard
              userData={userData}
              postInfo={postInfo}
              key={postInfo?._id}
            />
          ))?.reverse()}
    </>
  );
};

export default UserPosts;
