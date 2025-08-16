import { NextResponse, NextRequest } from 'next/server';

// Allowed paths that should be accessible on the landing site
const ALLOWED_PATHS = ['/', '/es', '/en', '/pt', '/nextcore-isp', '/resources'];

// Check if a path is a static asset (JS, CSS, images, etc.)
function isStaticAsset(pathname: string): boolean {
  return /\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/.test(pathname);
}

// Check if a path is allowed (including subroutes)
function isAllowedPath(pathname: string): boolean {
  // Check exact matches
  if (ALLOWED_PATHS.includes(pathname)) {
    return true;
  }
  
  // Check if path starts with any allowed path (for subroutes)
  return ALLOWED_PATHS.some(allowedPath => {
    // Special case for root path
    if (allowedPath === '/') {
      return pathname === '/';
    }
    // Check if path starts with allowed path (for subroutes)
    return pathname.startsWith(allowedPath + '/') || pathname === allowedPath;
  });
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  // Allow access to the main paths, their subroutes, and static assets
  if (isAllowedPath(pathname) || isStaticAsset(pathname)) {
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