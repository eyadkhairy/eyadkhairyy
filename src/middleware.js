import { NextResponse } from "next/server";

export const config = {
  matcher: "/integrations/:path*",
};

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-createxyz-project-id", "43c3a2aa-15f4-4b7a-9103-51f31cac66de");
  requestHeaders.set("x-createxyz-project-group-id", "44b7b19a-094a-4de5-ba7e-3236268b2dd6");


  request.nextUrl.href = `https://www.create.xyz/${request.nextUrl.pathname}`;

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}