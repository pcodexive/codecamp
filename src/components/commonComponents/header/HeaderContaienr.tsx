import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import HeaderPresenter from './HeaderPresenter';
import { GlobalContext } from '../globalProvider/GlobalProvider';

const HeaderContaienr = () => {
  const router = useRouter();
  const { closeMobileNavigationMenu } = useContext(GlobalContext);
  const [isNavigationBreakPoint, setIsNavigationBreakPoint] = useState(false)

  const moveToHome = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push('/home');
    closeMobileNavigationMenu();
  };

  const moveToCurriculum = () => {
    router.push('/curriculum/codecampF');
  };

  const moveToFaq = () => {
    router.push('/faq');
  };

  const moveToMap = () => {
    router.push('/map');
  };

  const scrollHandler = () => {
    // 모바일
    if(window.innerWidth <= 767) {
      if(window.scrollY > 280-56) {
        setIsNavigationBreakPoint(true)
      } else {
        setIsNavigationBreakPoint(false)
      }

      // 태블릿
    } else if (768 <= window.innerWidth && window.innerWidth <= 1199) {
      if(window.scrollY > 480) {
        setIsNavigationBreakPoint(true)
      } else {
        setIsNavigationBreakPoint(false)
      }

      // 데스크톱
    } else {
      if(router.pathname.includes('home') && window.scrollY > 1080) {
        setIsNavigationBreakPoint(true)
      } else if(!router.pathname.includes('home') && window.scrollY > 560) {
        setIsNavigationBreakPoint(true)
      } else {
        setIsNavigationBreakPoint(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, []);

  return (
    <div>
      <HeaderPresenter
        moveToHome={moveToHome}
        moveToCurriculum={moveToCurriculum}
        moveToFaq={moveToFaq}
        moveToMap={moveToMap}
        isNavigationBreakPoint={isNavigationBreakPoint}
      />
    </div>
  );
};

export default HeaderContaienr;
