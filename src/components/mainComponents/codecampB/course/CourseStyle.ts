import { breakPoints } from 'src/common/styles/responsiveBreakpoint';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 160px;
  align-items: center;
  height: 550px;
  background: #f9f9fa;

  @media ${breakPoints.mobile} {
    height: 17.875rem;
    padding-top: 5rem;
    margin-bottom: 2.5rem;
  }
`;

export const Icon = styled.img``;

export const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  @media ${breakPoints.mobile} {
    margin-top: 2.5rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 36px;
  font-family: 'NotoSansCJKkr';
  white-space: pre;
  font-weight: 400;
  line-height: 27px;

  @media ${breakPoints.mobile} {
    font-size: 1.25rem;
  }
`;

export const BoldText = styled.span`
  font-size: 36px;
  font-family: 'NotoSansCJKkr';
  white-space: pre;
  font-weight: 700;
  line-height: 53px;

  @media ${breakPoints.mobile} {
    font-size: 1.25rem;
  }
`;
