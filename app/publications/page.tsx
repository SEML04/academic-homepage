import type { Metadata } from 'next';
import { PageShell } from '../page-shell';

export const metadata: Metadata = {
  title: 'Publications',
  description: 'Preprints and publications by Yunshu Dai.',
};

export default function PublicationsPage() {
  return (
    <PageShell eyebrow="Research output" title="Publications">
      <div className="paper-list">
        <article className="paper">
          <div className="paper-index"><span>01</span><span>Preprint</span></div>
          <div className="paper-main">
            <h2>Local distribution on X<sub>0</sub><sup>3</sup> = X<sub>1</sub>X<sub>2</sub>X<sub>3</sub></h2>
            <p className="authors">Yunshu Dai, with <a className="inline-link" href="https://sites.google.com/site/hcsoft9099/home?authuser=0" target="_blank" rel="noreferrer">Zhizhong Huang</a>, Zhixuan Li and Haojia Shi</p>
            <p className="venue">Preprint · arXiv and journal links forthcoming</p>
            <div className="tags"><span>Preprint</span><span>Arithmetic geometry</span></div>
          </div>
        </article>
      </div>
    </PageShell>
  );
}
