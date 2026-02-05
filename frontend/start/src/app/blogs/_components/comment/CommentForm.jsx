"use client";

import Button from "@/components/ui/Button";
import SpinnerMini from "@/components/ui/SpinnerMini";
import SubmitButton from "@/components/ui/SubmissionButton";
import TextArea from "@/components/ui/TextArea";
import { createComment } from "@/lib/actions";
import React, { useState } from "react";
import { useFormStatus } from "react-dom";

function CommentForm({ postId, parentId }) {
  const [text, setText] = useState("");
  const createCommentWithData = createComment.bind(null, postId, parentId);
  const { pending } = useFormStatus();

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
            <SubmitButton>تایید</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommentForm;
