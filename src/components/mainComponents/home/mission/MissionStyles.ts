import { breakPoints } from 'src/common/styles/responsiveBreakpoint';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100%;
  height: 662px;

  /* @media {breakPoints.tablet} {
    height: 334px;
  } */

  @media ${breakPoints.mobile} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    width: 100%;
    height: 35.5rem;
    padding-left: 1rem;
  }
`;

export const LeftWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-end;
  /* border: 1px solid red; */
  flex: 1;
`;

export const RightWrapper = styled.div`
  flex: 1;

  @media ${breakPoints.mobile} {
    width: 95%;
    height: 15rem;
  }
`;

export const TextContainer = styled.div`
  position: relative;
  margin-right: 114px;

  /* @media {breakPoints.tablet} {
    margin-right: 10px;
  } */

  @media ${breakPoints.mobile} {
    margin: 0;
  }
`;

export const ParagraphContainer = styled.div`
  width: 486px;

  /* @media {breakPoints.tablet} {
    width: 321px;
  } */

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Paragraph = styled.p`
  color: white;
  font-family: 'NotoSansCJKkr';
  font-size: 18px;
  display: inline-block;
  white-space: pre;
  font-weight: 300;

  /* @media {breakPoints.tablet} {
    font-size: 13px;
    line-height: 11px;
  } */

  @media ${breakPoints.mobile} {
    font-size: 0.75rem;
  }
`;

export const ParagraphBold = styled.p`
  color: white;
  font-family: 'NotoSansCJKkr';
  font-size: 18px;
  display: inline-block;
  white-space: pre;
  font-weight: 700;

  /* @media {breakPoints.tablet} {
    font-size: 13px;
  } */

  @media ${breakPoints.mobile} {
    font-size: 0.75rem;
    font-weight: medium;
  }
`;

export const VideoContainer = styled.div`
  margin-left: 20px;

  @media ${breakPoints.mobile} {
    margin-left: 0px;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h3`
  display: inline-block;
  margin-bottom: 40px;
  color: white;
  font-weight: 600;

  /* @media {breakPoints.tablet} {
    font-size: 18px;
    margin-bottom: 20px;
  } */

  @media ${breakPoints.mobile} {
    font-size: 1rem;
    padding-top: 2.5rem;
    margin-bottom: 1.25rem;
  }
`;

export const IFrame = styled.iframe`
  width: 584px;
  height: 380px;

  /* @media {breakPoints.tablet} {
    width: 352px;
    height: 200px;
  } */

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
  }
`;
