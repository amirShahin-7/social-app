import { useMutation } from "@tanstack/react-query";
import { createPost, deletePost, editPost } from "../Services/postServices";
import { queryClient } from "./../App";

export const useCreatePost = () => {
  return useMutation({
    mutationFn: (formData) => createPost(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
      queryClient.invalidateQueries({ queryKey: ["post-details"] });
    },
  });
};
export const useEditPost = () => {
  return useMutation({
    mutationFn: ({ postId, formData }) => editPost({ postId, formData }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
      queryClient.invalidateQueries({ queryKey: ["post-details"] });
    },
  });
};
export const useDeletePost = () => {
  return useMutation({
    mutationFn: (postId) => deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
      queryClient.invalidateQueries({ queryKey: ["post-details"] });
    },
  });
};
