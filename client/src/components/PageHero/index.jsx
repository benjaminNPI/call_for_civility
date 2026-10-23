// Interior page banner. Pass `image` for a photo backdrop, otherwise a navy field.
const PageHero = ({ eyebrow, title, children, image }) => (
  <header className="relative isolate overflow-hidden bg-navy-900">
    {image && (
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
      />
    )}
    <div className="absolute inset-0 -z-10 bg-linear-to-br from-navy-950/95 via-navy-900/85 to-royal-600/60" />
    <div className="grain pointer-events-none absolute inset-0 -z-10 opacity-[0.07] mix-blend-overlay" />
    <div
      className="pointer-events-none absolute -right-24 -bottom-40 -z-10 h-96 w-96 rounded-full border border-brass-400/20"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute -right-10 -bottom-28 -z-10 h-72 w-72 rounded-full border border-brass-400/15"
      aria-hidden="true"
    />

    <div className="container-page py-20 sm:py-28">
      <div className="max-w-3xl animate-rise">
        {eyebrow && <p className="eyebrow text-brass-300">{eyebrow}</p>}
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          {title}
        </h1>
        {children && (
          <div className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{children}</div>
        )}
      </div>
    </div>
  </header>
);

export default PageHero;
