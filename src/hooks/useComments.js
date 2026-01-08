import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComments } from "../Services/commentServices";

export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ content, postId }) => createComments({ content, postId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["post-details"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
    },
  });
};
