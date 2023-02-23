import React from 'react';


const Home = ({ handlePageChange }) => {

    return (
        <>
            <div className={`justify-center  bg-no-repeat bg-cover bg-center rounded-lg opacity-50 hover:opacity-100`}
                style={{ backgroundImage: { 'cover-pic': "url('/public/img/cover_pic_home.webp')" } }} >
            

                <main>
                    <div className="relative px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

                            <div className="text-center">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    A Call for Civility
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    In a country troubled with wars, hatred, and evil, we call on <strong>YOU</strong> to join the movement for civility and honor in our nation.
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <a
                                        href="#pledge"
                                        onClick={() => handlePageChange("Pledge")}
                                        className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Sign the Pledge
                                    </a>
                                    <a href="#about" onClick={() => handlePageChange("About")} className="text-sm font-semibold leading-6 text-gray-900">
                                        Learn more <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}


export default Home