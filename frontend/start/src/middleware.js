import { authMiddleware } from "./utils/middlewareAuth";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/signin") || pathname.startsWith("/signup")) {
    const user = await authMiddleware(req);

    if (user) {
      return Response.redirect(new URL("/", req.nextUrl));
    }
  }

  if (pathname.startsWith("/profile")) {
    const user = await authMiddleware(req);

    if (!user) {
      return Response.redirect(new URL("/signin", req.nextUrl));
    }
  }
}

export const config = {
  matcher: ["/profile/:path*", "/signin", "/signup"],
};
