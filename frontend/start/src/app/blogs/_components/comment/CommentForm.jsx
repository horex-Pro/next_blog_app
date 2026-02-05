"use client";

import Button from "@/components/ui/Button";
import TextArea from "@/components/ui/TextArea";
import { createComment } from "@/lib/actions";
import React, { useState } from "react";

function CommentForm({ postId, parentId }) {
  const [text, setText] = useState("");

  console.log(postId);

  const createCommentWithData = createComment.bind(null, postId, parentId);
  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form
            // ref={ref}
            className="space-y-7"
            action={createCommentWithData}
          >
            <TextArea
              name="text"
              label="متن نظر"
              value={text}
              isRequired
              onChange={(e) => setText(e.target.value)}
            />
            <Button>تایید</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommentForm;
