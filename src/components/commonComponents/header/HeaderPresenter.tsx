import React, { useContext } from 'react';
import {
  HeaderContainer,
  Logo,
  LogoButton,
  HeaderRightContainer,
  HeaderRightBtnSmall,
  HeaderRightBtnLarge,
  RightArrow,
  MobileHeaderRightContainer,
  MobileMenu,
} from './HeaderStyle';
import { IProps } from './HeaderTypes';
import {GlobalContext} from 'src/components/commonComponents/globalProvider/GlobalProvider'

const HeaderPresenter: React.FC<IProps> = ({
  moveToHome,
  moveToCurriculum,
  moveToFaq,
  moveToMap,
  isNavigationBreakPoint,
}) => {
  const { toggleRegisterForm, toggleMobileNavigationMenu } = useContext(GlobalContext);
  return (
    <>
      <HeaderContainer isNavigationBreakPoint={isNavigationBreakPoint}>
        <LogoButton onClick={(e) => moveToHome(e)}>
          {' '}
          {!isNavigationBreakPoint && (<Logo src="/images/common/logo.png" alt="logo" />)}
          {isNavigationBreakPoint && (<Logo src="/images/common/logo_reverse.png" alt="logo_reverse" />)}
        </LogoButton>
        <HeaderRightContainer>
          <HeaderRightBtnSmall onClick={moveToCurriculum} isNavigationBreakPoint={isNavigationBreakPoint}>커리큘럼</HeaderRightBtnSmall>
          <HeaderRightBtnSmall onClick={moveToFaq} isNavigationBreakPoint={isNavigationBreakPoint}>{`Q&A`}</HeaderRightBtnSmall>
          <HeaderRightBtnSmall onClick={moveToMap} isNavigationBreakPoint={isNavigationBreakPoint}>오시는길</HeaderRightBtnSmall>
          {/* <HeaderRightBtnSmall>후기모음</HeaderRightBtnSmall> */}
          <HeaderRightBtnLarge onClick={toggleRegisterForm} isNavigationBreakPoint={isNavigationBreakPoint}>
            상담신청
            {!isNavigationBreakPoint && <RightArrow src="/images/common/rightArrow.png" isNavigationBreakPoint={isNavigationBreakPoint} />}
            {isNavigationBreakPoint && <RightArrow src="/images/common/rightArrow_reverse.png" isNavigationBreakPoint={isNavigationBreakPoint} />}
          </HeaderRightBtnLarge>
        </HeaderRightContainer>
        <MobileHeaderRightContainer>
          {!isNavigationBreakPoint && (<MobileMenu src="/images/common/mobile_menu.png" onClick={toggleMobileNavigationMenu} />)}
          {isNavigationBreakPoint && (<MobileMenu src="/images/common/mobile_menu_reverse.png" onClick={toggleMobileNavigationMenu} />)}
        </MobileHeaderRightContainer>
      </HeaderContainer>
    </>
  );
};

export default HeaderPresenter;
