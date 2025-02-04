import React, { useEffect, useState } from 'react';
import flower2 from '../assets/rotated.svg';
import flower1 from '../assets/rotated dark.svg';

const RightFlowersParallax: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const maxScroll = 300;

  useEffect(() => {
    const handleScroll = () => {
      const position = Math.min(window.scrollY, maxScroll);
      requestAnimationFrame(() => {
        setScrollPosition(position);
      });
    };

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getStyles = () => {
    switch (screenSize) {
      case 'mobile':
        return {
          container: 'right-[0vw] w-[30vw]',
          topFlower: 'top-[30vh] w-[35vw]',
          bottomFlower: 'top-[50vh] w-[35vw]'
        };
      case 'tablet':
        return {
          container: 'right-[0vw] w-[25vw]',
          topFlower: 'top-[35vh] w-[18vw]',
          bottomFlower: 'top-[55vh] w-[22vw]'
        };
      default:
        return {
          container: 'right-[-3vw] w-[20vw]',
          topFlower: 'top-[40vh] w-[17vw]',
          bottomFlower: 'top-[60vh] w-[18vw]'
        };
    }
  };

  const styles = getStyles();
  const topFlowerPosition = -scrollPosition * 0.2;
  const bottomFlowerPosition = scrollPosition * 0.1;

  return (
    <div className={`fixed top-0 h-screen pointer-events-none z-0 ${styles.container}`}>
      <div
        className={`absolute transition-transform duration-100 ease-out ${styles.topFlower}`}
        style={{ transform: `translateY(${-topFlowerPosition}px)` }}
      >
        <img src={flower1} alt="Top Flower" className="w-full h-auto opacity-90 max-w-md" />
      </div>

      <div
        className={`absolute transition-transform duration-100 ease-out ${styles.bottomFlower}`}
        style={{ transform: `translateY(${-bottomFlowerPosition}px)` }}
      >
        <img src={flower2} alt="Bottom Flower" className="w-full h-auto opacity-90 max-w-md" />
      </div>
    </div>
  );
};

export default RightFlowersParallax;
