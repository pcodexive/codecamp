import React, { useState } from 'react';
import MainPresenter from './MainPresenter';
const MainContainer = () => {
  const [isActive, setIsActive] = useState<boolean[]>(Array(9).fill(false));

  const handleIsActive = (number: number) => {
    let copied = isActive.slice();
    copied[number] = !copied[number];
    setIsActive(copied);
  };
  return <MainPresenter handleIsActive={handleIsActive} isActive={isActive} />;
};

export default MainContainer;
