import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {NextURL} from "next/dist/server/web/next-url";

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl; // get pathname of request (e.g. /login)

  if (!pathname.includes(".") && !pathname.startsWith("/api")) {
    // ログイン画面かつ認証済み
    if (req.cookies["next-auth.session-token"] || req.cookies["__Secure-next-auth.session-token"]) {
      if (pathname === '/' || pathname === '/login') {
        return NextResponse.redirect(new NextURL("/dashboard", req.url));
      }
    }
    return NextResponse.rewrite(new NextURL(`/app${pathname}`, req.url));
  }
}
