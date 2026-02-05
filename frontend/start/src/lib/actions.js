"use server";

import { createCommentApi } from "@/services/commentService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import toast from "react-hot-toast";

export async function createComment(postId, parentId, formData) {
  const cookiesStore = await cookies();
  const options = await setCookieOnReq(cookiesStore);

  const rawFormData = {
    postId,
    parentId,
    text: formData.get("text"),
  };

  try {
    const response = await createCommentApi(rawFormData, options);
  } catch (error) {
    console.log(error?.response?.data?.message);
  }

  revalidatePath("/blogs/");
}
