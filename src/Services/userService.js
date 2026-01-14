import { apiGet, apiPut } from "./apiService";

export const getUserData = () => apiGet("/users/profile-data");

export const uploadPhoto = (formData) =>
  apiPut("/users/upload-photo", formData);

export const getUserPosts = (userId) =>
  apiGet(`/users/${userId}/posts?limit=80`);
