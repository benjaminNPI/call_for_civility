import { useEffect } from 'react';

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title ? `${title} | Call for Civility` : 'Call for Civility';
  }, [title]);
};

export default usePageTitle;
