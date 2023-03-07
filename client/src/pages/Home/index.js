import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    document.title = "Home | Call for Civility"
    return (
        <>
            <div className={`justify-center bg-no-repeat bg-cover bg-center rounded-lg capital`}>
                <main className="">
                    <div className="relative px-2 lg:px-2">
                        <div className="mx-auto max-w-xl py-24 sm:py-32 lg:py-40">

                            <div className="text-center">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    A Clarion Call for Civility
                                </h1>
                                <p className="mt-6 text-5xl leading-8 text-black-900">
                                <strong>In a country troubled with wars, hatred, and evil, we call on <strong>YOU</strong> to join the movement for civility and honor in our nation.</strong>
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <Link
                                        to="/pledge"
                                        className="rounded-md bg-blue-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Sign the Pledge
                                    </Link>
                                    <Link to="/letter-clarion-call-for-civility" className="font-semibold leading-6 text-gray-900 hover:text-gray-600">
                                        Read the Call <span aria-hidden="true">→</span>
                                    </Link>
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