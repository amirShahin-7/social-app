import { useMutation } from "@tanstack/react-query";
import { createComments, deleteComment, editComment } from "../Services/commentServices";
import { queryClient } from "../App";

export const useCreateComment = () => {
  return useMutation({
    mutationFn: ({ content, postId }) => createComments({ content, postId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["post-details"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
    },
  });
};

export const useDeleteComment = () => {
  return useMutation({
    mutationFn: (commentId) => deleteComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
      queryClient.invalidateQueries({ queryKey: ["post-details"] });
    },
  });
};
export const useEditComment = () => {
  return useMutation({
    mutationFn: ({ commentId, content }) => editComment({ commentId, content }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
      queryClient.invalidateQueries({ queryKey: ["post-details"] });
    },
  });
};