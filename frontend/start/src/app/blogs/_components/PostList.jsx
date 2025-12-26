import React from "react";

async function PostList() {
  await new Promise((res) =>
    setTimeout(() => {
      return res();
    }, 3000)
  );
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  } = await response.json();

  console.log(posts);
  return (
    <div>
        <h1>لیست بلاگ ها:</h1>
      {posts.map((post) => (
        <div>{post.title}</div>
      ))}
    </div>
  );
}

export default PostList;
