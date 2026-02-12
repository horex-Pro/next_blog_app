import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import { getAllUserApi } from "./authService";
import { getAllCommentsApi } from "./commentService";
import { getPosts } from "./postServices";

export async function fetchCardData() {
  const cookieStore = await cookies();
  console.log("Cookies:", cookieStore.getAll());
  const options = setCookieOnReq(cookieStore);

  try {
    const data = await Promise.all([
      getAllUserApi(options),
      getAllCommentsApi(options),
      getPosts(null , options),
    ]);

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
