import api from './api';
import { Comment } from '../definitions/photo';

export async function getPostComments(postId: number) {
  return await api.get({ url: `/posts/${postId}/comments` });
}

export function postComment(comment: Comment, postId: number) {
  return api.post({ url: `/posts/${postId}/comments` });
}

export async function getPostList(userId?: number) {
  const params = {
    userId: userId,
    _limit: 15,
    _start: 0,
  };
  try {
    return await api.get({ url: '/posts', params });
  } catch (e) {
    console.log(e);
  }
}
