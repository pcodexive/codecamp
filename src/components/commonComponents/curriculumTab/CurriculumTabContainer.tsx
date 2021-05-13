import React from 'react';
import CurriculumTabPresenter from './CurriculumTabPresenter';
import { ContainerProps } from './CurriculumTabTypes';
import { useRouter } from 'next/router';
const CurriculumTabContainer: React.FC<ContainerProps> = ({ tabType }) => {
  const router = useRouter();
  const moveToPrecamp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push('/curriculum/precamp');
  };
  const moveToCodecampF = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push('/curriculum/codecampF');
  };
  const moveToCodecampB = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push('/curriculum/codecampB');
  };
  return (
    <CurriculumTabPresenter
      moveToPrecamp={moveToPrecamp}
      moveToCodecampF={moveToCodecampF}
      moveToCodecampB={moveToCodecampB}
      tabType={tabType}
    />
  );
};

export default CurriculumTabContainer;
