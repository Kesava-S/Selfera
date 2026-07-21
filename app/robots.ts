import type { MetadataRoute } from 'next';

// Define the robots configuration using the built-in MetadataRoute type.
// Next.js 15 uses this export to automatically serve robots.txt at /robots.txt
export default function robots(): MetadataRoute.Robots {
  // 1. Resolve the base URL from the environment variable, falling back to your production URL.
  // We trim trailing slashes to ensure url construction is clean and consistent.
  const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.selfera.co.uk';
  const baseUrl = rawBaseUrl.endsWith('/') ? rawBaseUrl.slice(0, -1) : rawBaseUrl;

  return {
    // 2. Allow all crawlers to access the entire site content.
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // 3. Declare the location of the XML sitemap.
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
