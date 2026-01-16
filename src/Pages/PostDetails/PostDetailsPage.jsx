import { useNavigate } from "react-router-dom";
import PostCard from "../../Components/Feed/PostCard";
import PostCardSkeleton from "../../Components/Feed/Skeletons/PostCardSkeleton";
import { usePostDetails } from "../../hooks/usePosts";
import NotFoundPage from "../NotFound/NotFoundPage";
import LeftSidebar from "../../Components/Feed/Sidebars/LeftSidebar";
import RightSidebar from "../../Components/Feed/Sidebars/RightSidebar";
import { useHead } from "@unhead/react";
import { BsNewspaper } from "react-icons/bs";

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
          <div className="theme-card flex flex-wrap items-center justify-between shadow-lg p-6 my-6 rounded-2xl">
            <h2 className="text-xl font-bold theme-text-primary flex items-center gap-3">
              <span className="w-10 h-10 bg-linear-to-r from-[#005acd] via-[#0093cb] to-[#005acd] dark:from-indigo-500 dark:to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <BsNewspaper className="text-lg text-white" />
              </span>
              <span className="bg-linear-to-r from-[#005acd] via-[#0093cb] to-[#005acd] bg-clip-text text-transparent dark:text-white">
                Posts Details
              </span>
            </h2>
            <button
              onClick={() => navigate(-1)}
              className="border border-blue-400/50 rounded-full px-4 py-2 text-blue-400 hover:bg-blue-400/10 dark:hover:bg-slate-800/10 hover:text-blue-500 transition-colors flex items-center gap-2 cursor-pointer"
            >
              Back
            </button>
          </div>

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
