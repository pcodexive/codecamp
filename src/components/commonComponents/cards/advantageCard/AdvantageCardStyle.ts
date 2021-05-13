import { breakPoints } from 'src/common/styles/responsiveBreakpoint';
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 552px;
  width: 384px;
  background-color: white;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1.25rem;
  }
`;

export const CardInnerWrapper = styled.div`
  @media ${breakPoints.mobile} {
    box-shadow: 2px 5px 10px lightgray;
    z-index: 1;
  }
`

export const BackImage = styled.img`
  width: 384px;
  height: 280px;

  @media ${breakPoints.mobile} {
    width: 20.5rem;
    height: 15rem;
  }
`;

export const TitleContainer = styled.div`
  margin-left: 36px;
  margin-right: 36px;
  margin-top: 40px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media ${breakPoints.mobile} {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    margin-top: 1.25rem;
    margin-bottom: 0.75rem;
  }
`;

export const Title = styled.h4`
  font-weight: 700;
  display: inline-block;

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const Passage = styled.h5`
  margin-left: 36px;
  margin-right: 36px;
  line-height: 13px;
  white-space: pre;

  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
    line-height: 0.6rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    margin-bottom: 2.5rem;
  }
`;

export const Icon = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 16px;
  display: inline-block;
  border: 1px solid yellow;
  z-index: 100;

  @media ${breakPoints.mobile} {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
