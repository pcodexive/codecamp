import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LinkImagePresenter from './LinkImagePresenter';
const LinkImageContainer: React.FC = () => {
  const router = useRouter();
  const [isMouseOver1, setIsMouseOver1] = useState(false);
  const [isMouseOver2, setIsMouseOver2] = useState(false);

  const handleMouseEnter1 = () => {
    setIsMouseOver1(true);
  };
  const handleMouserLeave1 = () => {
    setIsMouseOver1(false);
  };
  const handleMouseEnter2 = () => {
    setIsMouseOver2(true);
  };
  const handleMouseLeave2 = () => {
    setIsMouseOver2(false);
  };
  const moveToPrecamp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    router.push('/curriculum/precamp');
  };
  const moveToCodecamp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    router.push('/curriculum/codecampF');
  };
  return (
    <LinkImagePresenter
      isMouseOver1={isMouseOver1}
      isMouseOver2={isMouseOver2}
      handleMouseEnter1={handleMouseEnter1}
      handleMouserLeave1={handleMouserLeave1}
      handleMouseEnter2={handleMouseEnter2}
      handleMouseLeave2={handleMouseLeave2}
      moveToPrecamp={moveToPrecamp}
      moveToCodecamp={moveToCodecamp}
    />
  );
};

export default LinkImageContainer;
