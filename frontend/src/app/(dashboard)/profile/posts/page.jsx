import React, { Suspense } from "react";
import PostsTable from "./_/components/PostsTable";
import Fallback from "@/components/ui/Fallback";
import Search from "@/components/ui/Search";
import { CreatePost } from "./_/components/Buttons";
import queryString from "query-string";

function page({ searchParams }) {
  const query = queryString.stringify(searchParams);
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 text-secondary-700 mb-12 items-center lg:grid-cols-3">
        <h1 className=" font-bold text-xl ">لیست پست ها</h1>
        <Search />
        <CreatePost />
      </div>
      <Suspense fallback={<Fallback />}>
        <PostsTable queries={query} />
      </Suspense>
    </div>
  );
}

export default page;
