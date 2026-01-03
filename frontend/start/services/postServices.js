export async function getPostBySlug(params) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${params}`
  );

  const { data } = await response.json();
  const { post } = data || {};

  return post;
}
