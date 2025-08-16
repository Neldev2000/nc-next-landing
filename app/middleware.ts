import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Security headers for better SEO and security
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // Cache control headers for better performance
  const pathname = request.nextUrl.pathname;
  
  if (pathname.startsWith('/_next/') || pathname.startsWith('/api/')) {
    // Static assets and API routes
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (pathname.startsWith('/recursos/')) {
    // Resource pages - cache for 1 hour, stale-while-revalidate for 24 hours
    response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  } else if (pathname === '/') {
    // Homepage - cache for 30 minutes, stale-while-revalidate for 1 hour
    response.headers.set('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=3600');
  } else {
    // Other pages - cache for 15 minutes, stale-while-revalidate for 1 hour
    response.headers.set('Cache-Control', 'public, s-maxage=900, stale-while-revalidate=3600');
  }

  // Compression headers
  response.headers.set('Accept-Encoding', 'gzip, deflate, br');

  // Preload critical resources
  if (pathname === '/') {
    response.headers.set('Link', '</logo.svg>; rel=preload; as=image, </main.jpg>; rel=preload; as=image');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
