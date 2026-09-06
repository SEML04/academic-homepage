import type { Metadata } from 'next';
import { PageShell } from '../page-shell';

export const metadata: Metadata = {
  title: 'Curriculum Vitae',
  description: 'Education and research interests of Yunshu Dai.',
};

const cvPdf = process.env.GITHUB_ACTIONS === 'true'
  ? '/academic-homepage/cv/Yunshu_Dai_CV.pdf'
  : '/cv/Yunshu_Dai_CV.pdf';

const education = [
  {
    years: '2025—present',
    role: 'M.Sc. in Mathematics (in progress)',
    place: 'Academy of Mathematics and Systems Science, Chinese Academy of Sciences · Beijing, China',
    supervisor: true,
  },
  {
    years: '2021—2025',
    role: 'B.Sc. in Mathematics and Applied Mathematics',
    place: 'Tongji University · Shanghai, China',
    supervisor: false,
  },
];

export default function CvPage() {
  return (
    <PageShell eyebrow="Curriculum Vitae" title="Education & research">
      <div className="cv-download-row">
        <p>Download a typeset copy of my complete curriculum vitae.</p>
        <a className="button button-primary" href={cvPdf} target="_blank" rel="noreferrer">
          Download CV <span aria-hidden="true">↓</span>
        </a>
      </div>

      <section className="split-section">
        <h2>Research interests</h2>
        <div className="prose">
          <p>Diophantine geometry, Diophantine approximation, arithmetic geometry and analytic number theory, especially rational point counting and approximation on algebraic varieties.</p>
        </div>
      </section>

      <section className="split-section">
        <h2>Education</h2>
        <div className="timeline">
          {education.map((item) => (
            <article className="timeline-item" key={item.years + item.role}>
              <p className="year">{item.years}</p>
              <div>
                <h3>{item.role}</h3>
                <p>{item.place}</p>
                {item.supervisor ? (
                  <p>Supervisor: <a className="inline-link" href="https://sites.google.com/site/hcsoft9099/home?authuser=0" target="_blank" rel="noreferrer">Zhizhong Huang</a></p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Appointments, awards, and service will be added when details are available. */}
    </PageShell>
  );
}
