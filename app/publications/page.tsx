import type { Metadata } from 'next';
import { PageShell } from '../page-shell';

export const metadata: Metadata = { title: 'Publications', description: 'Selected publications and preprints by Lin Wei.' };

const papers = [
  { year: '2026', number: '01', title: 'Wall-crossing for derived moduli on holomorphic symplectic varieties', authors: 'with M. Alvarez', venue: 'Preprint · arXiv:2604.01234', tags: ['Preprint', 'Moduli'] },
  { year: '2025', number: '02', title: 'Birational models of compactified Jacobians', authors: 'with S. Mukai and E. Rossi', venue: 'Journal of Algebraic Geometry, 34 (2025), 201–248', tags: ['Published', 'Birational geometry'] },
  { year: '2023', number: '03', title: 'Semiorthogonal decompositions and categorical chambers', authors: 'Lin Wei', venue: 'Advances in Mathematics, 428 (2023), 109157', tags: ['Published', 'Derived categories'] },
  { year: '2021', number: '04', title: 'Stable pairs on local Calabi–Yau threefolds', authors: 'with A. Banerjee', venue: 'Mathematische Annalen, 381 (2021), 1221–1260', tags: ['Published', 'Enumerative geometry'] },
];

export default function PublicationsPage() {
  return (
    <PageShell eyebrow="Research output" title="Publications" intro="Selected papers and current preprints. Titles and bibliographic details below are placeholders ready to be replaced with your work.">
      <div className="paper-list">
        {papers.map((paper) => <article className="paper" key={paper.number}>
          <div className="paper-index"><span>{paper.number}</span><span>{paper.year}</span></div>
          <div className="paper-main"><h2>{paper.title}</h2><p className="authors">{paper.authors}</p><p className="venue">{paper.venue}</p><div className="tags">{paper.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
          <span className="paper-arrow" aria-hidden="true">↗</span>
        </article>)}
      </div>
    </PageShell>
  );
}
