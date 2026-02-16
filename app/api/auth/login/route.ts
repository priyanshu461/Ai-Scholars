import { NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, createSessionValue, isRole } from "@/lib/auth";

export async function POST(request: Request) {
  const body = (await request.json()) as { name?: string; role?: string };

  if (!body.name || !body.role || !isRole(body.role)) {
    return NextResponse.json({ message: "Invalid payload" }, { status: 400 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(AUTH_COOKIE_NAME, createSessionValue({ name: body.name, role: body.role }), {
    httpOnly: true,
    sameSite: "lax",
    path: "/"
  });

  return response;
}
