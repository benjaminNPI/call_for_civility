import React from 'react'

const Home = ({ currentPage, handlePageChange }) => {
    return (
        <main>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            A Call for Civility
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                            fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                onClick={() => handlePageChange('Pledge')}
                                href="#pledge"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign the Pledge
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home