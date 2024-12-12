import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req: Request) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // If user is not authenticated, redirect to sign-in page
  if (!token) {
    const url = new URL("/", req.url);
    url.searchParams.set("callbackUrl", req.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/categories/:path*", "/choose-language"], // Apply middleware to these routes
};
