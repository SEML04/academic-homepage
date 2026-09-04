import type { Metadata } from 'next';
import './globals.css';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const siteUrl = isGitHubPages
  ? 'https://seml04.github.io/academic-homepage/'
  : 'https://lin-wei-mathematics.civil-fawn-0135.chatgpt.site/';
const socialImage = isGitHubPages ? '/academic-homepage/og.png' : '/og.png';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Lin Wei · Mathematics', template: '%s · Lin Wei' },
  description: 'Academic homepage of Lin Wei, a researcher in algebraic geometry and related areas.',
  openGraph: {
    title: 'Lin Wei · Mathematics',
    description: 'Algebraic Geometry · Moduli Spaces · Derived Categories',
    url: siteUrl,
    siteName: 'Lin Wei · Mathematics',
    images: [{ url: socialImage, width: 1732, height: 909, alt: 'Lin Wei · Mathematics' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lin Wei · Mathematics',
    description: 'Algebraic Geometry · Moduli Spaces · Derived Categories',
    images: [socialImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
