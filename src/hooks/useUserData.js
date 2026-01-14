import { useMutation } from "@tanstack/react-query";
import { getUserData, uploadPhoto } from "../Services/userService";
import { useApi } from "./useApi";
import { queryClient } from "../App";

export const useUserData = () => {
  return useApi({
    queryKey: ["userData"],
    queryFn: getUserData,
    select: (data) => data?.data?.user,
  });
};

export const useUploadPhoto = () => {
  return useMutation({
    mutationFn: (formData) => uploadPhoto(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
      queryClient.invalidateQueries({ queryKey: ["userData"] });
    },
  });
};
