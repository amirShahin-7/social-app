import { Skeleton } from "@heroui/react";

const PostCardSkeleton = () => {
  return (
    <article className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
      {/* Header Skeleton */}
      <div className="p-5 pb-4">
        <div className="flex items-center gap-3">
          <Skeleton className="w-10 h-10 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-32 rounded-lg" />
            <Skeleton className="h-3 w-24 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Body Text Skeleton */}
      <div className="px-5 pb-4 space-y-2">
        <Skeleton className="h-4 w-full rounded-lg" />
        <Skeleton className="h-4 w-3/4 rounded-lg" />
      </div>

      {/* Image Skeleton */}
      <Skeleton className="w-full h-96 rounded-none" />

      {/* Engagement Stats Skeleton */}
      <div className="px-5 py-3 flex items-center justify-between border-b border-gray-100">
        <Skeleton className="h-4 w-16 rounded-lg" />
        <Skeleton className="h-4 w-24 rounded-lg" />
      </div>

      {/* Action Buttons Skeleton */}
      <div className="px-5 py-2 flex items-center justify-around border-b border-gray-100">
        <Skeleton className="h-8 w-20 rounded-lg" />
        <Skeleton className="h-8 w-24 rounded-lg" />
        <Skeleton className="h-8 w-20 rounded-lg" />
      </div>

      {/* Comments Section Skeleton */}
      <section className="p-5 space-y-4 bg-gray-50">
        {/* Comment Skeleton 1 */}
        <div className="flex items-start gap-3">
          <Skeleton className="w-8 h-8 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-3 w-24 rounded-lg" />
            <Skeleton className="h-4 w-full rounded-lg" />
          </div>
        </div>

        {/* Comment Skeleton 2 */}
        <div className="flex items-start gap-3">
          <Skeleton className="w-8 h-8 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-3 w-20 rounded-lg" />
            <Skeleton className="h-4 w-3/4 rounded-lg" />
          </div>
        </div>

        {/* Add Comment Input Skeleton */}
        <div className="flex items-center gap-3">
          <Skeleton className="w-8 h-8 rounded-full" />
          <Skeleton className="h-10 flex-1 rounded-lg" />
          <Skeleton className="w-10 h-10 rounded-lg" />
        </div>
      </section>
    </article>
  );
};

export default PostCardSkeleton;
