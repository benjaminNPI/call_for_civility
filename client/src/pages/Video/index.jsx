import usePageTitle from '../../hooks/usePageTitle';
import PageHero from '../../components/PageHero/index';
import Reveal from '../../components/Reveal/index';

const videos = [
  { id: 'XFGXVwYIuF8', title: 'Call for Civility video 1' },
  { id: 'NHyQgG178pM', title: 'Call for Civility video 2' },
];

const Video = () => {
  usePageTitle('Video');

  return (
    <>
      <PageHero eyebrow="Watch & share" title="Videos">
        Watch videos of events, including interviews with Sam Bushman, Richard Mack, and other Civility Advocates.
      </PageHero>

      <section className="container-page py-20 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          {videos.map((v, i) => (
            <Reveal key={v.id} delay={i * 120} className="card overflow-hidden p-2">
              <div className="aspect-video overflow-hidden rounded-xl bg-navy-900">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default Video;
