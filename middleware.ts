import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (
    pathname === "/" ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/cours") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/admin")
  ) {
    if (!pathname.startsWith("/login") && !pathname.startsWith("/api/auth")) {
      const token = req.cookies.get("token");
      if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
    }
  }
  return NextResponse.next();
}
