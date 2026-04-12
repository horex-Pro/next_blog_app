import React, { Suspense } from "react";
import PostsTable from "./_/components/PostsTable";
import Fallback from "@/components/ui/Fallback";

function page() {
  return (
    <div>
      <Suspense fallback={<Fallback />}>
        <PostsTable />
      </Suspense>
    </div>
  );
}

export default page;
