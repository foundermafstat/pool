import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth((req) => {
  const { nextUrl } = req;
  const isAdminRoute = nextUrl.pathname.startsWith("/admin");

  if (isAdminRoute) {
    const session = req.auth;
    if (!session) {
      const url = new URL(`/auth/signin?callbackUrl=${encodeURIComponent(nextUrl.pathname)}`, nextUrl);
      return NextResponse.redirect(url);
    }
    if (session.user?.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", nextUrl));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*"],
};
