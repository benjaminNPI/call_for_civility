import usePageTitle from '../../hooks/usePageTitle'
import PageHero from '../../components/PageHero/index'
import Reveal from '../../components/Reveal/index'
import Ornament from '../../components/Ornament/index'
import JotFormEmbed from '../../components/JotFormEmbed/index'

const Pledge = () => {
  usePageTitle('Pledge')

  return (
    <>
      <PageHero eyebrow="Take the pledge" title="Civility Pledge">
        Read it, live it, and add your name to a growing movement for kindness and respect across America.
      </PageHero>

      <section className="relative pb-8 sm:-mt-10">
        <Reveal className="container-page max-w-4xl">
          <div className="seal-frame text-center">
            <img
              src="/img/logo-320.webp"
              alt=""
              width="96"
              height="96"
              className="mx-auto -mt-20 h-24 w-24 drop-shadow-xl sm:-mt-28 sm:h-28 sm:w-28"
            />
            <p className="eyebrow mt-6 justify-center">On my honor</p>
            <Ornament className="mx-auto mt-6 max-w-[12rem]" />
            <blockquote className="mt-8 text-left font-display text-xl leading-[1.75] text-navy-900 sm:text-2xl sm:leading-[1.75]">
              <p>
                On my Honor: I{' '}
                <span className="inline-block w-40 border-b-2 border-brass-400 align-baseline" aria-hidden="true" />
                <span className="sr-only">(your name)</span>, pledge to stand for that which is right. I desire to talk and work with others in an effort to show
                kindness and respect to all I come in contact with. I Seek First to Understand, Then to Be Understood®
                <span className="text-base text-ink-soft"> — Habit 5, FranklinCovey.com</span>. I can try harder, will
                accept constructive criticism from others, and commit to do better. I must do my best to remain civil and
                encourage others to do the same. I will use my sphere of influence to de-escalate from contentious
                situations, and will do all I can to encourage civility in all my interactions both in public and in
                private. I realize that I can remain true to myself and still show kindness to others. I understand that
                my respect for others does not in any way mean I agree with all they say or do, but rather that I simply
                give respect to get respect. I can agree to disagree while being agreeable.
              </p>
            </blockquote>
          </div>
        </Reveal>
      </section>

      <section id="sign" className="container-page max-w-3xl py-20 sm:py-24" aria-labelledby="sign-heading">
        <Reveal className="text-center">
          <p className="eyebrow justify-center">Add your name</p>
          <h2 id="sign-heading" className="mt-4 text-4xl font-semibold tracking-tight">
            Sign the pledge now
          </h2>
        </Reveal>
        <Reveal delay={120} className="card mt-10 overflow-hidden p-2 sm:p-4">
          <JotFormEmbed formId="213167811339052" title="Sign the Call For Civility Pledge" />
        </Reveal>
      </section>
    </>
  )
}

export default Pledge
