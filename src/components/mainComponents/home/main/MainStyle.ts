import { breakPoints } from 'src/common/styles/responsiveBreakpoint';
import styled from 'styled-components';

export const Background = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-image: url('/images/main/homeImage1.webp');
  width: 100%;
  height: 1080px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;

  /* @media {breakPoints.tablet} {
    height: 480px;
  } */

  @media ${breakPoints.mobile} {
    background-image: url('/images/main/homeImage1M.webp');
    width: 100%;
    height: 17.5rem;
  }
`;

export const SloganWrapper = styled.div`
  flex-direction: column;
  display: flex;
  margin-top: 283px;

  /* @media {breakPoints.tablet} {
    margin-top: 146px;
  } */

  @media ${breakPoints.mobile} {
    margin-top: 6.875rem;
  }
`;

export const Slogan = styled.span`
  font-size: 48px;
  font-family: 'NotoSansCJKkr';
  color: white;
  white-space: pre;
  font-weight: 400;
  height: 72px;

  /* @media {breakPoints.tablet} {
    font-size: 24px;
  } */

  @media ${breakPoints.mobile} {
    font-size: 1.25rem;
  }
`;

export const SloganBold = styled.span`
  font-size: 48px;
  font-family: 'NotoSansCJKkr';
  color: white;
  white-space: pre;
  font-weight: bold;
  text-align: center;
  height: 72px;

  /* @media {breakPoints.tablet} {
    font-size: 24px;
  } */

  @media ${breakPoints.mobile} {
    font-size: 1.25rem;
    height: 100%;
  }
`;

export const ConsultingBtn = styled.button`
  width: 212px;
  height: 52px;
  background-color: rgba(89, 89, 89, 0.7);
  border: 1px solid white;
  font-size: 16px;
  font-family: 'NotoSansCJKkr';
  color: white;
  margin-top: 160px;
  cursor: pointer;
  &:focus {
    outline: 0;
  }

  :hover{
    color: black;
    background-color: #FFE100;
    font-weight: bold;
    border: none;
  }

  /* @media {breakPoints.tablet} {
    margin-top: 140px;
  } */
`;
