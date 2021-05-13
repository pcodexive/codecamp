import React, { useContext, useState } from 'react';
import { Container, BottomBar, H4, FlexWrapper, StageWrapper } from './CourseCodecampCardStyle';
import { getDay } from 'src/common/lib/functions';
import { IProps } from './CourseCodecampCardTypes';
import { GlobalContext } from '../../globalProvider/GlobalProvider';
const CourseCodecampCard: React.FC<IProps> = ({
  start,
  end,
  isExpired,
  stage,
  remaining,
  codecampCardRef,
}) => {
  const [isMouseOvered, setIsMouseOvered] = useState(false);
  const {  toggleRegisterForm  } = useContext(GlobalContext);;
  return (
    <Container ref={codecampCardRef === null ? codecampCardRef : null}>
      <H4>코드캠프 {stage}기</H4>
      <FlexWrapper>
        {getDay(start)} ~ {getDay(end)}
      </FlexWrapper>
      <StageWrapper deadline={Number(remaining) <= 12}>잔여: {remaining}</StageWrapper>
      {isExpired && <BottomBar isExpired>모집 마감</BottomBar>}
      {!isExpired && (
        <BottomBar
          onMouseOver={() => setIsMouseOvered(true)}
          onMouseLeave={() => setIsMouseOvered(false)}
          onClick={toggleRegisterForm}
        >
          {!isMouseOvered ? '모집 진행중' : '신청하기'}
        </BottomBar>
      )}
    </Container>
  );
};

export default CourseCodecampCard;
