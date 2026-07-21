import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Adjust path based on your styling folder

const inter = Inter({ subsets: ['latin'] });

// 1. Configure the metadataBase and default canonical alternates in the root layout.
// Next.js 15 automatically prefixes relative paths in alternates.canonical with this base URL,
// generating absolute canonical tags (e.g., href="https://www.selfera.co.uk/about") for SEO.
export const metadata: Metadata = {
  metadataBase: new URL('https://www.selfera.co.uk'),
  title: {
    default: 'Selfera | Enterprise Grade AI for Owner-Led SMEs',
    template: '%s | Selfera',
  },
  description: 'We develop custom AI powered operations and marketing automations for owner led SMEs to empower them to compete with larger companies.',
  alternates: {
    canonical: '/', // Resolves to: https://www.selfera.co.uk/
  },
  // Ensure search engines are permitted to crawl the website
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Selfera | Enterprise Grade AI for Owner-Led SMEs',
    description: 'We develop custom AI powered operations and marketing automations for owner led SMEs to empower them to compete with larger companies.',
    url: 'https://www.selfera.co.uk',
    siteName: 'Selfera',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Selfera - AI powered operations and marketing automations for owner-led SMEs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Selfera | Enterprise Grade AI for Owner-Led SMEs',
    description: 'We develop custom AI powered operations and marketing automations for owner led SMEs to empower them to compete with larger companies.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
