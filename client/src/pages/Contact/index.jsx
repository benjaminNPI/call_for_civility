import { Link } from 'react-router-dom'
import { PhoneIcon, RadioIcon, PencilSquareIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline'
import usePageTitle from '../../hooks/usePageTitle'
import PageHero from '../../components/PageHero/index'
import Reveal from '../../components/Reveal/index'
import JotFormEmbed from '../../components/JotFormEmbed/index'
import { PHONE_DISPLAY, PHONE_HREF } from '../../nav'

const Contact = () => {
  usePageTitle('Contact')

  return (
    <>
      <PageHero eyebrow="Get in touch" title="Contact Us">
        Questions, speaking requests, or ways to volunteer: we would love to hear from you.
      </PageHero>

      <section className="container-page grid gap-10 py-20 sm:py-24 lg:grid-cols-12">
        <div className="space-y-5 lg:col-span-4">
          <Reveal as="a" href={PHONE_HREF} className="card group flex items-start gap-4 p-6 transition hover:-translate-y-0.5 hover:shadow-xl">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-royal-600 text-white">
              <PhoneIcon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm text-ink-soft">Call us</span>
              <span className="mt-1 block font-display text-2xl font-semibold text-navy-900">{PHONE_DISPLAY}</span>
            </span>
          </Reveal>

          <Reveal
            as="a"
            delay={80}
            href="https://www.libertyroundtable.com"
            target="_blank"
            rel="noreferrer"
            className="card group flex items-start gap-4 p-6 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-brass-300">
              <RadioIcon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm text-ink-soft">Listen live</span>
              <span className="mt-1 flex items-center gap-1 font-semibold text-navy-900">
                Liberty RoundTable
                <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="sr-only">(opens in a new tab)</span>
            </span>
          </Reveal>

          <Reveal delay={160} className="rounded-2xl bg-navy-900 p-7 text-white">
            <PencilSquareIcon className="h-7 w-7 text-brass-300" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-semibold text-white">Haven’t signed yet?</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Join the movement for civility and honor in our nation.
            </p>
            <Link to="/pledge" className="btn-brass mt-6">
              Sign the Pledge
            </Link>
          </Reveal>
        </div>

        <Reveal delay={120} className="card overflow-hidden p-2 sm:p-4 lg:col-span-8">
          <JotFormEmbed formId="213167564341151" title="Call for Civility Contact Us" />
        </Reveal>
      </section>
    </>
  )
}

export default Contact
