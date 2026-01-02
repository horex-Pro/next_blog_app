import Avatar from "@/components/ui/Avatar";
import React from "react";

function Author({ name, avatarUrl }) {
  return (
    <div className="flex items-center gap-x-1">
      <Avatar src={avatarUrl} />
      <span className=" text-sm text-secondary-500">{name}</span>
    </div>
  );
}

export default Author;
