import { NextResponse } from "next/server";
import {publicRoutes, 
    authRoutes, 
    apiAuthPrefix,
     DEFAULT_LOGIN_REDIRECT} from "./routes";
import NextAuth from "next-auth";
import authConfig from "./auth.config";

const {auth} = NextAuth(authConfig)
export default auth((req) => {
    const {nextUrl} = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
   
   
    if(isApiAuthRoute) {
        return undefined;
    }
    if (isAuthRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.nextUrl))
    } return undefined;
}    if (!isLoggedIn && !isPublicRoute) {
                return NextResponse.redirect(new URL("/auth/login", req.nextUrl))


}})

export const config = {
    matcher: [
          "/settings",
          "/",
            "/auth/login",
            "/auth/register",

    ],
  }