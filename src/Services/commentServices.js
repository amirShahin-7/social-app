import { apiDelete, apiPost, apiPut } from "./apiService";

export const createComments = ({ content, postId }) => {
  return apiPost(`/comments`, {
    content: content,
    post: postId,
  });
};
export const deleteComment = (commentId) => apiDelete(`/comments/${commentId}`);
export const editComment = ({ commentId, content }) =>
  apiPut(`/comments/${commentId}`, { content });
