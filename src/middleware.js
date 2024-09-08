import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    console.log(req.nextUrl.pathname);
    console.log(req.nextauth.token.role);

      if(req.nextUrl.pathname.startsWith("/engineering") &&
                req.nextauth.token.role != "premium" &&
                req.nextauth.token.role != "Neanderthal"

){
 return NextResponse.rewrite(new URL("/denied", req.url));
}


      if(req.nextUrl.pathname.startsWith("/oneshot") &&      
        req.nextauth.token.role != "premium" &&
        req.nextauth.token.role != "pro" &&
        req.nextauth.token.role != "Martian" &&
        req.nextauth.token.role != "Neanderthal" &&
        req.nextauth.token.role != "Navarian"

){
    return NextResponse.rewrite(new URL('/denied', req.url));
}


if(req.nextUrl.pathname.startsWith("/varsity") &&
req.nextauth.token.role != "Martian" &&
req.nextauth.token.role != "Neanderthal" && 
req.nextauth.token.role != "Navarian"

){
return NextResponse.rewrite(new URL("/denied", req.url));
}

if(req.nextUrl.pathname.startsWith("/medical") &&
req.nextauth.token.role != "Navarian"

){
return NextResponse.rewrite(new URL("/denied", req.url));
}


},
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ["/engineering/:path*", "/oneshot/:path*", "/varsity/:path*", "/denied", "/"] };