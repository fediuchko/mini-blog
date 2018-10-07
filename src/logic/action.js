import { FETCH_POSTS } from "./actionType";

export function getAllPosts(payload) {
  return {
    type: FETCH_POSTS,
    payload
  };
}
