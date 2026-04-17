import http from "./httpService";

export async function getPostBySlug(params) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${params}`,
  );

  const { data } = await response.json();
  const { post } = data || {};

  return post;
}
export async function getPosts(queries, options) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queries}`,
    options,
  );

  const { data } = await response.json();
  const { posts, totalPages } = data || {};

  return { posts, totalPages };
}

export async function likePostApi(postId) {
  return http.post(`/post/like/${postId}`).then(({ data }) => data.data);
}

export async function bookmarkPostApi(postId) {
  return http.post(`/post/bookmark/${postId}`).then(({ data }) => data.data);
}
