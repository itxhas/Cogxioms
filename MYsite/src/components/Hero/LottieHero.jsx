import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieHero = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/hero.json',
    });
  }, []);

  return <div ref={container} style={{ width: 300, height: 300 }} />;
};

export default LottieHero;
