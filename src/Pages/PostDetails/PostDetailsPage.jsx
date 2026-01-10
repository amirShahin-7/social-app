import { useNavigate } from "react-router-dom";
import PostCard from "../../Components/Feed/PostCard";
import PostCardSkeleton from "../../Components/Feed/Skeletons/PostCardSkeleton";
import { usePostDetails } from "../../hooks/usePosts";
import NotFoundPage from "../NotFound/NotFoundPage";
import { HiArrowLeft } from "react-icons/hi";
import LeftSidebar from "../../Components/Feed/Sidebars/LeftSidebar";
import RightSidebar from "../../Components/Feed/Sidebars/RightSidebar";
import { useHead } from "@unhead/react";

const PostDetailsPage = () => {
  const { data, isLoading, isError } = usePostDetails();
  const navigate = useNavigate();
  if (isError) return <NotFoundPage />;
  useHead({
    title: `${data?.user?.name || "User"}'s - post`,
    meta: [
      {
        name: "description",
        content: `${data?.user?.name || "User"}'s post`,
      },
      { property: "og:title", content: data?.user?.name },
    ],
  });
  return (
    <div className="container mx-auto px-4 lg:px-0 max-w-7xl">
      <div className="flex justify-center gap-6">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Main Content */}
        <main className="w-full max-w-2xl py-8 space-y-6">
          <button
            onClick={() => navigate(-1)}
            className="border border-white/20 cursor-pointer rounded-full px-4 py-2 text-white hover:bg-white/10 hover:text-white transition-colors flex items-center gap-2"
          >
            <HiArrowLeft className="text-lg" /> Back
          </button>

          {isLoading ? (
            <PostCardSkeleton />
          ) : (
            data && <PostCard postInfo={data} postId={data._id} />
          )}
        </main>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
};

export default PostDetailsPage;
