"use client";

import ButtonIcon from "@/components/ui/ButtonIcon";
import { likePostApi } from "@/services/postServices";
import { toPersianDigits } from "@/utils/numberFormatter";

import {
  BookmarkIcon,
  ChatBubbleLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import {
  BookmarkIcon as BookmarkIconSolid,
  HeartIcon as HeartIconSolid,
} from "@heroicons/react/24/solid";

import { useState } from "react";
import toast from "react-hot-toast";

function PostIntraction({ post }) {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likesCount, setLikesCount] = useState(post.likesCount);
  const [isPending, setIsPending] = useState(false);

  const likeHandler = async () => {
    if (isPending) return;

    setIsPending(true);
    const prevLiked = isLiked;
    const prevLikesCount = likesCount;

    setIsLiked(!prevLiked);
    setLikesCount(prevLiked ? prevLikesCount - 1 : prevLikesCount + 1);

    try {
      const { message } = await likePostApi(post._id);
      toast.success(message);
    } catch (error) {
      setIsLiked(prevLiked);
      setLikesCount(prevLikesCount);
      toast.error(error?.response?.data?.message || "خطایی رخ داده است");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="secondary">
        <ChatBubbleLeftEllipsisIcon />
        <span>{toPersianDigits(post.commentsCount)}</span>
      </ButtonIcon>

      <ButtonIcon variant="red" onClick={likeHandler} disabled={isPending}>
        {isLiked ? <HeartIconSolid /> : <HeartIcon />}
        <span>{toPersianDigits(likesCount)}</span>
      </ButtonIcon>

      <ButtonIcon variant="primary">
        <BookmarkIcon />
      </ButtonIcon>
    </div>
  );
}

export default PostIntraction;
