export default async function setCookieOnReq(cookies) {
  const accessToken = await cookies.get("accessToken");
  const refreshToken = await cookies.get("refreshToken");

  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: `${accessToken?.name}=${accessToken?.value}; ${refreshToken?.name}=${refreshToken?.value}`,
    },
  };

  return options;
}
