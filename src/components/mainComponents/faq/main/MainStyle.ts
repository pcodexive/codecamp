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

export const H2 = styled.h2<IProps>`
  white-space: pre;
  margin-top: ${(props) => (props.marginTop ? props.marginTop + 'px' : '0px')};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft + 'px' : '0px')};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom + 'px' : '0px')};
  margin-right: ${(props) => (props.marginRight ? props.marginRight + 'px' : '0px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 0)};
  color: ${(props) => (props.color ? props.color : 'black')};

  @media ${breakPoints.mobile} {
    margin-top: 3.75rem;
    margin-bottom: 2.5rem;
    font-size: 1.5rem;

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
`;

export const H5 = styled.h5<IProps>`
  white-space: pre;
  margin-top: ${(props) => (props.marginTop ? props.marginTop + 'px' : '0px')};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft + 'px' : '0px')};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom + 'px' : '0px')};
  margin-right: ${(props) => (props.marginRight ? props.marginRight + 'px' : '0px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  color: ${(props) => (props.color ? props.color : 'black')};
  font-size: 20px;

  @media ${breakPoints.mobile} {
    white-space: pre-wrap;
    font-size: 0.875rem;
    font-weight: bold;
    line-height: 1.25rem;
  }
`;

export const Paragraph = styled.div<IProps>`
  white-space: pre;
  font-size: 16px;
  line-height: 26px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop + 'px' : '0px')};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft + 'px' : '0px')};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom + 'px' : '0px')};
  margin-right: ${(props) => (props.marginRight ? props.marginRight + 'px' : '0px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  color: ${(props) => (props.color ? props.color : 'black')};

  @media ${breakPoints.mobile} {
    white-space: pre-wrap;
    font-size: 0.75rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1963px;

  @media ${breakPoints.mobile} {
    min-height: auto;
    margin-bottom: 5rem;
  }
`;

export const MainBackground = styled.div`
  width: 100%;
  height: 560px;
  z-index: -1;
  background-image: url('/images/faq/faqBackground.webp');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media ${breakPoints.mobile} {
    height: 15rem;
  }
`;

export const Title = styled.div`
  display: none;

  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    font-weight: bold;
    color: white;
    height: 100%;
  }
`

export const AccordionWrapper = styled.div`
  border-top: 1px solid #b2b3b7;
  border-bottom: 1px solid #b2b3b7;
  min-height: 100px;
`;

export const AccordionContent = styled.div`
  width: 100%;
  padding: 40px;
  background-color: #f9f9fa;
  border-top: 2px solid #ededee;

  @media ${breakPoints.mobile} {
    padding-top: 0.75rem;
    padding-left: 0.5rem;
  }
`;
