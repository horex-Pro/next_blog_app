import { getPostBySlug, getPosts } from "@/services/postServices";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import RelatedPost from "../_components/RelatedPost";
import PostComment from "../_components/comment/PostComment";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    postSlug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { postSlug } = await params;
  const post = await getPostBySlug(postSlug);

  return {
    title: post ? post.title : "پست یافت نشد",
    description: post ? post.briefText : "پستی با این مشخصات یافت نشد.",
  };
}
async function SinglePost({ params }) {
  const { postSlug } = await params;
  const post = await getPostBySlug(postSlug);
  if (!post) notFound();

  console.log(post.related);

  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">
        {post.title}
      </h1>

      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
        <Image
          src={post.coverImageUrl}
          alt={post.title}
          fill
          className="object-cover object-center hover:scale-110 transition-all duration-300"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>
      {post.related.length > 0 && <RelatedPost posts={post.related} />}
      {<PostComment post={post} />}
    </div>
  );
}
export default SinglePost;
