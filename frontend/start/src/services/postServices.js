export async function getPostBySlug(params) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${params}`
  );

  const { data } = await response.json();
  const { post } = data || {};

  return post;
}

export async function getPosts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);

  const { data } = await response.json();
  const { posts } = data || {};

  return posts;
}
