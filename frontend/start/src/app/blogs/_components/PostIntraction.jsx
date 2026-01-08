"use client";

import ButtonIcon from "@/components/ui/ButtonIcon";
import { bookmarkPostApi, likePostApi } from "@/services/postServices";
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
  const [likePending, setLikePending] = useState(false);

  // bookmark state
  const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked);
  const [bookmarkPending, setBookmarkPending] = useState(false);

  const likeHandler = async () => {
    if (likePending) return;

    setLikePending(true);

    const prevLiked = isLiked;
    const prevLikesCount = likesCount;

    // optimistic update
    setIsLiked(!prevLiked);
    setLikesCount(prevLiked ? prevLikesCount - 1 : prevLikesCount + 1);

    try {
      const { message } = await likePostApi(post._id);
      toast.success(message);
    } catch (error) {
      // rollback
      setIsLiked(prevLiked);
      setLikesCount(prevLikesCount);
      toast.error(error?.response?.data?.message || "خطایی رخ داده است");
    } finally {
      setLikePending(false);
    }
  };

  const bookmarkHandler = async () => {
    if (bookmarkPending) return;

    setBookmarkPending(true);

    const prevBookmarked = isBookmarked;


    setIsBookmarked(!prevBookmarked);

    try {
      const { message } = await bookmarkPostApi(post._id);
      toast.success(message);
    } catch (error) {
      setIsBookmarked(prevBookmarked);
      toast.error(error?.response?.data?.message || "خطایی رخ داده است");
    } finally {
      setBookmarkPending(false);
    }
  };

  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="secondary">
        <ChatBubbleLeftEllipsisIcon />
        <span>{toPersianDigits(post.commentsCount)}</span>
      </ButtonIcon>

      <ButtonIcon variant="red" onClick={likeHandler} disabled={likePending}>
        {isLiked ? <HeartIconSolid /> : <HeartIcon />}
        <span>{toPersianDigits(likesCount)}</span>
      </ButtonIcon>

      <ButtonIcon
        variant="primary"
        onClick={bookmarkHandler}
        disabled={bookmarkPending}
      >
        {isBookmarked ? <BookmarkIconSolid /> : <BookmarkIcon />}
      </ButtonIcon>
    </div>
  );
}

export default PostIntraction;
