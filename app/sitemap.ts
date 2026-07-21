import type { MetadataRoute } from 'next';

// Define the sitemap configuration using the built-in MetadataRoute type.
// Next.js 15 uses this export to automatically serve sitemap.xml at /sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Resolve the base URL from the environment variable, falling back to a sensible default.
  // We trim trailing slashes to ensure url construction is clean and consistent.
  const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const baseUrl = rawBaseUrl.endsWith('/') ? rawBaseUrl.slice(0, -1) : rawBaseUrl;

  // 2. Define the static routes with their specific metadata configurations.
  const staticRoutes = [
    {
      path: '',
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      path: '/services',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      path: '/solutions',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      path: '/about',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      path: '/industries',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      path: '/pricing',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      path: '/contact',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      path: '/case-studies',
      changeFrequency: 'weekly' as const, // sensible default for case-studies
      priority: 0.8,                      // sensible priority for case-studies
    },
    {
      path: '/blog',
      changeFrequency: 'weekly' as const, // sensible default for active blog listing
      priority: 0.7,                      // sensible priority for blog
    },
    {
      path: '/privacy-policy',
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      path: '/terms-and-conditions',
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ];

  // 3. Map the routes to the standard MetadataRoute.Sitemap structure.
  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
