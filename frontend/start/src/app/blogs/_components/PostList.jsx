import Image from "next/image";
import React from "react";

async function PostList() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  } = await response.json();

  console.log(posts);
  return posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-8">
      {posts.map((post) => {
        return (
          <div
            className=" col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-100 p-2 rounded-lg "
            key={post.id}
          >
            <div className="relative aspect-video overflow-hidden rounded-lg mb-6">
              <Image
                src={post.coverImageUrl}
                fill
                className=" object-cover object-center hover:scale-110 transition-all duration-300  ease-in-out"
                alt={post.title}
                quality={80}
              />
            </div>
          </div>
        );
      })}
    </div>
  ) : null;
}

export default PostList;
