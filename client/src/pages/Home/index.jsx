import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  ChatBubbleLeftRightIcon,
  HandRaisedIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import usePageTitle from "../../hooks/usePageTitle";
import Reveal from "../../components/Reveal/index";
import Ornament from "../../components/Ornament/index";

const commitments = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Seek first to understand",
    body: "I desire to talk and work with others in an effort to show kindness and respect to all I come in contact with.",
  },
  {
    icon: ScaleIcon,
    title: "Give respect to get respect",
    body: "My respect for others does not in any way mean I agree with all they say or do. I can agree to disagree while being agreeable.",
  },
  {
    icon: HandRaisedIcon,
    title: "De-escalate, don’t divide",
    body: "I will use my sphere of influence to de-escalate from contentious situations, and encourage civility in public and in private.",
  },
];

const Hero = () => (
  <section className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-navy-950">
    <img
      src="/img/hero-capitol.webp"
      srcSet="/img/hero-capitol-sm.webp 1200w, /img/hero-capitol.webp 2400w"
      sizes="100vw"
      alt=""
      fetchPriority="high"
      className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center] motion-safe:animate-[kenburns_24s_ease-out_both]"
    />
    <div className="absolute inset-0 -z-10 bg-linear-to-r from-navy-950/95 via-navy-900/75 to-navy-900/10" />
    <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-navy-950/70 to-transparent" />

    <div className="container-page py-24">
      <div className="max-w-2xl">
        <p className="eyebrow animate-rise text-brass-300">A national movement</p>
        <h1 className="mt-6 animate-rise text-5xl leading-[1.02] font-semibold tracking-tight text-white [animation-delay:120ms] sm:text-7xl">
          A Clarion Call for <em className="font-normal text-brass-300">Civility</em>
        </h1>
        <p className="mt-8 max-w-xl animate-rise text-lg leading-relaxed text-white/85 [animation-delay:240ms] sm:text-xl">
          In a country troubled with wars, hatred, and evil, we call on <strong className="text-white">you</strong> to
          join the movement for civility and honor in our nation.
        </p>
        <div className="mt-10 flex animate-rise flex-wrap items-center gap-4 [animation-delay:360ms]">
          <Link to="/pledge" className="btn-brass px-7 py-3.5 text-base">
            Sign the Pledge
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link to="/letter-clarion-call-for-civility" className="btn-ghost-light px-7 py-3.5 text-base">
            Read the Call
          </Link>
        </div>

        <a
          href="https://yournews.com/2025/09/12/3868302/campaignforcivility-com-launches-nationwide-movement/"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-14 inline-flex animate-rise items-center gap-3 rounded-full bg-white/10 py-1.5 pr-4 pl-1.5 text-sm text-white/90 ring-1 ring-white/15 backdrop-blur-md transition hover:bg-white/15 [animation-delay:480ms]"
        >
          <span className="rounded-full bg-brass-400 px-3 py-1 text-xs font-semibold text-navy-950">Featured</span>
          <span>Read the featured article on the movement</span>
          <ArrowUpRightIcon
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </div>
  </section>
);

const Commitments = () => (
  <section className="container-page py-24 sm:py-32" aria-labelledby="commitments-heading">
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="eyebrow justify-center">The Civility Pledge</p>
      <h2 id="commitments-heading" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        Three commitments that can heal a house divided
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-ink-soft">
        When we think about it, we agree on much more than we disagree. The pledge asks each of us to live like it.
      </p>
    </Reveal>

    <div className="mt-16 grid gap-6 md:grid-cols-3">
      {commitments.map((c, i) => (
        <Reveal key={c.title} delay={i * 120} className="card group relative overflow-hidden p-8">
          <span className="absolute top-6 right-7 font-display text-6xl font-semibold text-navy-900/5 transition-colors group-hover:text-brass-400/30">
            0{i + 1}
          </span>
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-royal-600 text-white shadow-lg shadow-royal-600/30">
            <c.icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <h3 className="mt-6 text-2xl font-semibold">{c.title}</h3>
          <p className="mt-3 leading-relaxed text-ink-soft">{c.body}</p>
        </Reveal>
      ))}
    </div>

    <Reveal className="mt-12 text-center">
      <Link to="/pledge" className="btn-navy">
        Read the full pledge
        <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
      </Link>
    </Reveal>
  </section>
);

const Quote = () => (
  <section className="relative isolate overflow-hidden bg-navy-900 py-24 sm:py-32">
    <div className="grain pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay" />
    <img
      src="/img/logo-320.webp"
      alt=""
      loading="lazy"
      className="pointer-events-none absolute top-1/2 -left-24 -z-10 w-[28rem] -translate-y-1/2 opacity-[0.06] grayscale"
    />
    <Reveal as="figure" className="container-page max-w-4xl text-center">
      <svg viewBox="0 0 48 36" className="mx-auto h-10 w-12 fill-brass-400" aria-hidden="true">
        <path d="M0 36V22.2C0 9.6 6.4 2.2 19.2 0l2 4.6C14 6.6 10.6 10.8 10.4 17H20v19H0zm28 0V22.2C28 9.6 34.4 2.2 47.2 0l2 4.6C42 6.6 38.6 10.8 38.4 17H48v19H28z" />
      </svg>
      <blockquote className="mt-8 font-display text-3xl leading-snug font-light text-white sm:text-5xl sm:leading-tight">
        I disapprove of what you say, but I will defend to the death your right to say it.
      </blockquote>
      <figcaption className="mt-8 text-sm tracking-wide text-white/60">
        <span className="font-semibold text-brass-300">Evelyn Beatrice Hall</span> ·{" "}
        <cite className="not-italic">The Friends of Voltaire</cite>
      </figcaption>
    </Reveal>
  </section>
);

const Founder = () => (
  <section className="container-page grid items-center gap-12 py-24 sm:py-32 lg:grid-cols-2 lg:gap-20">
    <Reveal className="relative">
      <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/20">
        <img src="/img/flag.webp" alt="An American flag waving against a clear blue sky" loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="card absolute -right-4 -bottom-8 max-w-[16rem] p-5 sm:-right-8">
        <p className="font-display text-4xl font-semibold text-royal-600">2016</p>
        <p className="mt-1 text-sm text-ink-soft">The year the open letter first called for civility in media and public life.</p>
      </div>
    </Reveal>

    <Reveal delay={120}>
      <p className="eyebrow">From the founder</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">“This must stop.”</h2>
      <div className="prose-civic mt-6">
        <p>
          As you are well aware America is divided over every fault line possible. It’s my belief that this is not by
          coincidence or accident.
        </p>
        <p>
          I am convinced our peaceful future as a free people absolutely depends on it. This website has been created as
          part of our efforts to provide solutions to protect all we hold dear.
        </p>
      </div>
      <p className="mt-8 font-display text-lg text-navy-900 italic">— Sam Bushman, Founder</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link to="/welcome" className="btn-navy">
          Read the welcome
        </Link>
        <Link to="/about-us" className="btn-ghost">
          Meet the founders
        </Link>
      </div>
    </Reveal>
  </section>
);

const Watch = () => (
  <section className="bg-paper-dark py-24 sm:py-32">
    <div className="container-page grid items-center gap-12 lg:grid-cols-5">
      <Reveal className="lg:col-span-2">
        <p className="eyebrow">Watch</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight">Hear from civility advocates</h2>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          Interviews and events featuring Sam Bushman, Richard Mack, and other voices calling America back to the moral
          high ground.
        </p>
        <Link to="/video" className="btn-ghost mt-8">
          All videos
          <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
        </Link>
      </Reveal>
      <Reveal delay={120} className="lg:col-span-3">
        <div className="aspect-video overflow-hidden rounded-2xl bg-navy-900 shadow-2xl shadow-navy-900/25 ring-1 ring-navy-900/10">
          <iframe
            className="h-full w-full"
            src="https://www.youtube-nocookie.com/embed/XFGXVwYIuF8"
            title="Call for Civility featured video"
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </Reveal>
    </div>
  </section>
);

const FinalCta = () => (
  <section className="container-page py-24 sm:py-32">
    <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-royal-600 px-6 py-16 text-center shadow-2xl shadow-royal-600/30 sm:px-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--color-royal-500),transparent_60%),radial-gradient(ellipse_at_bottom_left,var(--color-navy-800),transparent_60%)]" />
      <div className="pointer-events-none absolute -top-24 -right-24 -z-10 h-72 w-72 rounded-full border-[18px] border-brass-400/25" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-80 w-80 rounded-full border border-white/10" />
      <Ornament className="mx-auto max-w-xs text-brass-300" />
      <h2 className="mx-auto mt-8 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Will you add your name?
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
        We are hoping millions will sign and agree to live by the Call for Civility Pledge. It starts with one.
      </p>
      <Link to="/pledge" className="btn-brass mt-10 px-8 py-4 text-base">
        Sign the Pledge
        <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
      </Link>
    </Reveal>
  </section>
);

const Home = () => {
  usePageTitle("Home");
  return (
    <>
      <Hero />
      <Commitments />
      <Quote />
      <Founder />
      <Watch />
      <FinalCta />
    </>
  );
};

export default Home;
