import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// On route change, reset scroll and move focus to <main> so keyboard and
// screen reader users land at the start of the new page.
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    window.scrollTo(0, 0);
    document.getElementById('main')?.focus({ preventScroll: true });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
