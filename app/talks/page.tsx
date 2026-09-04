import type { Metadata } from 'next';
import { PageShell } from '../page-shell';

export const metadata: Metadata = { title: 'Seminars & Talks', description: 'Upcoming seminars and selected talks by Lin Wei.' };

const events = [
  { date: '18 Sep 2026', kind: 'Seminar', title: 'Derived geometry of wall-crossing', place: 'Algebraic Geometry Seminar · University of Chicago', note: 'Upcoming' },
  { date: '06 Nov 2026', kind: 'Conference', title: 'Categorical chambers and birational models', place: 'Geometry at the Coast · UC San Diego', note: 'Upcoming' },
  { date: '14 May 2026', kind: 'Colloquium', title: 'Moduli spaces: from equations to geometry', place: 'Mathematics Colloquium · Nanjing University', note: 'Past' },
  { date: '27 Feb 2026', kind: 'Seminar', title: 'Compactified Jacobians in families', place: 'Geometry & Topology Seminar · Warwick', note: 'Past' },
  { date: '03 Oct 2025', kind: 'Workshop', title: 'Stability conditions and derived categories', place: 'Derived Methods Workshop · Bonn', note: 'Past' },
];

export default function TalksPage() {
  return (
    <PageShell eyebrow="Seminars & Talks" title="On the board" intro="Upcoming visits and a selection of recent lectures, ranging from specialist seminars to general mathematical audiences.">
      <div className="event-list">
        {events.map((event) => <article className="event" key={event.date + event.title}>
          <time>{event.date}</time>
          <div className="event-body"><p className="event-kind">{event.kind}</p><h2>{event.title}</h2><p>{event.place}</p></div>
          <span className={`status ${event.note === 'Upcoming' ? 'upcoming' : ''}`}>{event.note}</span>
        </article>)}
      </div>
      <aside className="invite-note"><span>∴</span><div><h2>Invitations</h2><p>For seminar and conference invitations, please write to <a href="mailto:lin.wei@example.edu">lin.wei@example.edu</a>.</p></div></aside>
    </PageShell>
  );
}
