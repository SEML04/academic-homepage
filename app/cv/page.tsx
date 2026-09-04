import type { Metadata } from 'next';
import { PageShell } from '../page-shell';

export const metadata: Metadata = { title: 'Curriculum Vitae', description: 'Education, positions, awards, and academic service of Lin Wei.' };

const positions = [
  { years: '2024—present', role: 'Assistant Professor', place: 'Eastlake University, Department of Mathematics' },
  { years: '2021—2024', role: 'Szegő Assistant Professor', place: 'Stanford University' },
  { years: '2020—2021', role: 'Postdoctoral Fellow', place: 'Institut des Hautes Études Scientifiques' },
];

const education = [
  { years: '2015—2020', role: 'Ph.D. in Mathematics', place: 'Princeton University · Advisor: Claire Voisin' },
  { years: '2011—2015', role: 'B.Sc. in Mathematics', place: 'Tsinghua University' },
];

function Timeline({ items }: { items: typeof positions }) {
  return <div className="timeline">{items.map((item) => (
    <article className="timeline-item" key={item.years + item.role}>
      <p className="year">{item.years}</p>
      <div><h3>{item.role}</h3><p>{item.place}</p></div>
    </article>
  ))}</div>;
}

export default function CvPage() {
  return (
    <PageShell eyebrow="Curriculum Vitae" title="Experience & education" intro="A concise overview of my academic appointments, training, and service. A full PDF version will be added later.">
      <section className="split-section">
        <h2>Appointments</h2>
        <Timeline items={positions} />
      </section>
      <section className="split-section">
        <h2>Education</h2>
        <Timeline items={education} />
      </section>
      <section className="split-section">
        <h2>Awards</h2>
        <div className="simple-list">
          <p><span>2025</span> Early Career Research Fellowship</p>
          <p><span>2020</span> Porter Ogden Jacobus Fellowship</p>
          <p><span>2018</span> Graduate Teaching Award</p>
        </div>
      </section>
      <section className="split-section">
        <h2>Service</h2>
        <div className="prose"><p>Organizer, Eastlake Algebraic Geometry Seminar (2025—present)</p><p>Referee for journals in algebraic geometry and representation theory.</p></div>
      </section>
    </PageShell>
  );
}
