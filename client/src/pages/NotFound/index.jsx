import { Link } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import Ornament from '../../components/Ornament/index'

const NotFound = () => {
  usePageTitle('Page not found')

  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <img src="/img/logo-320.webp" alt="" width="96" height="96" className="h-24 w-24 opacity-90" />
      <p className="eyebrow mt-8 justify-center">Error 404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">This page has wandered off</h1>
      <Ornament className="mt-6 w-48" />
      <p className="mt-6 max-w-md text-lg text-ink-soft">
        The page you’re looking for doesn’t exist or may have moved. Let’s get you back on common ground.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link to="/" className="btn-navy">Back home</Link>
        <Link to="/pledge" className="btn-ghost">Sign the Pledge</Link>
      </div>
    </section>
  )
}

export default NotFound
