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
  noBorderBottom?: boolean;
  isDisplay?: boolean;
};

export const H3 = styled.h3<IProps>`
  white-space: pre;
  margin-top: ${(props) => (props.marginTop ? props.marginTop + 'px' : '0px')};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft + 'px' : '0px')};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom + 'px' : '0px')};
  margin-right: ${(props) => (props.marginRight ? props.marginRight + 'px' : '0px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 0)};
  color: ${(props) => (props.color ? props.color : 'black')};
`;

export const H4 = styled.h4<IProps>`
  white-space: pre;
  margin-top: ${(props) => (props.marginTop ? props.marginTop + 'px' : '0px')};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft + 'px' : '0px')};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom + 'px' : '0px')};
  margin-right: ${(props) => (props.marginRight ? props.marginRight + 'px' : '0px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 0)};
  color: ${(props) => (props.color ? props.color : 'black')};
`;

export const Container = styled.div<IProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  min-height: 104px;
  justify-content: space-between;
  border-bottom: ${(props) => (props.noBorderBottom ? '' : '2px solid #ededee')};

  @media ${breakPoints.mobile} {
    justify-content: center;
    width: 90vw;
    min-height: 3.875rem;
  }
`;

export const Icon = styled.img<IProps>`
  margin-top: ${(props) => (props.marginTop ? props.marginTop + 'px' : '0px')};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft + 'px' : '0px')};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom + 'px' : '0px')};
  margin-right: ${(props) => (props.marginRight ? props.marginRight + 'px' : '0px')};

  @media ${breakPoints.mobile} {
    width: 0.813rem;
    height: 1.5rem;
  }
`;

export const ArrowIcon = styled.img<IProps>`
  margin-top: ${(props) => (props.marginTop ? props.marginTop + 'px' : '0px')};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft + 'px' : '0px')};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom + 'px' : '0px')};
  margin-right: ${(props) => (props.marginRight ? props.marginRight + 'px' : '0px')};
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 1.125rem;
    height: 1.125rem;
  }
`;

export const AccordionTitle = styled.h4<IProps>`
  position: absolute;
  white-space: pre;
  margin-top: ${(props) => (props.marginTop ? props.marginTop + 'px' : '0px')};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft + 'px' : '0px')};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom + 'px' : '0px')};
  margin-right: ${(props) => (props.marginRight ? props.marginRight + 'px' : '0px')};
  font-weight: 600;
  color: ${(props) => (props.color ? props.color : 'black')};
  line-height: 36px;
  left: 68px;

  @media ${breakPoints.mobile} {
    left: 2rem;
    font-size: 0.875rem;
  }
`;

export const FlexRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 1200px;
  height: 104px;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 3.875rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

export const ParagraphWrapper = styled.div<IProps>`
  width: 100%;
  display: ${(props) => (props.isDisplay ? 'block' : 'none')};
`;
