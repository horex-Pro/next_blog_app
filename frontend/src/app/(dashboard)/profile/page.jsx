import React, { Suspense } from "react";
import PostsTable from "./posts/_/components/PostsTable";
import CardsWrapper from "./_components/CardsWrapper";
import Fallback from "@/components/ui/Fallback";

async function ProfilePage() {
  return (
    <div>
      <h2 className="text-secondary-500"> داشبورد</h2>
      <br />
      <Suspense fallback={<Fallback />}>
        <CardsWrapper />
      </Suspense>
      <h2 className="text-secondary-500">آخرین پست ها:</h2>
      <Suspense fallback={<Fallback />}>
        <PostsTable queries="sort=latest&limit=5" />
      </Suspense>
    </div>
  );
}

export default ProfilePage;
