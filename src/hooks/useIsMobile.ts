import { useState, useEffect } from 'react';

export const useIsMobile = () => {
  const [isMobile, setisMobile] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth <= 767) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 767) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  });

  return { isMobile, setisMobile };
};

export default useIsMobile;
