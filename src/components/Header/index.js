import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './style.css'


const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const style = {
        margin: "0px 22px 0px 22px"
    }

    return (
        <div className="isolate bg-white mb-5">
            <div className="px-6 pt-6 lg:px-8">
                <nav className="flex items-center justify-between" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">A Call for Civility</span>
                            <img className="h-12" src="/img/logo.png" alt="Call for Civility Logo" />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12 text-black">
                        <div className='activeLink text-sm font-semibold leading-6 text-gray-900 text-xl'>
                            <NavLink
                                to=""
                                style={style}
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                Home
                            </NavLink>
                            <NavLink
                                to="about"
                                style={style}
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                About
                            </NavLink>
                            <NavLink
                                to="video"
                                style={style}
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                Video
                            </NavLink>
                            <NavLink
                                to="Contact"
                                style={style}
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                Contact
                            </NavLink>

                        </div>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    </div>
                </nav>
                <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                        <div className="flex items-center justify-between">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Call for Civility</span>
                                <img className="h-8" src="/img/logo.png" alt="Call for Civility Logo" />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6 text-4xl">
                                    {/* {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            id={item.name}
                                            className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                                        >
                                            {item.name}
                                        </a>
                                    ))} */}
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </div>

        </div>
    )
}

export default Header