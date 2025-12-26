import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export const config = {
  matcher: [
    "/admin",
    "/seller",
    "/admin/:path*",
    "/user/:path*",
    "/seller/:path*",
  ],
};

export default withAuth(
  async function middleware(req) {
    const url = req.nextUrl.pathname;

    const role = req.nextauth?.token?.role || req.nextauth?.token?.user?.role;

    if (url.includes("/admin") && role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
    if (url.includes("/seller") && role !== "seller") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        if (!token) {
          return false;
        }

        return true;
      },
    },
  }
);
