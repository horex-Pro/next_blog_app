import React, { Suspense } from "react";
import PostList from "../_components/PostList";
import Spinner from "@/components/ui/Spinner";

async function BlogPage() {
  

  return (
    <div>
      <Suspense fallback={<Spinner/>}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default BlogPage;
