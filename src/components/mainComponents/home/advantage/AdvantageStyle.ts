import { breakPoints } from 'src/common/styles/responsiveBreakpoint';
import styled from 'styled-components';

export const TotalContainer = styled.div`
  position: relative;
  height: 1072px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 160px;

  @media ${breakPoints.mobile} {
    padding-top: 2.5rem;
    height: 100%;
    background-color: white;
  }
`;

export const BlackBackground = styled.div`
  position: absolute;
  bottom: 0px;
  background-image: url('/images/main/blackBackground.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 520px;
  width: 100%;
  z-index: -1;
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

  @media ${breakPoints.mobile} {
    width: 1.25rem;
    height: 0.25rem;
    margin-top: 1.25rem;
  }
`;

export const CardContainer = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-evenly;
  width: 1200px;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    width: 22.5rem;

    margin-top: 1.25rem;
  }
`;
