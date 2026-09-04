'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function SiteHeader() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const nextDark = stored ? stored === 'dark' : prefersDark;
    setDark(nextDark);
    document.documentElement.dataset.theme = nextDark ? 'dark' : 'light';
  }, []);

  function toggleTheme() {
    const nextDark = !dark;
    setDark(nextDark);
    document.documentElement.dataset.theme = nextDark ? 'dark' : 'light';
    window.localStorage.setItem('theme', nextDark ? 'dark' : 'light');
  }

  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link className="wordmark" href="/" aria-label="Lin Wei, home">
          <span className="wordmark-mark">∫</span>
          <span>Lin Wei</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/cv">CV</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/talks">Seminars &amp; Talks</Link>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}>
          <span aria-hidden="true">{dark ? '☀' : '☾'}</span>
        </button>
      </div>
    </header>
  );
}
