import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "@/lib/i18n/config";

function getLocale(request: NextRequest): string {
  // Check if locale is in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameLocale = i18n.locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameLocale) return pathnameLocale;

  // Check Accept-Language header
  const acceptLanguage = request.headers.get("Accept-Language");
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(",")
      .map((lang) => lang.split(";")[0].trim().substring(0, 2))
      .find((lang) => i18n.locales.includes(lang as typeof i18n.locales[number]));

    if (preferredLocale) return preferredLocale;
  }

  return i18n.defaultLocale;
}

function nextWithLocale(request: NextRequest, locale: string) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-hyreel-locale", locale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip for static files, API routes, and already localized paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.includes(".") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale
  const pathnameLocale = i18n.locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameLocale) {
    return nextWithLocale(request, pathnameLocale);
  }

  // For the default locale (en), don't redirect - serve the page directly
  // Only redirect for non-default locales when detected from headers
  const locale = getLocale(request);

  if (locale !== i18n.defaultLocale) {
    // Redirect to localized version for non-default locales
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }

  return nextWithLocale(request, locale);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, static, etc.)
    "/((?!_next|api|static|.*\\..*).*)",
  ],
};
