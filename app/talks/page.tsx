import type { Metadata } from 'next';
import { PageShell } from '../page-shell';

export const metadata: Metadata = {
  title: 'Seminars & Talks',
  description: 'Seminars attended and organized by Yunshu Dai.',
};

const events = [
  { date: '2025—2026', kind: 'Seminar', title: 'Tropical Geometry', place: 'Online', note: 'Finished', url: 'https://severuslin.github.io/Seminar/TG_Seminar.html' },
  { date: '2024—2025', kind: 'Seminar', title: 'Algebraic Number Theory', place: 'Tongji University', note: 'Finished' },
  { date: '2023—2024', kind: 'Seminar', title: 'Algebraic and Number Theory', place: 'Tongji University', note: 'Finished' },
];

export default function TalksPage() {
  return (
    <PageShell eyebrow="Seminars & Talks" title="Seminars">
      <div className="event-list">
        {events.map((event) => (
          <article className="event" key={event.date + event.title}>
            <time>{event.date}</time>
            <div className="event-body">
              <p className="event-kind">{event.kind}</p>
              <h2>{event.url ? <a className="event-title-link" href={event.url} target="_blank" rel="noreferrer">{event.title} <span aria-hidden="true">↗</span></a> : event.title}</h2>
              <p>{event.place}</p>
            </div>
            <span className="status">{event.note}</span>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
