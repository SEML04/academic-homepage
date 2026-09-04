import type { ReactNode } from 'react';
import { SiteHeader } from './site-header';

export function PageShell({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return (
    <main>
      <SiteHeader />
      <header className="page-head shell reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        <p className="page-intro">{intro}</p>
      </header>
      <div className="shell page-content reveal reveal-delay">{children}</div>
      <SiteFooter />
    </main>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="shell footer-inner">
        <span>Lin Wei · Pure Mathematics</span>
        <span>Last updated September 2026</span>
      </div>
    </footer>
  );
}
