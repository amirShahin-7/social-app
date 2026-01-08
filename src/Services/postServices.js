import { apiGet, apiPost } from "./apiService";

export const getAllPosts = () => apiGet(`/posts?sort=-createdAt`);
export const getSinglePost = (postId) => apiGet(`/posts/${postId}`);
export const createPost = (formData) => apiPost(`/posts`,formData);

