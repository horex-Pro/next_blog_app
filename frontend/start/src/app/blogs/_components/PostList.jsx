import Image from "next/image";
import React from "react";
import CoverImage from "./CoverImage";
import Link from "next/link";
import { ClockIcon } from "@heroicons/react/24/outline";
import Author from "./Author";
import PostIntraction from "./PostIntraction";
import { getPosts } from "@/services/postServices";

async function PostList() {
  const posts = await getPosts();

  if (!posts || posts.length === 0) return null;

  return (
    <div className="grid grid-cols-12 gap-8">
      {posts.map((post) => (
        <div
          key={post.id}
          className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-100 p-2 rounded-lg"
        >
          <div className="relative aspect-video overflow-hidden rounded-lg mb-6">
            <CoverImage {...post} />
          </div>
          <div>
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="mb-4 font-bold text-secondary-700 hover:text-secondary-900">
                {post.title}
              </h2>
            </Link>
            <div className="flex items-center justify-between mb-5">
              <Author {...post.author} />
              <div className="flex items-center text-[10px] text-secondary-500">
                <ClockIcon className="w-4 h-4 stroke-secondary-500 ml-1" />
                <span className="ml-1">خواندن:</span>
                <span className="ml-1 leading-3">{post.readingTime}</span>
              </div>
            </div>
            <PostIntraction post={post} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
