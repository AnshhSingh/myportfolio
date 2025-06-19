import { NextResponse } from 'next/server'
import type { NextMiddleware, NextRequest } from 'next/server'

export const middleware: NextMiddleware = (req: NextRequest) => {
  const response = NextResponse.next()

  // Add security headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // Set Content Security Policy
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com https://*.google-analytics.com https://*.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https://*.google-analytics.com https://*.googletagmanager.com; font-src 'self'; connect-src 'self' https://va.vercel-scripts.com https://*.google-analytics.com https://*.googletagmanager.com https://anshsingh.live;"
  )

  // Add preload for critical resources
  if (req.nextUrl.pathname === '/') {
    // Preload critical fonts
    response.headers.append(
      'Link',
      '</fonts/geist.woff2>; rel=preload; as=font; crossorigin'
    )
    
    // Preload hero image
    response.headers.append(
      'Link',
      '</me.jpeg>; rel=preload; as=image'
    )
  }

  return response
}

// Only run middleware on routes matching these patterns
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
