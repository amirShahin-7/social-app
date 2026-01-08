import { useMutation } from "@tanstack/react-query";
import { createPost } from "../Services/postServices";
import { queryClient } from "./../App";

export const useCreatePost = () => {
  return useMutation({
    mutationFn: (formData) => createPost(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["post-details"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
    },
  });
};
