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
  height: 1532px;
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
    height: 13.5rem;
    background-image: url('/images/precamp/precampMainBackgroundM.webp');
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
    font-size: 1.5rem;
    font-weight: bold;
    height: auto;
    line-height: 1.5rem;
    margin-top: 3.75rem;
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
  line-height: 36px;
`;

export const H5 = styled.h5<IProps>`
  white-space: pre;
  margin-top: ${(props) => (props.marginTop ? props.marginTop + 'px' : '0px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 0)};
`;

export const FlexRow = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0px 12px;
`;

export const Card = styled.div`
  display: flex;
  padding-top: 40px;
  flex-direction: column;
  align-items: center;
  width: 588px;
  height: 226px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

  @media ${breakPoints.mobile} {
    padding-top: 1.25rem;
    width: 9.75rem;
    height: 10.125rem;
  }
`;

export const Icon = styled.img`
  @media ${breakPoints.mobile} {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const ParagraphWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  font-family: 'NotoSansCJKkr';
  white-space: pre;
  font-weight: 400;
  line-height: 27px;

  @media ${breakPoints.mobile} {
    font-size: 0.75rem;
    line-height: 1rem;
    text-align: center;
  }
`;

export const BoldText = styled.span`
  font-size: 18px;
  font-family: 'NotoSansCJKkr';
  white-space: pre;
  font-weight: 700;
  line-height: 27px;

  @media ${breakPoints.mobile} {
    white-space: pre-wrap;
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;
