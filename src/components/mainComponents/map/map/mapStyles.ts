import { breakPoints } from "src/common/styles/responsiveBreakpoint";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1963px;

  @media ${breakPoints.mobile} {
    min-height: auto;
    margin-bottom: 5rem;
    min-height: 0rem;
  }
`;

export const MainBackground = styled.div`
  width: 100%;
  height: 560px;
  z-index: -1;
  background-image: url('/images/map/background.webp');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 10rem;

  @media ${breakPoints.mobile} {
    background-image: url('/images/map/backgroundM.webp');
    height: 15rem;
    margin-bottom: 3.75rem;
  }
`;

export const Map = styled.div`
    width: 1200px;
    height: 800px;
    border: 1px solid lightgray;

    @media ${breakPoints.mobile} {
      /* width: 300px; */
      width: 100%;
      height: 13.625rem;
      border: none;
    }
`

export const DetailWrapper = styled.div`
  width: 1200px;
  padding: 2.5rem;

  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 0.5rem 0.5rem;
  }
`

export const MapInfoWrapper = styled.div`
    display: flex;
    width: 1200px;
    padding-top: 1rem;
    padding-bottom: 1rem;

    @media ${breakPoints.mobile} {
      /* width: 300px; */
      width: 100%;
      flex-direction: column;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
`

export const FlexWrapper = styled.div`
  display: flex;
`

export const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Icon = styled.img`
    width: 1.5rem;
    height: 1.5rem;

    @media ${breakPoints.mobile} {
      width: 0.875rem;
      height: 0.875rem;
    }
`

export const Name = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    padding-left: 1.5rem;

    @media ${breakPoints.mobile} {
      font-size: 0.875rem;
      padding-left: 0.5rem;
    }
`

export const Info = styled.p`
    font-size: 1.5rem;
    padding-left: 1.5rem;

    @media ${breakPoints.mobile} {
      font-size: 0.68rem;
      padding-top: 0.25rem;
      padding-left: 1.25rem;
    }
`

export const InfoSub = styled.p`
    font-size: 1rem;
    padding-left: 1.5rem;
    padding-top: 0.5rem;

    @media ${breakPoints.mobile} {
      font-size: 0.4rem;
      padding-top: 0.25rem;
      padding-left: 1.25rem;
    }
`

export const MapWrapper = styled.div`
  border: 1px solid lightgray;

  @media ${breakPoints.mobile} {
    width: 90%;
  }
`
