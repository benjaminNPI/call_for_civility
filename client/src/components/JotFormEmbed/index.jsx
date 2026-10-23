import { useEffect, useMemo, useRef, useState } from 'react';

const isJotFormOrigin = (origin) => {
  try {
    return /(^|\.)jotform\.(com|pro)$/.test(new URL(origin).hostname);
  } catch {
    return false;
  }
};

// Lightweight replacement for JotForm's copy-paste embed script: renders the
// iframe, forwards page query params (for prefill) and auto-sizes its height.
const JotFormEmbed = ({ formId, title, initialHeight = 560 }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(initialHeight);

  const src = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    params.set('isIframeEmbed', '1');
    return `https://form.jotform.com/${formId}?${params}`;
  }, [formId]);

  useEffect(() => {
    const onMessage = (e) => {
      if (!isJotFormOrigin(e.origin) || typeof e.data !== 'string') return;
      const args = e.data.split(':');
      if (args.length > 2 && args[args.length - 1] !== formId) return;

      if (args[0] === 'setHeight') {
        const next = parseInt(args[1], 10);
        if (!Number.isNaN(next)) setHeight(next);
      } else if (args[0] === 'scrollIntoView') {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [formId]);

  return (
    <iframe
      ref={ref}
      id={`JotFormIFrame-${formId}`}
      title={title}
      src={src}
      loading="lazy"
      allow="geolocation; microphone; camera"
      className="block w-full border-0 bg-transparent"
      style={{ height }}
    />
  );
};

export default JotFormEmbed;
