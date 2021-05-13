import styled from 'styled-components';
import { breakPoints } from 'src/common/styles/responsiveBreakpoint';

interface IHeaderContainer {
  isNavigationBreakPoint: boolean
}
export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  padding-left: 60px;
  padding-right: 60px;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  z-index: 997;
  ${(props: IHeaderContainer) => props?.isNavigationBreakPoint ? 'background-color: white' : 'transparent'};

  /* @media {breakPoints.tablet} {
    padding-left: 30px;
    padding-right: 30px;
  } */

  @media ${breakPoints.mobile} {
    padding-left: 1rem;
    padding-right: 1rem;
    /* padding-top: 1.25rem; */
    height: 3.5rem;
  }

`;

export const Logo = styled.img`
  width: 186px;
  height: 28px;

  /* @media {breakPoints.tablet} {
    width: 124px;
    height: 18px;
  } */

  @media ${breakPoints.mobile} {
    width: 6.875rem;
    height: 1rem;
  }
`;

export const LogoButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: transparent;
`;

export const HeaderRightContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const MobileHeaderRightContainer = styled.div`
  display: none;

  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: flex-end;
  }
`

export const HeaderRightBtnSmall = styled.button`
  background-color: transparent;
  font-size: 16px;
  font-family: 'NotoSansCJKkr';
  font-weight: 500;
  height: 48px;
  margin-right: 60px;
  cursor: pointer;
  ${(props: IHeaderContainer) => props?.isNavigationBreakPoint ? 'color: black' : 'color: white'};

  /* @media {breakPoints.tablet} {
    font-size: 14px;
    margin-right: 40px;
  } */
`;

export const HeaderRightBtnLarge = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  font-size: 16px;
  font-family: 'NotoSansCJKkr';
  font-weight: 400;
  height: 48px;
  width: 123px;
  border: 1px solid white;
  cursor: pointer;
  ${(props: IHeaderContainer) => props?.isNavigationBreakPoint ? `
    color: black;
    background-color: #FFE100;
  ` : `
    color: white;
    background-color: transparent;
  `};

  :hover{
    color: black;
    background-color: #FFE100;
    font-weight: bold;
    border: none;
  }

  /* @media {breakPoints.tablet} {
    font-size: 14px;
    margin-right: 0px;
    width: 90px;
    height: 38px;
  } */
`;

export const RightArrow = styled.img`
  margin-left: 10px;
  ${(props: IHeaderContainer) => props?.isNavigationBreakPoint ? `width: 16px; margin-left: 5px;`:``}
`;

export const MobileMenu = styled.img`
  @media ${breakPoints.mobile} {
    width: 1.5rem;
    height: 1.5rem;
  }
`
