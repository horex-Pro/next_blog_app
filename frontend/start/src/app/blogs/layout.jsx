import React, { Suspense } from "react";
import PostList from "./_components/PostList";
import CategoryList from "./_components/CategoryList";
import Spinner from "@/components/ui/Spinner";

export const metadata = {
  title: "بلاگ ها",
  description: "صفحه بلاگ ها",
};
function Layout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="text-lg font-bold">لیست بلاگ ها</h1>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 lg:pl-8 text-secondary-500 space-y-4">
          <Suspense fallback={<Spinner />}>
            <CategoryList />
          </Suspense>
        </div>
        <main className="col-span-12 lg:col-span-8 xl:col-span-9">
          {children}
        </main>
      </div>
    </div>
  );
}
export default Layout;
