import { Fragment, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { mainNav } from '../../nav'

const Brand = () => (
    <Link to="/" className="group flex items-center gap-3">
        <img
            src="/img/logo-320.webp"
            alt=""
            width="48"
            height="48"
            className="h-11 w-11 transition-transform duration-500 group-hover:rotate-[8deg] sm:h-12 sm:w-12"
        />
        <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-tight text-navy-900 sm:text-xl">
                Call for Civility
            </span>
            <span className="mt-1 hidden text-[0.65rem] font-semibold tracking-[0.2em] text-brass-600 uppercase sm:block">
                A Clarion Call · Est. 2016
            </span>
        </span>
    </Link>
)

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const closeMenu = () => setMobileMenuOpen(false)

    return (
        <header
            className={`sticky top-0 z-40 transition-all duration-300 ${
                scrolled
                    ? 'bg-paper/85 shadow-[0_1px_0_rgb(11_26_51/0.08)] backdrop-blur-lg'
                    : 'bg-paper'
            }`}
        >
            <nav className="container-page flex h-18 items-center justify-between sm:h-20" aria-label="Main">
                <Brand />

                <ul className="hidden items-center gap-1 lg:flex">
                    {mainNav.map((item) => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                end
                                className={({ isActive }) =>
                                    `relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'text-navy-900 after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-brass-500'
                                            : 'text-ink-soft hover:text-navy-900'
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-2">
                    <Link to="/pledge" className="btn-navy hidden px-5 py-2.5 sm:inline-flex">
                        Sign the Pledge
                    </Link>
                    <button
                        type="button"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy-900 hover:bg-navy-900/5 lg:hidden"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </nav>

            <Transition.Root show={mobileMenuOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50 lg:hidden" onClose={setMobileMenuOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-navy-950/50 backdrop-blur-sm" aria-hidden="true" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-out duration-300"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in duration-200"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <Dialog.Panel className="fixed inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-navy-900 px-6 py-6 text-white">
                            <div className="flex items-center justify-between">
                                <Dialog.Title className="font-display text-lg text-brass-300">Menu</Dialog.Title>
                                <button
                                    type="button"
                                    className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-white/10"
                                    onClick={closeMenu}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>

                            <ul className="mt-8 flex flex-col divide-y divide-white/10">
                                {mainNav.map((item) => (
                                    <li key={item.to}>
                                        <NavLink
                                            to={item.to}
                                            end
                                            onClick={closeMenu}
                                            className={({ isActive }) =>
                                                `flex items-center justify-between py-4 font-display text-2xl transition-colors ${
                                                    isActive ? 'text-brass-300' : 'text-white hover:text-brass-200'
                                                }`
                                            }
                                        >
                                            {item.name}
                                            <ArrowRightIcon className="h-5 w-5 opacity-40" aria-hidden="true" />
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>

                            <Link to="/pledge" onClick={closeMenu} className="btn-brass mt-auto w-full py-4 text-base">
                                Sign the Pledge
                            </Link>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>
        </header>
    )
}

export default Header
