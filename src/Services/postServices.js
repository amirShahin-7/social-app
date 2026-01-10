import { apiDelete, apiGet, apiPost, apiPut } from "./apiService";

export const getAllPosts = () => apiGet(`/posts?sort=-createdAt`);
export const getSinglePost = (postId) => apiGet(`/posts/${postId}`);
export const createPost = (formData) => apiPost(`/posts`, formData);
export const deletePost = (postId) => apiDelete(`/posts/${postId}`);
export const editPost = ({ postId, formData }) =>
  apiPut(`/posts/${postId}`, formData);
