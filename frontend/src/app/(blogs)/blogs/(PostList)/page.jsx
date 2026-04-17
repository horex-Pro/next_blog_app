import React, { Suspense } from "react";
import PostList from "../_components/PostList";

import { getPosts } from "@/services/postServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import queryString from "query-string";

async function BlogPage({ searchParams }) {
  const queries = queryString.stringify(searchParams);

  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const {posts} = await getPosts(queries, options);

  const { search } = searchParams;
  return (
    <div>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? "هیچ پستی با این مشخصات یافت نشد"
            : ` نشان دادن ${posts.length} برای`}
          <span className="font-bold">&quot{search}</span>
        </p>
      ) : (
        <p>helo</p>
      )}
      <PostList posts={posts} />
    </div>
  );
}

export default BlogPage;
