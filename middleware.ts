import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isPanelRoute = request.nextUrl.pathname.startsWith("/panel");
  if (!isPanelRoute) {
    return NextResponse.next();
  }

  const session = request.cookies.get("erp_session")?.value;
  if (!session) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/panel/:path*"]
};
