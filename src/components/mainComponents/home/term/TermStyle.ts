import { breakPoints } from 'src/common/styles/responsiveBreakpoint';
import styled from 'styled-components';

type IProps = {
  height?: number;
  color?: string;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  fontWeight?: number;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 160px;
  /* width: 100%; */
  height: 1102px;

  @media ${breakPoints.mobile} {
    height: auto;
    padding-top: 2.5rem;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 1102px;
  background-image: url('/images/main/termBackground.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;

  @media ${breakPoints.mobile} {
    height: auto;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: 'NotoSansCJKkr';
  font-size: 24px;
  width: 1200px;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const HeaderSubWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: 'NotoSansCJKkr';
  font-size: 24px;
  width: 1200px;
  margin-top: 20px;
  color: red;

  @media ${breakPoints.mobile} {
    width: 100vw;
    margin-top: 0rem;
  }
`;

export const Line = styled.img`
  margin-left: 81px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const LeftButton = styled.img`
  margin-left: 40px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const RightButton = styled.img`
  margin-left: 26px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const H2 = styled.h2`
  line-height: 70px;
  font-weight: bold;

  @media ${breakPoints.mobile} {
    font-size: 1.25rem;
    line-height: 1.5rem;
    padding-left: 1rem;
  }
`;

export const H4 = styled.h4<IProps>`
  white-space: pre;
  margin-top: ${(props) => (props.marginTop ? props.marginTop + 'px' : '0px')};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft + 'px' : '0px')};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom + 'px' : '0px')};
  margin-right: ${(props) => (props.marginRight ? props.marginRight + 'px' : '0px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 0)};
  color: ${(props) => (props.color ? props.color : 'black')};
  line-height: 36px;

  @media ${breakPoints.mobile} {
    font-size: 0.75rem;
    padding-left: 1rem;
  }
`;

export const CourseSlidWrapper = styled.div`
  position: relative;
  margin-top: 40px;
  width: 1200px;
  overflow: hidden;

  @media ${breakPoints.mobile} {
    width: 100vw;
    margin-top: 0.25rem;
    overflow-x: scroll
  }
`;
export const CousrSlideWrapper = styled.div`
`;

export const CourseSlideInnerWrapper = styled.div`
  transition: transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  display: flex;
  margin-top: 40px;
  width: 100%;

  @media ${breakPoints.mobile} {
    margin-top: 0rem;
  }
`;

export const Space = styled.div`
  height: 80px;
`;
