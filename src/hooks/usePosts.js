import { useParams } from "react-router-dom";
import { getAllPosts, getSinglePost } from "../Services/postServices";
import { getUserPosts } from "../Services/userService";
import { useUserData } from "./useUserData";
import { useApi } from "./useApi";

export const usePosts = () => {
  return useApi({
    queryKey: ["posts"],
    queryFn: getAllPosts,
    select: (data) => data?.data?.posts,
    refetchInterval: 60000,
  });
};

export const usePostDetails = () => {
  const { id: postId } = useParams();

  return useApi({
    queryKey: ["post-details", postId],
    queryFn: () => getSinglePost(postId),
    select: (data) => data?.data?.post,
  });
};

export const useUserPosts = () => {
  const { data: userData } = useUserData();

  return useApi({
    queryKey: ["user-posts"],
    queryFn: () => getUserPosts(userData?._id),
    select: (data) => data?.data?.posts,
    enabled: !!userData?._id,
  });
};
