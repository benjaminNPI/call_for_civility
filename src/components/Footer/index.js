import React from 'react'


const navigation = {
    sponsors: [
        { name: 'Loving Liberty Radio Network', href: 'https://lovingliberty.net/' },
        { name: 'Rust Coin and Gift', href: 'https://rustgoldandsilver.com/' },
        { name: 'Costitutional Sheriffs & Peace Officers Association', href: 'https://cspoa.org/' },
        { name: 'Small Business Tech Guys', href: 'https://sbtechguys.com/' },
    ],
}

const Footer = () => {
    const value = "_blank"
    return (
        <footer className="bg-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-4 sm:pt-6 lg:px-8 lg:pt-8 border-t">
                <h3 className="text-lg font-semibold leading-6 text-gray-900 text-center  mt-2">Sponsors</h3>
                <div className='w-full text-center'>
                    <div className="mt-6 flex">
                        {navigation.sponsors.map((item) => (
                            <div key={item.name} className="w-full">
                                <a href={item.href} target={value.toString()} rel='noreferrer' className="text-sm leading-6 text-gray-600 hover:text-gray-900 ">
                                    {item.name}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-gray-900/10 pt-8">
                    <p className="text-xs leading-5 text-gray-500 text-center">&copy; 2023. Sam Bushman, Inc. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer