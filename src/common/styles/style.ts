import styled from 'styled-components';
import { breakPoints } from './responsiveBreakpoint';

type IProps = {
  height?: number;
  color?: string;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  fontWeight?: number;
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
  line-height: 36px;

  @media ${breakPoints.mobile} {
    font-size: 1rem;
    line-height: 1.5rem;
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

  @media ${breakPoints.mobile} {
    white-space: pre-wrap;
    text-align: center;
    padding-left: 4rem;
    padding-right: 4rem;
    font-size: 0.875rem;
  }
`;
