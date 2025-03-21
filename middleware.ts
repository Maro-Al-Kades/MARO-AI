import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

const isProtectedRoute = createRouteMatcher(["/:locale/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();

  return handleI18nRouting(req);
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
    "/",
    "/(ar|en)/:path*",
    "/sign-in",
  ],
};
