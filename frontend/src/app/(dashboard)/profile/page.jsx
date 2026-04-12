import React, { Suspense } from "react";
import { Card } from "./_components/Card";
import PostsTable from "./posts/_/components/PostsTable";
import CardsWrapper from "./_components/CardsWrapper";
import Fallback from "@/components/ui/Fallback";

async function ProfilePage() {
  return (
    <div>
      <Suspense fallback={<Fallback />}>
        <CardsWrapper />
      </Suspense>
      <PostsTable queries="sort=latest&limit=5" />
    </div>
  );
}

export default ProfilePage;
