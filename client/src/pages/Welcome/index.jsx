import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import usePageTitle from "../../hooks/usePageTitle";
import PageHero from "../../components/PageHero/index";
import Reveal from "../../components/Reveal/index";
import Ornament from "../../components/Ornament/index";

const Welcome = () => {
    usePageTitle("Welcome");

    return (
        <>
            <PageHero eyebrow="A word from our founder" title="Welcome" image="/img/flag.webp">
                America is divided over every fault line possible. Together, we can choose a better way.
            </PageHero>

            <section className="container-page grid gap-12 py-20 sm:py-28 lg:grid-cols-12">
                <Reveal as="article" className="prose-civic lg:col-span-7 lg:col-start-2">
                    <p className="dropcap">
                        My name is Sam Bushman. I am a nationally syndicated Radio Talk Show host and also an IT Professional. As you are well aware America is divided over every fault line possible. It's my belief that this is not by coincidence or accident. This is intentionally fostered by those who do not Love God, Family, or Country.
                    </p>
                    <p>
                        In 2015 I wrote an article <Link to="/letter-clarion-call-for-civility">A Clarion Call for Civility</Link> to all media, celebrities, and public officials; begging us all to please remember the moral high ground of civility. Since that article was written, we have gone from the lack of civility to outright attacks on anyone who sees things differently than we do.
                    </p>
                    <p className="border-l-4 border-brass-400 pl-6 font-display text-2xl leading-snug text-navy-900">
                        This must stop! I am convinced our peaceful future as a free people absolutely depends on it.
                    </p>
                    <p>
                        This website has been created as part of our efforts to provide solutions to protect all we hold dear.
                    </p>
                    <p>
                        We will be launching a national speaking tour, and authoring solutions to remedy this serious threat to our beloved country and society at large. We have added to this website a <Link to="/pledge">Call for Civility Pledge</Link> that we are hoping millions will sign and agree to live by. We will be reaching out to leaders across America, and the world, to advocate for civility in all we do.
                    </p>
                    <p>
                        We need funding and volunteers at every level to make our hopes and efforts a reality. Will you sign the <Link to="/pledge">Pledge</Link> and help us in our sacred cause?
                    </p>
                    <p className="font-display text-xl text-navy-900 italic">— Sam Bushman</p>
                </Reveal>

                <aside className="lg:col-span-3 lg:col-start-10">
                    <Reveal delay={150} className="card sticky top-28 p-7">
                        <p className="eyebrow">Get involved</p>
                        <ul className="mt-5 space-y-4 text-sm text-ink-soft">
                            <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-500" />Sign the pledge and live by it.</li>
                            <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-500" />Volunteer at any level.</li>
                            <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-500" />Help fund the national speaking tour.</li>
                        </ul>
                        <Link to="/pledge" className="btn-navy mt-7 w-full">
                            Sign the Pledge
                            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                        </Link>
                    </Reveal>
                </aside>
            </section>

            <section className="bg-paper-dark py-20 sm:py-28" aria-labelledby="mission-heading">
                <Reveal className="container-page max-w-4xl">
                    <div className="seal-frame">
                        <div className="text-center">
                            <img src="/img/logo-320.webp" alt="" width="72" height="72" loading="lazy" className="mx-auto h-18 w-18" />
                            <h2 id="mission-heading" className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                                Mission Statement
                            </h2>
                            <Ornament className="mx-auto mt-6 max-w-[12rem]" />
                        </div>
                        <div className="prose-civic mt-10">
                            <p>
                                Even though we may disagree on some issues, we can still have open dialog and respect for one another’s beliefs. As Hall wrote in <cite>The Friends of Voltaire</cite>, "I disapprove of what you say, but I will defend to the death your right to say it".
                            </p>
                            <p>
                                What We lack most in our so called “enlightened day” is open, kind, and moral leadership. What we need is good, honest, and wise statesman. We need Americans who are governed by moral principle in thought and deed; in private as well as their public lives. We need leaders who will lead by example, and show us a better way.
                            </p>
                            <p>
                                In the spirit of eternal optimism, we exhort all Americans to demonstrate true leadership by returning to the high moral standard of Civility in all we do and say. Indeed we need to treat others as we ourselves would like to be treated. After all, Isn't this the pure genius of America?
                            </p>
                        </div>
                    </div>
                </Reveal>
            </section>
        </>
    );
};

export default Welcome;
