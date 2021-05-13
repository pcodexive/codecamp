import { breakPoints } from 'src/common/styles/responsiveBreakpoint';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 360px;
  background-color: black;
  justify-content: center;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 28.5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  background-image: url('/images/main/mainLinkBackground.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 1200px;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    width: 100%;
  }
`;

export const LeftWrapper = styled.div`
  background: linear-gradient(90deg, #000000 0.67%, rgba(0, 0, 0, 0.6) 100.67%);
  color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  &:hover {
    background: rgba(255, 225, 0, 0.8);
    color: black;
  }

  @media ${breakPoints.mobile} {
    height: 14.25rem;
  }
`;

export const RightWrapper = styled.div`
  background: linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0.6) 100%);
  color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  &:hover {
    background: rgba(255, 225, 0, 0.8);
    color: black;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-family: 'NotoSansCJKkr';
  font-size: 16px;

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const TextLarge = styled.p`
  font-family: 'NotoSansCJKkr';
  font-size: 72px;

  @media ${breakPoints.mobile} {
    font-size: 1.25rem;
  }
`;

export const TextBold = styled.p`
  font-family: 'NotoSansCJKkr';
  font-size: 24px;
  font-weight: 600;

  @media ${breakPoints.mobile} {
    font-size: 1.25rem;
  }
`;

export const Space = styled.div`
  height: 20px;

  @media ${breakPoints.mobile} {
    font-size: 1.25rem;
  }
`;
