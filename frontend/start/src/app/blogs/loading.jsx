import Spinner from "@/components/ui/Spinner";
import React from "react";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <span className="text-lg text-secondary-500">در حال بارگیری اطلاعات</span>
      <Spinner />
    </div>
  );
}

export default Loading;
