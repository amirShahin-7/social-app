import { getUserData } from "../Services/userService";
import { useApi } from "./useApi";

export const useUserData = () => {
  return useApi({
    queryKey: ["userData"],
    queryFn: getUserData,
    select: (data) => data?.data?.user,
  });
};
