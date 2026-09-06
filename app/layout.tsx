import type { Metadata } from 'next';
import './globals.css';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const siteUrl = isGitHubPages
  ? 'https://seml04.github.io/academic-homepage/'
  : 'https://lin-wei-mathematics.civil-fawn-0135.chatgpt.site/';
const socialImage = isGitHubPages ? '/academic-homepage/og.png' : '/og.png';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Yunshu Dai · Mathematics', template: '%s · Yunshu Dai' },
  description: 'Academic homepage of Yunshu Dai, a researcher in arithmetic and Diophantine geometry.',
  openGraph: {
    title: 'Yunshu Dai · Mathematics',
    description: 'Arithmetic Geometry · Diophantine Geometry · Analytic Number Theory',
    url: siteUrl,
    siteName: 'Yunshu Dai · Mathematics',
    images: [{ url: socialImage, width: 1732, height: 909, alt: 'Yunshu Dai · Mathematics' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yunshu Dai · Mathematics',
    description: 'Arithmetic Geometry · Diophantine Geometry · Analytic Number Theory',
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
