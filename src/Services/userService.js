import { apiGet } from "./apiService";

export const getUserData = () => apiGet("/users/profile-data");

// export const updateUserProfile = (data) => apiPut("/users/upload-photo", photo);

export const getUserPosts = (userId) => apiGet(`/users/${userId}/posts`);
