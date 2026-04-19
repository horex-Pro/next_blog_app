import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import { getAllUserApi } from "./authService";
import { getAllCommentsApi } from "./commentService";
import { getPosts } from "./postServices";
import toast from "react-hot-toast";

export async function fetchCardData() {
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);

  try {
    const data = await Promise.all([
      getAllUserApi(options),
      getAllCommentsApi(options),
      getPosts(null, options),
    ]);

    console.log(data);
    const numberOfUsers = Number(data[0].users.length ?? 0);
    const numberOfComments = Number(data[1].commentsCount ?? 0);
    const numberOfPosts = Number(data[2].posts.length ?? 0);

    return { numberOfUsers, numberOfComments, numberOfPosts };
  } catch (error) {
    toast.error("خطا در بارگیری اطلاعات");
    console.log(error.response.message);
  }
}
