import { breakPoints } from 'src/common/styles/responsiveBreakpoint';
import styled from 'styled-components';
type IProps = {
  color?: string;
  marginTop?: number;
  fontWeight?: number;
};
export const Container = styled.div`
  padding-top: 209px;
  position: relative;
  height: 1468px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakPoints.mobile} {
    padding-top: 6rem;
    height: auto;
    margin-bottom: 5rem;
  }
`;

export const BackImage = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 560px;
  background-image: url('/images/precamp/precampMainBackground.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;

  @media ${breakPoints.mobile} {
    background-image: url('/images/precamp/precampMainBackgroundM.webp');
    height: 13.5rem;
  }
`;

export const Title = styled.h2<IProps>`
  color: ${(props) => (props.color ? props.color : 'black')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop + 'px' : '0px')};
  white-space: pre;
  height: 72px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 0)};

  @media ${breakPoints.mobile} {
    font-size: 1rem;
    font-weight: bold;
    height: auto;
    line-height: 1.5rem;
  }
`;

export const TitleSub = styled.h2<IProps>`
  color: ${(props) => (props.color ? props.color : 'black')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop + 'px' : '0px')};
  white-space: pre;
  height: 72px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 0)};

  @media ${breakPoints.mobile} {
    margin-top: 3.75rem;
    font-size: 1.5rem;
    font-weight: bold;
    height: auto;
  }
`;

export const Division = styled.img`
  margin-top: 40px;
  margin-bottom: 40px;
  width: 40px;
  height: 8px;
  z-index: 2;

  @media ${breakPoints.mobile} {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    width: 1.25rem;
    height: 0.25rem;
  }
`;

export const H4 = styled.h4<IProps>`
  white-space: pre;
  margin-top: ${(props) => (props.marginTop ? props.marginTop + 'px' : '0px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 0)};

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const H5 = styled.h5<IProps>`
  white-space: pre;
  margin-top: ${(props) => (props.marginTop ? props.marginTop + 'px' : '0px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 0)};

  @media ${breakPoints.mobile} {
    margin-top: 0.75rem;
    font-size: 0.875rem;
  }
`;

export const Step = styled.img`
  margin-top: 80px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const StepM = styled.img`
  display: none;

  @media ${breakPoints.mobile} {
    display: flex;
    width: 2.25rem;
    height: 2.25rem;
    margin: auto;
    margin-top: 5rem;
    margin-bottom: 1.25rem;
  }
`

export const StepDescriptionContainer = styled.div`
  margin-top: 40px;
  display: flex;
  width: 1102px;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    width: 100%;
  }
`;

export const StepDescription = styled.div`
  display: flex;
  flex-direction: column;
  height: 110px;
  align-items: center;
`;
