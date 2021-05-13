import { breakPoints } from 'src/common/styles/responsiveBreakpoint';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('/images/precamp/mobile/detailBackground.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 1068px;

  @media ${breakPoints.mobile} {
    height: auto;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  margin-top: 160px;
  margin-bottom: 80px;
  line-height: 72px;

  @media ${breakPoints.mobile} {
    font-size: 1.5rem;
    margin-top: 5rem;
    margin-bottom: 2.5rem;
    line-height: 2.25rem;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0px 24px;

  @media ${breakPoints.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 282px;
  height: 464px;

  @media ${breakPoints.mobile} {
    width: 9.75rem;
    height: 17rem;
  }
`;

export const CardCircle = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 0px;
  width: 234px;
  height: 234px;
  z-index: 1;

  @media ${breakPoints.mobile} {
    width: 9rem;
    height: 9rem;
  }
`;
export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 347px;
  position: absolute;
  bottom: 0px;
  background-color: white;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);

  @media ${breakPoints.mobile} {
    top: 4.5rem;
    bottom: auto;
    height: 12.5rem;
  }
`;

export const CardTitle = styled.h4`
  margin-top: 157px;
  margin-bottom: 20px;
  font-weight: 700;

  @media ${breakPoints.mobile} {
    font-size: 1rem;
    margin-top: 5.75rem;
    margin-bottom: 1rem;
  }
`;

export const CardTextBox = styled.p`
  margin-top: 16px;
  font-weight: 18px;
  color: #3e3f49;
  font-family: 'NotoSansCJKkr';
  white-space: pre;
  line-height: 12px;

  @media ${breakPoints.mobile} {
    font-size: 0.75rem;
    line-height: 0.6rem;
  }
`;



export const ApplyButton = styled.button`
  cursor: pointer;
  width: 180px;
  height: 52px;
  margin-top: 80px;
  background-color: black;
  color: white;
  text-align: center;
  font-size: 16px;
  font-family: 'NotoSansCJKkr';
  :hover{
    color: black;
    background-color: #FFE100;
    font-weight: bold;
  }

  @media ${breakPoints.mobile} {
    margin-top: 5rem;
    margin-bottom: 5rem;
    width: 8.25rem;
    height: 2.75rem;
  }
`;
