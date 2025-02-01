import React, { useEffect, useState } from 'react';
import flower1 from '../assets/light.svg';
import flower2 from '../assets/dark.svg';


const LeftFlowersParallax: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0); // Type the state as a number
  const maxScroll = 300;

  useEffect(() => {
    const handleScroll = () => {
      const position = Math.min(window.scrollY, maxScroll);
      requestAnimationFrame(() => {
        setScrollPosition(position);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const topFlowerPosition = scrollPosition * 0.1;
  const bottomFlowerPosition = scrollPosition * 0.7;

  return (
    <div className="fixed left-[-5vw] top-0 w-[12vw] h-screen pointer-events-none z-0">
      <div
        className="absolute top-[15vh] w-3/4 transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${-topFlowerPosition}px)`,
        }}
      >
        <img
          src={flower1}
          alt="Top Flower"
          className="w-full h-auto opacity-90 max-w-md"
        />
      </div>

      <div
        className="absolute top-[35vh] w-[10vw] transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${-bottomFlowerPosition}px)`,
        }}
      >
        <img
          src={flower2}
          alt="Bottom Flower"
          className="w-full h-auto opacity-90 max-w-md"
        />
      </div>
    </div>
  );
};

export default LeftFlowersParallax;
