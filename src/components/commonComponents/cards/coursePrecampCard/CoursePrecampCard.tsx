import React, { useContext, useState } from 'react';
import { Container, BottomBar, H4, FlexWrapper } from './CoursePrecampCardStyle';
import { getDay } from 'src/common/lib/functions';
import { IProps } from './CoursePrecampCardTypes';
import { GlobalContext } from '../../globalProvider/GlobalProvider';
const CoursePrecampCard: React.FC<IProps> = ({ month, start, end, isExpired, precampCardRef }) => {
  const [isMouseOvered, setIsMouseOvered] = useState(false)
  const {toggleRegisterForm} = useContext(GlobalContext)
  return (
    <Container ref={precampCardRef === null ? precampCardRef : null}>
      <H4>{month}월</H4>
      <FlexWrapper>
        {getDay(start)} ~ {getDay(end)}
      </FlexWrapper>
      {isExpired && <BottomBar isExpired>모집 완료</BottomBar>}
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

export default CoursePrecampCard;
