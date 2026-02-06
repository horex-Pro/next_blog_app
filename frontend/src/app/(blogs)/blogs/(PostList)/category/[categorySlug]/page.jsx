import PostList from "app/(blogs)/blogs/_components/PostList";
import queryString from "query-string";
import React from "react";

async function Category({ params, searchParams }) {
  const queries = await queryString.stringify(searchParams);
  const { categorySlug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?categorySlug=${categorySlug}&${queries}`
  );

  const { data } = await res.json();
  const { posts } = data || {};

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-lg text-secondary-600">
          پستی در این دسته بندی یافت نشد
        </p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}

export default Category;
