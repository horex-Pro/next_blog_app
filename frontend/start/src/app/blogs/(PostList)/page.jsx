import React, { Suspense } from "react";
import PostList from "../_components/PostList";
import Spinner from "@/components/ui/Spinner";

export const revalidate = 60;
export const experimental_ppr = true;
async function BlogPage() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default BlogPage;
