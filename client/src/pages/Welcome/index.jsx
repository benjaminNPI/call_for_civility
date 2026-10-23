import React from 'react'
import { Link } from "react-router-dom";


const Welcome = () => {
    document.title = "Welcome | Call for Civility"

    return (
        <main className={`justify-center bg-no-repeat bg-cover bg-center rounded-lg flag h-full`}>
            <div className="relative px-6 lg:px-8 ">
                <div className="mx-auto max-w-2xl pt-20 sm:pt-24 lg:pt-24 ">
                    <div className="text-center pb-5 ">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ">
                            Welcome
                        </h1>
                        <div className='mb-5 pb-5'>
                            <p className="mt-6 text-lg leading-8 text-gray-900 font-semibold">
                                My name is Sam Bushman. I am a nationally syndicated Radio Talk Show host and also an IT Professional. As you are well aware America is divided over every fault line possible. It's my belief that this is not by coincidence or accident. This is intentionally fostered by those who do not Love God, Family, or Country.
                            </p>

                            <p className="mt-6 text-lg leading-8 text-gray-900 font-semibold">
                                In 2015 I wrote an article <Link to="/letter-clarion-call-for-civility" className="underline italic hover:text-blue-900 font-semibold">A Clarion Call for Civility</Link> to all media, celebrities, and public officials; begging us all to please remember the moral high ground of civility. Since that article was written, we have gone from the lack of civility to outright attacks on anyone who sees things differently than we do.
                            </p>

                            <p className="mt-6 text-lg leading-8 text-gray-900 font-semibold">
                                This must stop! I am convinced our peaceful future as a free people absolutely depends on it. This website has been created as part of our efforts to provide solutions to protect all we hold dear.
                            </p>

                            <p className="mt-6 text-lg leading-8 text-gray-900 font-semibold">
                                We will be launching a national speaking tour, and authoring solutions to remedy this serious threat to our beloved country and society at large. We have added to this website a <Link to="/pledge" className="underline italic hover:text-blue-900 font-semibold">Call for Civility Pledge</Link> that we are hoping millions will sign and agree to live by. We will be reaching out to leaders across America, and the world, to advocate for civility in all we do.
                            </p>

                            <p className="mt-6 text-lg leading-8 text-gray-900 font-semibold">
                                We need funding and volunteers at every level to make our hopes and efforts a reality. Will you sign the <Link className="underline italic hover:text-blue-900 font-semibold" to="/pledge">Pledge</Link> and help us in our sacred cause?
                            </p>
                        </div>

                        <div className='mt-5 pt-5'>
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Mission Statement
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-900 font-semibold">
                                Even though we may disagree on some issues, we can still have open dialog and respect for one another’s beliefs. As Hall wrote in The Friends of Voltaire, "I disapprove of what you say, but I will defend to the death your right to say it".
                            </p>

                            <p className="mt-6 text-lg leading-8 text-gray-900 font-semibold">
                                What We lack most in our so called “enlightened day” is open, kind, and moral leadership. What we need is good, honest, and wise statesman. We need Americans who are governed by moral principle in thought and deed; in private as well as their public lives. We need leaders who will lead by example, and show us a better way.
                            </p>

                            <p className="mt-6 text-lg leading-8 text-gray-900 font-semibold">
                                In the spirit of eternal optimism, we exhort all Americans to demonstrate true leadership by returning to the high moral standard of Civility in all we do and say. Indeed we need to treat others as we ourselves would like to be treated. After all, Isn't this the pure genius of America?
                            </p>
                        </div>
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Welcome