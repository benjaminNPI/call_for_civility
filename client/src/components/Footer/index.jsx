import { Link } from 'react-router-dom'
import { HeartIcon, PhoneIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { mainNav, PHONE_DISPLAY, PHONE_HREF } from '../../nav'

const sponsors = [
    { name: 'Liberty United', href: 'https://liberty-united.com/', img: '/img/liberty-united.jpg' },
    { name: 'Freewater Coin Co.', href: 'https://freewatercoinco.com/', img: '/img/freewater.png' },
    { name: 'Constitutional Sheriffs & Peace Officers Association', href: 'https://cspoa.org/', img: '/img/cspoa.png' },
    { name: 'Small Business Tech Guys', href: 'https://sbtechguys.com/', img: '/img/sbtg.png' },
]

const Sponsors = () => (
    <section aria-labelledby="sponsors-heading" className="border-t border-navy-900/10 bg-paper-dark">
        <div className="container-page py-16">
            <div className="text-center">
                <p className="eyebrow justify-center">With gratitude</p>
                <h2 id="sponsors-heading" className="mt-3 text-3xl font-semibold">
                    Our Sponsors
                </h2>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                {sponsors.map((s) => (
                    <li key={s.name}>
                        <a
                            href={s.href}
                            target="_blank"
                            rel="noreferrer"
                            className="card group flex h-full flex-col items-center gap-4 p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <span className="flex h-24 w-full items-center justify-center">
                                <img
                                    src={s.img}
                                    alt=""
                                    loading="lazy"
                                    className="max-h-24 max-w-full rounded-md object-contain"
                                />
                            </span>
                            <span className="text-sm font-medium text-ink-soft transition-colors group-hover:text-navy-900">
                                {s.name}
                                <span className="sr-only"> (opens in a new tab)</span>
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </section>
)

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <>
            <Sponsors />
            <footer className="relative overflow-hidden bg-navy-950 text-white/70" aria-labelledby="footer-heading">
                <h2 id="footer-heading" className="sr-only">
                    Footer
                </h2>
                <div className="grain pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" />

                <div className="container-page relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3">
                            <img src="/img/logo-320.webp" alt="" width="56" height="56" className="h-14 w-14" loading="lazy" />
                            <span className="font-display text-2xl font-semibold text-white">Call for Civility</span>
                        </div>
                        <p className="mt-5 max-w-sm text-sm leading-relaxed">
                            Even though we may disagree on some issues, we can still have open dialog and respect for one
                            another’s beliefs.
                        </p>
                    </div>

                    <nav aria-label="Footer" className="lg:col-span-2">
                        <h3 className="font-sans text-xs font-semibold tracking-[0.2em] text-brass-300 uppercase">Explore</h3>
                        <ul className="mt-5 space-y-3 text-sm">
                            {[...mainNav, { name: 'Sign the Pledge', to: '/pledge' }].map((item) => (
                                <li key={item.to}>
                                    <Link to={item.to} className="transition-colors hover:text-white">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="lg:col-span-2">
                        <h3 className="font-sans text-xs font-semibold tracking-[0.2em] text-brass-300 uppercase">Reach Us</h3>
                        <ul className="mt-5 space-y-3 text-sm">
                            <li>
                                <a href={PHONE_HREF} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                                    <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                                    {PHONE_DISPLAY}
                                </a>
                            </li>
                            <li>
                                <Link to="/contact" className="transition-colors hover:text-white">
                                    Contact form
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://www.libertyroundtable.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1 transition-colors hover:text-white"
                                >
                                    Liberty RoundTable
                                    <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                                    <span className="sr-only">(opens in a new tab)</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 md:col-span-2 lg:col-span-4">
                        <h3 className="font-display text-xl font-semibold text-white">Support the movement</h3>
                        <p className="mt-3 text-sm leading-relaxed">
                            Your contribution helps carry the call for civility across the nation. PayPal does
                            <strong className="text-white"> not</strong> require an account to give with a credit card.
                        </p>
                        <form action="https://www.paypal.com/donate" method="post" target="_blank" className="mt-5">
                            <input type="hidden" name="hosted_button_id" value="VKDJ8Y4KDGG4U" />
                            <button type="submit" className="btn-brass w-full sm:w-auto">
                                <HeartIcon className="h-5 w-5" aria-hidden="true" />
                                Donate with PayPal
                                <span className="sr-only">(opens in a new tab)</span>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="relative border-t border-white/10">
                    <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
                        <p>&copy; 2016–{year} Call for Civility. All Rights Reserved.</p>
                        <Link to="/accessibility" className="underline-offset-4 transition-colors hover:text-white hover:underline">
                            Accessibility Statement
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
