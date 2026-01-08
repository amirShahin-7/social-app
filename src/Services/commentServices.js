import { apiPost } from "./apiService";

export const createComments = ({ content, postId }) => {
  return apiPost(`/comments`, {
    content: content,
    post: postId,
  });
};

