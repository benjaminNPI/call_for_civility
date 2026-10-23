import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import usePageTitle from "../../hooks/usePageTitle";
import PageHero from "../../components/PageHero/index";
import Reveal from "../../components/Reveal/index";
import Ornament from "../../components/Ornament/index";
import { PHONE_DISPLAY, PHONE_HREF } from "../../nav";

const Letter = () => {
    usePageTitle("Letter");
    return (
        <>
            <PageHero eyebrow="An open letter" title="A Clarion Call for Civility">
                To talk show hosts, news makers, and all media personnel.
            </PageHero>

            <div className="container-page py-16 sm:py-24">
                <Reveal as="article" className="mx-auto max-w-3xl">
                    <header className="flex flex-col gap-6 border-b border-navy-900/10 pb-10 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-4">
                            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 font-display text-xl font-semibold text-brass-300" aria-hidden="true">
                                SB
                            </span>
                            <div>
                                <p className="font-semibold text-navy-900">Sam Bushman</p>
                                <p className="text-sm text-ink-soft">
                                    Host of{" "}
                                    <a href="https://www.libertyroundtable.com" target="_blank" rel="noreferrer" className="underline decoration-brass-400 underline-offset-4 hover:text-navy-900">
                                        Liberty RoundTable<span className="sr-only"> (opens in a new tab)</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <time dateTime="2016-06-05" className="text-sm font-medium tracking-wide text-brass-600 uppercase">
                            June 05, 2016
                        </time>
                    </header>

                    <div className="prose-civic mt-12">
                        <h2 className="mt-0!">An Open Letter to Talk Show Hosts, News Makers, and All Media Personnel</h2>
                        <p className="dropcap">I have become more and more alarmed as we watch increasing, divisive, never ending battles and downright hostile attacks that seem to permeate every segment of our society. Men against women, black against white, rich against poor, liberal against conservative, gay against straight and even believer against the unbeliever. It’s truly crazy! Even those who claim to be on the same side find something to feud about. Sadly, America has become a house divided; surely she cannot stand if we allow the current negative trend to go unchecked. There must be a better way.</p>
                        <p>When we think about it, we agree on much more than we disagree. If that’s true, then why is it that we spend so much time and energy on our disagreements? Thus it is vital to downplay or minimize our disagreements, while spending the bulk of our time focusing on that which is productive and on which we can agree. In short, building common ground, coming together and advocating for productive solutions should be the order of the day.</p>
                        <p>Further, we should agree that there is a difference between free speech and attacks that cross the line, limited by laws surrounding defamation, libel, and slander. Protection of first amendment rights and respect for one another is a prerequisite to restoring trust in America today.</p>
                        <p className="border-l-4 border-brass-400 pl-6 font-display text-2xl leading-snug text-navy-900">Might I suggest what we lack most in our so called “enlightened day” is open, kind and moral leadership.</p>
                        <p>What we need is good, honest and wise statesman. We need Americans who are governed by moral principle in thought and deed in private as well as their public lives. We need leaders who will lead by example and show us a better way.</p>
                        <p>We should always be willing to follow the Prince of Peace and stand for that which is right. We should be willing to talk and work with everyone in an effort to unify all people to make America great again. I for one will try harder, will accept constructive criticism from others, and will commit to do better.</p>

                        <h2>Our Open Invitation</h2>
                        <p>In the spirit of eternal optimism, we exhort all Americans to demonstrate true leadership by returning to the high moral standard of civility in all we do and say. Indeed we need to treat others as we ourselves would like to be treated.</p>
                        <p>We look forward to working together to show the American people a better way as we “make America great again”. Even though we may disagree on some issues, we can still have open dialog and respect for one another’s beliefs. As Hall wrote in <cite>The Friends of Voltaire</cite>, "I disapprove of what you say, but I will defend to the death your right to say it". After all, isn't this the pure genius of America?</p>
                    </div>

                    <footer className="mt-14">
                        <Ornament className="max-w-[10rem]" />
                        <p className="mt-8 text-ink-soft">Sincerely,</p>
                        <p className="mt-2 font-display text-3xl text-navy-900 italic">Sam Bushman</p>
                        <p className="mt-3 text-sm text-ink-soft">
                            <a href={PHONE_HREF} className="hover:text-navy-900">{PHONE_DISPLAY}</a>
                            <span className="mx-2 text-brass-500" aria-hidden="true">·</span>
                            <Link to="/contact" className="underline decoration-brass-400 underline-offset-4 hover:text-navy-900">Contact</Link>
                        </p>
                    </footer>
                </Reveal>

                <Reveal className="card mx-auto mt-20 flex max-w-3xl flex-col items-center gap-6 p-10 text-center sm:flex-row sm:text-left">
                    <img src="/img/logo-320.webp" alt="" width="80" height="80" loading="lazy" className="h-20 w-20 shrink-0" />
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold">Answer the call</h2>
                        <p className="mt-2 text-ink-soft">Commit to civility in all your interactions, in public and in private.</p>
                    </div>
                    <Link to="/pledge" className="btn-navy shrink-0">
                        Sign the Pledge
                        <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </Reveal>
            </div>
        </>
    );
};

export default Letter;
