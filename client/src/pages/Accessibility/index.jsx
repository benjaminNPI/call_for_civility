import { Link } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import PageHero from '../../components/PageHero/index'
import Reveal from '../../components/Reveal/index'
import { PHONE_DISPLAY, PHONE_HREF } from '../../nav'

const LAST_UPDATED = { iso: '2026-10-23', display: 'October 23, 2026' }

const measures = [
  'Semantic page structure with headings, landmarks, and a “Skip to main content” link.',
  'Full keyboard navigation with a clearly visible focus indicator.',
  'Focus moves to the start of the page content after navigating between pages.',
  'Text alternatives for meaningful images; decorative images are hidden from assistive technology.',
  'Color combinations chosen to meet WCAG AA contrast ratios for text.',
  'Links that open in a new tab are announced to screen reader users.',
  'Animations are reduced or disabled when your device requests reduced motion.',
  'Responsive layouts that support zooming and enlarging text up to 200% without loss of content.',
]

const limitations = [
  {
    title: 'Embedded forms',
    body: 'Our pledge and contact forms are provided by JotForm and displayed within this site. Their accessibility is largely controlled by that provider.',
  },
  {
    title: 'Videos',
    body: 'Videos are hosted on YouTube. Captions may be automatically generated and may not be fully accurate. Transcripts are not yet available for every video.',
  },
  {
    title: 'Donations',
    body: 'Donations are processed on PayPal’s website, which is outside of our control.',
  },
]

const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
)

const Accessibility = () => {
  usePageTitle('Accessibility Statement')

  return (
    <>
      <PageHero eyebrow="Our commitment" title="Accessibility Statement">
        The call for civility is for everyone. We want every visitor to be able to read, watch, and take part.
      </PageHero>

      <div className="container-page py-16 sm:py-24">
        <Reveal as="article" className="prose-civic mx-auto max-w-3xl">
          <p className="text-xl leading-relaxed text-ink">
            Call for Civility is committed to ensuring digital accessibility for people with disabilities. We are
            continually improving the experience for all visitors and applying the relevant accessibility standards.
          </p>

          <Section title="Conformance status">
            <p>
              We aim to conform to the{' '}
              <a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noreferrer">
                Web Content Accessibility Guidelines (WCAG) 2.1<span className="sr-only"> (opens in a new tab)</span>
              </a>{' '}
              at Level AA. These guidelines explain how to make web content more accessible for people with a wide range
              of disabilities. Because some content on this site comes from third parties, we consider the site{' '}
              <strong>partially conformant</strong>: some parts may not yet fully meet the standard.
            </p>
          </Section>

          <Section title="Measures we have taken">
            <ul className="mt-6 space-y-3">
              {measures.map((m) => (
                <li key={m} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-500" aria-hidden="true" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Known limitations">
            <p>Despite our best efforts, some content may not be fully accessible:</p>
            <dl className="mt-6 space-y-5">
              {limitations.map((l) => (
                <div key={l.title} className="rounded-xl border border-navy-900/10 bg-white p-5">
                  <dt className="font-semibold text-navy-900">{l.title}</dt>
                  <dd className="mt-1 text-base">{l.body}</dd>
                </div>
              ))}
            </dl>
            <p>
              If you cannot use any part of this site, please reach out and we will gladly help you take the pledge,
              get information, or make a contribution another way.
            </p>
          </Section>

          <Section title="Compatibility">
            <p>
              This site is designed to work with current versions of major web browsers (Chrome, Edge, Firefox, and
              Safari) and with common assistive technologies such as screen readers and screen magnifiers. It is not
              designed for outdated browsers.
            </p>
          </Section>

          <Section title="Feedback and assistance">
            <p>
              We welcome your feedback on the accessibility of Call for Civility. If you encounter a barrier, or need
              any content in an alternative format, please let us know:
            </p>
            <ul className="mt-6 space-y-3">
              <li>
                <strong>Phone:</strong> <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              </li>
              <li>
                <strong>Online:</strong> <Link to="/contact">our contact form</Link>
              </li>
            </ul>
            <p>
              When you contact us, please describe the page and the problem you experienced. We will make every
              reasonable effort to respond promptly and to address the issue.
            </p>
          </Section>

          <p className="mt-12! border-t border-navy-900/10 pt-6 text-sm">
            This statement was last updated on <time dateTime={LAST_UPDATED.iso}>{LAST_UPDATED.display}</time>.
          </p>
        </Reveal>
      </div>
    </>
  )
}

export default Accessibility
