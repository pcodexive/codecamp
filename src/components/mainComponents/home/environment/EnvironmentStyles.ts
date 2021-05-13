import { breakPoints } from 'src/common/styles/responsiveBreakpoint';
import styled from 'styled-components';
export const TotalContainer = styled.div`
  background-color: #f9f9fa;
  position: relative;
  height: 970px;
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

export const ImgWrapper = styled.div`
    padding-left: 0.75rem;
    padding-right: 0.75rem;

    @media ${breakPoints.mobile} {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
`

export const Img = styled.img`
    width: 100%;
    height: 18rem;

    @media ${breakPoints.mobile} {
        width: 100%;
        height: 9.5rem;
    }
`;

export const WebWrapper = styled.div`
    width: 1200px;

    @media ${breakPoints.mobile} {
      display: none;
    }
`

export const MobileWrapper = styled.div`
    display: none;

    @media ${breakPoints.mobile} {
      display: block;
      width: 90%;
      width: 360px;
    }
`