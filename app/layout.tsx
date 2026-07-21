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
    default: 'Selfera | AI Automation for UK Businesses',
    template: '%s | Selfera',
  },
  description: 'Custom AI agents and operating systems that replace manual admin with premium digital operations.',
  alternates: {
    canonical: '/', // Resolves to: https://www.selfera.co.uk/
  },
  // Ensure search engines are permitted to crawl the website
  robots: {
    index: true,
    follow: true,
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
