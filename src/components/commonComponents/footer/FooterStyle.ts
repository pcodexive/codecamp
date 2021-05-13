import { breakPoints } from 'src/common/styles/responsiveBreakpoint';
import styled from 'styled-components';
export const FooterContainer = styled.div`
  display: flex;
  background-color: black;
  height: 408px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media ${breakPoints.mobile} {
    height: 23.25rem;
    align-items: flex-start;
  }
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  height: 223px;
  border-bottom: 1px solid #666666;
  padding-bottom: 40px;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    width: 100%;
    height: auto;

    padding-top: 2.5rem;
    padding-left: 1rem;
  }
`;

export const FooterCopyrightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 105px;

  @media ${breakPoints.mobile} {
    justify-content: flex-start;
    align-items: flex-start;
    height: 7.688rem;

    padding-left: 1rem;
    padding-top: 1rem;
  }
`;

export const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FlexColumnWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 280px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const FlexColumnWrapper3 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 160px;

  @media ${breakPoints.mobile} {
    margin: 0;
    padding-top: 1.25rem;
  }
`;

export const FlexRowWrapper = styled.div`
  display: flex;
`;

export const TextSmallGrey = styled.h6`
  color: #666666;
  line-height: 27px;

  @media ${breakPoints.mobile} {
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;

export const TextSmallGreySiteMap = styled.h6`
  color: #666666;
  line-height: 27px;
  cursor: pointer;
  :hover{
    color: #FFE100;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;

export const TextBoldWhite = styled.h5`
  color: white;
  margin-bottom: 20px;
  font-weight: bold;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const IconSmall = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 20px;
  cursor: pointer;
`;

export const LogoWithMargin = styled.img`
  width: 186px;
  height: 28px;
  margin-bottom: 20px;
  /* @media {breakPoints.tablet} {
    width: 124px;
    height: 18px;
    margin-bottom: 16px;
  } */
`;
