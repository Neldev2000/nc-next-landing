import { NextResponse, NextRequest } from 'next/server';

// Allowed paths that should be accessible on the landing site
const ALLOWED_PATHS = ['/', '/es', '/en', '/pt'];

// Check if a path is a static asset (JS, CSS, images, etc.)
function isStaticAsset(pathname: string): boolean {
  return /\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/.test(pathname);
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  // Allow access to the main paths and static assets
  if (ALLOWED_PATHS.includes(pathname) || isStaticAsset(pathname)) {
    return NextResponse.next();
  }

  // Redirect all other paths to app.next-core.net
  const redirectUrl = new URL(pathname, 'https://app.next-core.net');
  
  // Preserve query parameters
  redirectUrl.search = url.search;
  
  return NextResponse.redirect(redirectUrl);
}

// Define which paths the middleware should run on
export const config = {
  matcher: [
    // Match all paths except static assets in public directory
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}; 