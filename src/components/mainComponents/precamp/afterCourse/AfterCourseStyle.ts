import { breakPoints } from 'src/common/styles/responsiveBreakpoint';
import styled from 'styled-components';

export const Container = styled.div`
  height: 918px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media ${breakPoints.mobile} {
    height: 45rem;
    margin-top: 5rem;
  }
`;

export const BackImg = styled.div`
  position: absolute;
  top: 0px;
  background-image: url('/images/precamp/blackBackground.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 510px;
  width: 100%;
  z-index: -1;

  @media ${breakPoints.mobile} {
    height: 16rem;
  }
`;

export const Title = styled.h2`
  margin-top: 160px;
  font-weight: 500;
  color: white;
  white-space: pre;
  line-height: 48px;

  @media ${breakPoints.mobile} {
    margin-top: 5rem;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.3rem;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px 24px;

  @media ${breakPoints.mobile} {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  width: 588px;
  height: 152px;
  white-space: pre;
  z-index: 1;
  background-color: white;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);

  @media ${breakPoints.mobile} {
    width: 20.5rem;
    height: 5.5rem;
  }
`;

export const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Paragraph = styled.span`
  font-size: 24px;
  font-family: 'NotoSansCJKkr';
  white-space: pre;
  font-weight: 400;
  line-height: 36px;

  /* @media {breakPoints.tablet} {
    font-size: 24px;
  } */

  @media ${breakPoints.mobile} {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const ParagraphBold = styled.span`
  font-size: 24px;
  font-family: 'NotoSansCJKkr';
  white-space: pre;
  font-weight: bold;
  text-align: center;

  /* @media {breakPoints.tablet} {
    font-size: 24px;
  } */

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const Division = styled.img`
  margin-top: 40px;
  margin-bottom: 80px;
  width: 40px;
  height: 8px;
  z-index: 2;

  @media ${breakPoints.mobile} {
    margin-top: 1.25rem;
    margin-bottom: 2.5rem;
    width: 1.25rem;
    height: 0.25rem;
  }
`;

export const Icon = styled.img`
  margin-left: 40px;
  margin-right: 40px;
  width: 56px;
  height: 56px;

  @media ${breakPoints.mobile} {
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    width: 2.25rem;
    height: 2.25rem;
  }
`;
