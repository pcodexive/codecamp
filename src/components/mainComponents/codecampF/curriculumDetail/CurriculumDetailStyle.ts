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
  isTitle?: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1991px;
  position: relative;

  @media ${breakPoints.mobile} {
    height: auto;
  }
`;

export const H3 = styled.h3<IProps>`
  white-space: pre;
  margin-top: ${(props) => (props.marginTop ? props.marginTop + 'px' : '0px')};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft + 'px' : '0px')};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom + 'px' : '0px')};
  margin-right: ${(props) => (props.marginRight ? props.marginRight + 'px' : '0px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 0)};
  color: ${(props) => (props.color ? props.color : 'black')};

  @media ${breakPoints.mobile} {
    font-size: 1.25rem;
    font-weight: bold;
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

  @media ${breakPoints.mobile} {
    font-size: 0.875rem;
    font-weight: medium;
    margin-left: 0rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const H5 = styled.h5<IProps>`
  white-space: pre;
  margin-top: ${(props) => (props.marginTop ? props.marginTop + 'px' : '0px')};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft + 'px' : '0px')};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom + 'px' : '0px')};
  margin-right: ${(props) => (props.marginRight ? props.marginRight + 'px' : '0px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  color: ${(props) => (props.color ? props.color : 'black')};
  line-height: 42px;

  @media ${breakPoints.mobile} {
    font-size: 0.75rem;
    line-height: 1.125rem;
    margin-left: 0rem;
  }
`;

export const H5_Detail = styled.h5<IProps>`
  white-space: pre;
  margin-top: ${(props) => (props.marginTop ? props.marginTop + 'px' : '0px')};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft + 'px' : '0px')};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom + 'px' : '0px')};
  margin-right: ${(props) => (props.marginRight ? props.marginRight + 'px' : '0px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  color: ${(props) => (props.color ? props.color : 'black')};
  line-height: 42px;

  @media ${breakPoints.mobile} {
    font-size: 0.75rem;
    margin-left: 1rem;
    line-height: 1.125rem;
  }
`;

export const MainImg = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 440px;
  background-image: url('/images/codecampF/curriculumDetailBackground.webp');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;

  @media ${breakPoints.mobile} {
    background-image: url('/images/codecampF/curriculumDetailBackgroundM.webp');
    height: 13.75rem;
  }
`;

export const Title = styled.h2`
  color: white;
  font-weight: 700;
  margin-top: 160px;
  margin-bottom: 40px;

  @media ${breakPoints.mobile} {
    margin-top: 5rem;
    margin-bottom: 0rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const Division = styled.img`
  @media ${breakPoints.mobile} {
    margin-top: 1.25rem;
    width: 1.25rem;
    height: 0.25rem;
  }
  
`;

export const Icon = styled.img``;
export const ProjectContainer = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  position: relative;
  width: 1200px;
  height: 371px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop + 'px' : '0px')};

  @media ${breakPoints.mobile} {
    width: 90%;
    height: auto;
    padding-top: 0rem;
    margin-top: 7.5rem;
  }
`;

export const ProjectBox = styled.div<IProps>`
  position: relative;
  display: flex;
  width: 1200px;
  margin-top: 20px;

  height: 296px;
  background-color: #f9f9fa;
  border-top: 3px solid #b2b3b7;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-top: 0rem;

  }
`;

export const ProjectBoxDivision = styled.div`
  padding-top: 40px;
  padding-left: 40px;
  width: 599px;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.mobile} {
    width: 90%;
    padding-top: 1rem;
    padding-left: 1.25rem;
    margin-bottom: 1rem;
  }
`;

export const ProjectDescription = styled.div``;

export const FlexRow = styled.div<IProps>`
  height: ${(props) => (props.height ? props.height + 'px' : '')};
  display: flex;
  align-items: center;

  @media ${breakPoints.mobile} {
    ${({ isTitle }) => isTitle ? `
      flex-direction: column;
      align-items: flex-start;
    ` : ''}
  }
`;

export const FlexComn = styled.div<IProps>`
  height: ${(props) => (props.height ? props.height + 'px' : '')};
  display: flex;
  flex-direction: column;
`;
