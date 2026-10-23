import usePageTitle from '../../hooks/usePageTitle'
import PageHero from '../../components/PageHero/index'
import Reveal from '../../components/Reveal/index'

const founders = [
  {
    role: 'Founder',
    name: 'Sam Bushman',
    initials: 'SB',
    highlights: [
      '25+ years as a talk show host',
      'Host of Liberty RoundTable',
      'Public speaker on liberty',
      'Founder, Small Business Tech Guys',
    ],
    bio: [
      'Who is Sam Bushman? According to Sam, the words "Family Man" describe him to a tee. Along with his strong Christian beliefs, his wife Julie and eight children are his treasures. His hobbies include home schooling his children, playing games, fun in the outdoors, reading, a love of music, and his favorite, talk radio.',
      'Sam has been a talk show host for 25+ years, sharing his God given gift of gab on a wide range of topics. His radio programs have been syndicated on several radio networks. He currently hosts Liberty RoundTable a nationally syndicated talk show on The LovingLiberty.net Radio Network.',
      'Liberty Roundtable: Candid political discussion of current issues affecting you and your liberty, Monday - Saturday 9-11 ET Syndicated on LovingLiberty.net – along with listeners on the AM/FM dial as well as new Media Channels such as the Roku player – Amazon Devices, Smart Phone Apps just to name a few.',
      'He is a well-known Public speaker on all topics relating to Liberty.',
      'Sam is well known for the He Who Owns The Media Makes The Rules DVD and the New Media Takes Center Stage presentations.',
      'Sam also runs a consulting business, Small Business Tech Guys, specializing in radio automation, digital audio production and editing, voice over work, remote control access, networking, Internet streaming, etc. Sam is available as an IT consultant for small business.',
    ],
  },
  {
    role: 'Co-Founder',
    name: 'Richard Mack',
    initials: 'RM',
    highlights: [
      'Graham County Sheriff, 1988–1997',
      'Won a landmark Tenth Amendment case at the U.S. Supreme Court',
      'NRA Law Officer of the Year',
      'Graduate of the FBI National Academy',
    ],
    bio: [
      'Who is Richard Mack? Author/speaker and former sheriff Richard Mack has served in a wide variety of roles over the course of his nearly twenty year career in law enforcement, which began in Provo, Utah.',
      'Mack began his career with the Provo Police Department as a parking enforcement cadet while attending BYU. A couple of years later he became a full-time officer and was soon promoted to Corporal, Sergeant, and Detective. His most traumatic experience there was a one-year assignment as an undercover narcotics agent. After nearly 11 years at Provo PD, Mack decided to return to his childhood turf in Arizona and run for Graham County Sheriff. His campaign took off and he was elected in 1988.',
      'He was sheriff for two terms until 1997. He was named Elected Official of the Year by the Arizona-New Mexico Coalition of Counties in 1994, received the NRA Law Officer of the Year, inducted into the NRA Hall of Fame, 1995 Cicero Award, Samuel Adams Leadership Award from the Local Sovereignty Coalition, and Gun Owners of America Defender of the Second Amendment Award.',
      'During his tenure, federal officers informed the sheriffs of the state that they would be required to enforce the so-called “Brady Bill” and run background checks at their expense under the law. In 1994, Mack and six other sheriffs from across the country, challenged the constitutionality of the Brady Bill and ultimately, fought it all the way to the United States Supreme Court, where they won a monumental decision for freedom. Three years later, in a landmark 5-4 split decision based on the Tenth Amendment to the United States Constitution, Mack won his case.',
      'A graduate of the FBI National Academy, some of Mack’s positions include: patrol officer, undercover narcotics officer, hostage negotiator, youth officer, school resource officer, communications supervisor, corporal, front desk sergeant, detective, sheriff, Search and Rescue supervisor, jail administrator, and DARE instructor.',
      'Mack has been a consultant on numerous cases regarding police abuse, brutality, and other misconduct by public officials. He has joined with other members of the law enforcement community to speak out in favor of drug policy reform.',
      'A graduate of Brigham Young University, Mack now lives with his wife near the Phoenix, AZ area.',
      'During the past two years Sheriff Mack has been a speaker at more than 70 different Tea Party rallies all across the country, ranging all the way from Honolulu to Bangor, Maine. Mack has supported this noble movement, because it is both effective and peaceful.',
    ],
  },
]

const About = () => {
  usePageTitle('About')
  return (
    <>
      <PageHero eyebrow="Who we are" title="About Us">
        Two lifelong public servants — one behind the microphone, one behind the badge — united by a call for civility.
      </PageHero>

      <div className="container-page divide-y divide-navy-900/10 py-8">
        {founders.map((f) => (
          <section
            key={f.name}
            aria-labelledby={`${f.initials}-heading`}
            className="grid gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16"
          >
            <aside className="lg:col-span-4">
              <Reveal className="card sticky top-28 overflow-hidden">
                <div className="relative bg-navy-900 px-8 pt-10 pb-8 text-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--color-royal-600),transparent_70%)] opacity-70" />
                  <span
                    className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-navy-950 font-display text-3xl font-semibold text-brass-300 ring-4 ring-brass-400/60 ring-offset-4 ring-offset-navy-900"
                    aria-hidden="true"
                  >
                    {f.initials}
                  </span>
                  <p className="relative mt-6 text-xs font-semibold tracking-[0.22em] text-brass-300 uppercase">{f.role}</p>
                  <h2 id={`${f.initials}-heading`} className="relative mt-2 text-3xl font-semibold text-white">
                    {f.name}
                  </h2>
                </div>
                <ul className="space-y-4 p-8 text-sm text-ink-soft">
                  {f.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 fill-brass-500" aria-hidden="true">
                        <path d="M12 2l2.6 6.9L22 9.3l-5.8 4.6 2 7.1L12 17l-6.2 4 2-7.1L2 9.3l7.4-.4z" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </aside>

            <Reveal delay={120} className="prose-civic lg:col-span-7 lg:col-start-6">
              {f.bio.map((para, i) => (
                <p key={i} className={i === 0 ? 'text-xl leading-relaxed text-ink' : undefined}>
                  {para}
                </p>
              ))}
            </Reveal>
          </section>
        ))}
      </div>
    </>
  )
}

export default About
