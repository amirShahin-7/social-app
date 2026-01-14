import PostCard from "../../Components/Feed/PostCard";
import CreatePost from "../../Components/Feed/CreatePost";
import PostCardSkeleton from "./../../Components/Feed/Skeletons/PostCardSkeleton";
import { usePosts } from "../../hooks/usePosts";
import { Button } from "@heroui/react";
import { HiRefresh } from "react-icons/hi";
import LeftSidebar from "../../Components/Feed/Sidebars/LeftSidebar";
import RightSidebar from "../../Components/Feed/Sidebars/RightSidebar";
import { useHead } from "@unhead/react";

const HomePage = () => {
  const { data, isLoading, refetch, isError, error } = usePosts();
  useHead({
    title: "Feed Page",
    meta: [
      {
        name: "description",
        content: "Welcome to our website",
      },
    ],
  });
  return (
    <div className="container mx-auto px-4 lg:px-0 max-w-7xl">
      <div className="flex justify-center gap-6">
        <LeftSidebar />

        <main className="w-full max-w-2xl py-8 space-y-6">
          <CreatePost />

          <div className="flex items-center gap-3 mt-8">
            <h2 className="text-2xl font-bold bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
              Latest Posts
            </h2>
            <div className="flex-1 h-px bg-linear-to-r from-blue-500/50 via-purple-500/30 to-transparent"></div>
          </div>

          {/* Error State */}
          {isError ? (
            <div className="flex justify-between items-center bg-slate-800/50 backdrop-blur-sm border border-red-500/30 rounded-2xl p-5">
              <p className="text-red-400 font-medium">{error.message}</p>
              <Button
                onPress={() => refetch()}
                size="sm"
                className="bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/25"
                startContent={<HiRefresh className="text-lg" />}
              >
                Retry
              </Button>
            </div>
          ) : isLoading ? (
            <PostCardSkeleton />
          ) : (
            data?.map((postInfo) => (
              <PostCard
                postInfo={postInfo}
                postId={postInfo?._id}
                key={postInfo._id}
              />
            ))
          )}
        </main>

        <RightSidebar />
      </div>
    </div>
  );
};

export default HomePage;
