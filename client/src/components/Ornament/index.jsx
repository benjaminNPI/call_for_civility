// Decorative brass divider: rule – star – rule
const Ornament = ({ className = '' }) => (
  <div className={`flex items-center gap-4 text-brass-500 ${className}`} aria-hidden="true">
    <span className="h-px flex-1 bg-linear-to-r from-transparent to-current" />
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M12 2l2.6 6.9L22 9.3l-5.8 4.6 2 7.1L12 17l-6.2 4 2-7.1L2 9.3l7.4-.4z" />
    </svg>
    <span className="h-px flex-1 bg-linear-to-l from-transparent to-current" />
  </div>
);

export default Ornament;
