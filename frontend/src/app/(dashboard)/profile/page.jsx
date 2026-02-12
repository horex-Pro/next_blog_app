import { fetchCardData } from "@/services/data";
import React from "react";

async function ProfilePage() {
  await fetchCardData();
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default ProfilePage;
