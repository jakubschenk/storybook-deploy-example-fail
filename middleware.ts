import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
  });
  if (token) {
    NextResponse.next();
  }

  NextResponse.next();
}
