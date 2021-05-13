import { breakPoints } from 'src/common/styles/responsiveBreakpoint';
import styled from 'styled-components';
export const TotalContainer = styled.div`
  background-color: #f9f9fa;
  position: relative;
  height: 1120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 160px;

  @media ${breakPoints.mobile} {
    height: 22.5rem;
    width: 100%;
    padding-top: 2.5rem;
  }
`;

export const Title = styled.h2`
  font-weight: 400;

  @media ${breakPoints.mobile} {
    font-size: 1.25rem;
    font-weight: bold;
  }
`;

export const Division = styled.img`
  margin-top: 40px;
  width: 40px;
  height: 8px;
  z-index: 2;
  margin-bottom: 80px;

  @media ${breakPoints.mobile} {
    width: 1.25rem;
    height: 0.25rem;
    margin-top: 1.25rem;
    margin-bottom: 2.5rem;
  }
`;

export const IFrame = styled.iframe`
  width: 1200px;
  height: 675px;

  /* @media {breakPoints.tablet} {
  } */

  @media ${breakPoints.mobile} {
    width: 20.5rem;
    height: 11.5rem;
  }
`;
