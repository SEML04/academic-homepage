import Link from 'next/link';
import { SiteHeader } from './site-header';
import { SiteFooter } from './page-shell';

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero shell">
        <div className="hero-copy reveal">
          <p className="eyebrow">Pure Mathematics · Algebraic Geometry</p>
          <h1>Lin Wei</h1>
          <p className="hero-intro">
            I study the geometry and arithmetic of moduli spaces, with a
            particular interest in derived methods and questions at the
            boundary of algebraic geometry and representation theory.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/publications">
              View publications <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="/cv">
              Curriculum vitae <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <aside className="identity-card reveal reveal-delay" aria-label="Current position">
          <span className="orb orb-one" />
          <span className="orb orb-two" />
          <div className="monogram" aria-hidden="true">LW</div>
          <div>
            <p className="card-label">Currently</p>
            <p className="card-title">Assistant Professor</p>
            <p className="card-copy">Department of Mathematics<br />Eastlake University</p>
          </div>
          <a className="email-link" href="mailto:lin.wei@example.edu">lin.wei@example.edu</a>
        </aside>
      </section>

      <section className="research-strip">
        <div className="shell research-grid">
          <p className="section-kicker">Research themes</p>
          <div className="research-list">
            <span>Moduli spaces</span>
            <span>Derived categories</span>
            <span>Birational geometry</span>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
