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
  height: 2668px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakPoints.mobile} {
    padding-top: 6rem;
    height: auto;
  }
`;

export const WrapperWeb = styled.div`
  @media ${breakPoints.mobile} {
    display: none;
  }
`

export const WrapperMobile = styled.div`
  display: none;

  @media ${breakPoints.mobile} {
    display: block;
  }
`

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
  line-height: 72px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 0)};

  @media ${breakPoints.mobile} {
    font-size: 1rem;
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

  @media ${breakPoints.mobile} {
    white-space: pre-wrap;
    font-size: 1rem;
    font-weight: bold;
    width: 80%;
    text-align: center;
  }
`;

export const H5 = styled.h5<IProps>`
  white-space: pre;
  margin-top: ${(props) => (props.marginTop ? props.marginTop + 'px' : '0px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 0)};

  @media ${breakPoints.mobile} {
    white-space: pre-wrap;
    font-size: 0.875rem;
    font-weight: 400;
    width: 80%;
    text-align: center;
  }
`;

export const Paragraph = styled.h5<IProps>`
  font-size: 18px;
  font-family: 'NotoSansCJKkr';
`;

export const CategoryGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0px 24px;
  margin-top: 80px;
`;

export const StackCategoryTab = styled.div`
  font-size: 24px;
  text-align: center;
  line-height: 60px;
  background-color: black;
  color: white;
  font-weight: bold;
  font-family: 'NotoSansCJKkr';
  width: 384px;
  height: 60px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);
`;

export const MainStackTab = styled.div`
  font-size: 24px;
  text-align: center;
  line-height: 60px;
  background-color: #151a49;
  color: white;
  font-weight: bold;
  font-family: 'NotoSansCJKkr';
  width: 384px;
  height: 60px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);
`;

export const AlterStackTab = styled.div`
  font-size: 24px;
  text-align: center;
  line-height: 60px;
  background-color: #d2d3d5;
  color: #3e3f49;
  font-weight: bold;
  font-family: 'NotoSansCJKkr';
  width: 384px;
  height: 60px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);
`;

export const FlexCoumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const TableContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #b2b3b7;
  border-bottom: 1px solid #b2b3b7;

  @media ${breakPoints.mobile} {
    margin-top: 1rem;
  }
`;

// export const TableContainer = styled.div`
//   width: 1200px;
//   border-top: 1px solid #b2b3b7;
//   border-bottom: 1px solid #b2b3b7;
// `;

export const TableName = styled.div`
  width: 384px;
  height: 127px;
  background-color: #ededee;
  border-bottom: 1px solid #d2d3d5;
  padding-left: 24px;
  padding-top: 51px;
  font-weight: 700;

  @media ${breakPoints.mobile} {
    width: 90vw;
    height: 3rem;
    line-height: 3rem;
    background-color: #F9F9FA;
    border-bottom: 1px solid #d2d3d5;
    padding-top: 0rem;
    padding-left: 0rem;
    text-align: center;
  }
`;

export const TableMainstack = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0px 12px;
  justify-content: center;
  align-items: center;
  width: 432px;
  height: 127px;
  background-color: white;
  border-bottom: 1px solid #d2d3d5;
  padding-left: 24px;

  @media ${breakPoints.mobile} {
    width: 90vw;
    padding-left: 0rem;
    gap: 0px;
    ${({ isBlank }: { isBlank?: boolean }) => isBlank ? `
      font-size: 3rem;
      display: flex;
    ` : ''}
  }
`;

export const TableAlterstack = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0px 6px;
  justify-content: center;
  align-items: center;
  width: 384px;
  height: 127px;
  background-color: #f9f9fa;
  border-bottom: 1px solid #d2d3d5;
  padding-left: 12px;

  @media ${breakPoints.mobile} {
    width: 90vw;
    padding-left: 0rem;
    gap: 0px;
    ${({ isBlank }: { isBlank?: boolean }) => isBlank ? `
      font-size: 3rem;
      display: flex;
    ` : ''}
  }
`;

export const Stack = styled.img`
  width: 78px;
  height: 78px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

  @media ${breakPoints.mobile} {
    width: 3.875rem;
    height: 3.875rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;
export const StackNoShadow = styled.img`
  width: 78px;
  height: 78px;

  @media ${breakPoints.mobile} {
    width: 3.875rem;
    height: 3.875rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export const StackDescriptionContainer = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: flex-end;
  width: 1200px;

  @media ${breakPoints.mobile} {
    width: 90vw;
    margin-top: 0.75rem;
    margin-bottom: 5.188rem;
  }
`;

export const StackDescriptionWrapper = styled.div`
  width: 730px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0px 10px;
  margin-right: 10px;

  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: flex-end;
    width: 90vw;
    gap: 0rem;
    margin-right: -1rem;
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${breakPoints.mobile} {
    font-size: 0.5rem;
    margin-right: 20px;
  }
`;

export const BoxImg = styled.img`
  margin-right: 12px;

  @media ${breakPoints.mobile} {
    margin-left: 0.5rem;
    margin-right: 0.25rem;
    width: 0.5rem;
    height: 0.5rem;
  }
`;

export const StackSwitchWrapper = styled.div`
  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25rem;
    font-weight: bold;
    margin-top: 5rem;
  }
`

export const StackSwitch = styled.div`
  @media ${breakPoints.mobile} {
    position: relative;
    width: 4.688rem;
    height: 2rem;
    line-height: 2rem;
    background-color: ${({ isMain }: { isMain: boolean }) => isMain ? '#010741;' : '#B2B3B7;'};
    border-radius: 1rem;
    color: white;
    padding-left: ${({ isMain }: { isMain: boolean }) => isMain ? '1rem;' : '2.5rem;'};
    font-size: 0.5rem;
  }
`

export const SwitchBall = styled.div`
  @media ${breakPoints.mobile} {
    position: absolute;
    right: ${({ isMain }: { isMain: boolean }) => isMain ? '1.4rem;' : '4rem;'};
    width: 1.5rem;
    height: 1.5rem;
    background-color: white;
    border-radius: 50%;
    -webkit-transition: all 0.05s;
    -moz-transition: all 0.05s;
    -ms-transition: all 0.05s;
    -o-transition: all 0.05s;
    transition: all 0.05s;
  }
`