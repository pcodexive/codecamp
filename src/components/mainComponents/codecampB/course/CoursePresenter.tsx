import React from 'react';
import { Container, Icon, ParagraphWrapper, Paragraph, BoldText } from './CourseStyle';
const CoursePresenter = () => {
  return (
    <Container>
      <Icon src="/images/codecampB/loading.png" />
      <ParagraphWrapper>
        <Paragraph>
          현재 <BoldText>코스오픈 준비중</BoldText> 입니다
        </Paragraph>
      </ParagraphWrapper>
    </Container>
  );
};

export default CoursePresenter;
