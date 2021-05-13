import { breakPoints } from 'src/common/styles/responsiveBreakpoint';
import styled from 'styled-components';
type IProps = {
  isExpired?: boolean;
};
export const Container = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 28px;
  position: relative;
  min-width: 282px;
  height: 172px;
  box-shadow: 2px 5px 10px lightgray;
  background-color: white;

  @media ${breakPoints.mobile} {
    min-width: 45%;
    width: 45%;
    height: 6.625rem;
    padding-top: 1rem;
  }
`;

export const BottomBar = styled.div<IProps>`
  position: absolute;
  bottom: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  height: 52px;
  background-color: ${(props) => (props.isExpired ? '#B2B3B7' : 'black')};
  color: ${(props) => props.isExpired ? '#6B6C73' : 'white'};
  font-family: 'NotoSansCJKkr';

  :hover {
    cursor: ${(props) => props.isExpired ? 'not-allowed' : 'pointer'};
    color: ${(props) => props.isExpired ? '#6B6C73' : 'black'};
    background-color: ${(props) => (props.isExpired ? '#B2B3B7' : '#FFE100')};
  }

  @media ${breakPoints.mobile} {
    height: 2.25rem;
    font-size: 0.875rem;
  }
`;

export const H4 = styled.h4`
  font-weight: bold;

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const H6 = styled.h6`
  color: #3e3f49;
  margin-top: 8px;
`;

export const FlexWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  @media ${breakPoints.mobile} {
    margin-top: 0.75rem;
    font-size: 0.75rem;
    color: #3E3F49;
  }
`;
