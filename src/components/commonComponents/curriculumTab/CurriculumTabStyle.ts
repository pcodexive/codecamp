import { breakPoints } from 'src/common/styles/responsiveBreakpoint';
import styled from 'styled-components';

type IProps = {
  isActive?: boolean;
  // flex: number;
};

export const Tab = styled.div`
  position: relative;
  display: flex;
  width: 1200px;
  height: 80px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;
  z-index: 2;
  margin-top: 169px;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 3rem;
    margin-top: 4.5rem;
  }
`;

export const TabContentWrapper = styled.div`
  display: flex;
  width: 939px;
  height: 36px;
  padding-top: 12px;
  align-items: center;
  justify-content: space-around;

  @media ${breakPoints.mobile} {
    padding-top: 0rem;
    width: 100%;
    height: auto;
  }
`;

export const TabButton = styled.button<IProps>`
  cursor: pointer;
  font-size: 24px;
  height: 36px;
  font-family: 'NotoSansCJKkr';
  background-color: white;
  border: transparent;
  font-weight: ${(props) => (props.isActive ? 800 : 0)};
  color: ${(props) => (props.isActive ? 'black' : '#b2b3b7')};
  border-bottom: ${(props) => (props.isActive ? '4px solid #FFE100' : '4px solid #FFFFFF')};
  box-sizing: border-box;

  @media ${breakPoints.mobile} {
    height: auto;
    font-size: 0.75rem;
    border-bottom: ${(props) => props.isActive ? '0.125rem solid #FFE100' : ''};
  }
`;
