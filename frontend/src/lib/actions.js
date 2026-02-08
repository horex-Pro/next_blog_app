"use server";

import { createCommentApi } from "@/services/commentService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createComment(prevState, { formData, postId, parentId }) {
  const cookiesStore = await cookies();
  const options = await setCookieOnReq(cookiesStore);

  const rawFormData = {
    postId,
    parentId,
    text: formData.get("text"),
  };

  try {
    const { message } = await createCommentApi(rawFormData, options);
    revalidatePath("/blogs/[postSlug]");
    return {
      message,
    };
  } catch (err) {
    console.log(err?.response?.data?.message);
    const error = err?.response?.data?.message;
    return {
      error,
    };
  }
}
