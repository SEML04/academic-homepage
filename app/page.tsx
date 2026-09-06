import Link from 'next/link';
import { SiteHeader } from './site-header';
import { SiteFooter } from './page-shell';

const profileImage = process.env.GITHUB_ACTIONS === 'true'
  ? '/academic-homepage/profile.jpg'
  : '/profile.jpg';

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero shell">
        <div className="hero-copy reveal">
          <p className="eyebrow">Pure Mathematics · Arithmetic Geometry</p>
          <h1>Yunshu Dai</h1>
          <p className="hero-intro">
            I&apos;m interested in Diophantine geometry, Diophantine approximation,
            arithmetic geometry and analytic number theory, including rational
            point counting and approximation on algebraic varieties.
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

        <aside className="identity-card reveal reveal-delay" aria-label="Profile and affiliation">
          <div className="profile-photo-wrap">
            <img className="profile-photo" src={profileImage} alt="Portrait of Yunshu Dai" />
          </div>
          <div className="identity-info">
            <p className="card-label">Affiliation</p>
            <p className="card-copy">Academy of Mathematics and Systems Science<br />Chinese Academy of Sciences</p>
            <a className="email-link" href="mailto:daiyunshu25@mails.ucas.ac.cn">daiyunshu25@mails.ucas.ac.cn</a>
          </div>
        </aside>
      </section>

      <section className="research-strip">
        <div className="shell research-grid">
          <p className="section-kicker">Research themes</p>
          <div className="research-list">
            <span>Diophantine geometry</span>
            <span>Diophantine approximation</span>
            <span>Analytic number theory</span>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
