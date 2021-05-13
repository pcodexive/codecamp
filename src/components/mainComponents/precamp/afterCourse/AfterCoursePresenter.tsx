import React from 'react';
import {
  Container,
  BackImg,
  Title,
  CardContainer,
  Card,
  ParagraphWrapper,
  Paragraph,
  ParagraphBold,
  Division,
  Icon,
} from './AfterCourseStyle';
const AfterCoursePresenter = () => {
  return (
    <Container>
      <BackImg />
      <Title>{`     프리캠프를 마치면
      \n이런 IT 입문자가 됩니다.`}</Title>
      <Division src="/images/common/divisionLine.png" alt="no image" />
      <CardContainer>
        <Card>
          <Icon src="/images/precamp/one.png" />
          <ParagraphWrapper>
            <Paragraph>
              <ParagraphBold>웹서비스</ParagraphBold>
              {'에 대한 이해와'}
            </Paragraph>
            <Paragraph>
              <ParagraphBold>IT기술 스택 </ParagraphBold>
              {'개념을 아는 입문자'}
            </Paragraph>
          </ParagraphWrapper>
        </Card>
        <Card>
          <Icon src="/images/precamp/two.png" />
          <ParagraphWrapper>
            <Paragraph>{'HTML·CSS에 대한 이해와'}</Paragraph>
            <Paragraph>
              <ParagraphBold>기본 코딩이 가능한</ParagraphBold>
              {'입문자'}
            </Paragraph>
          </ParagraphWrapper>
        </Card>
        <Card>
          <Icon src="/images/precamp/three.png" />
          <ParagraphWrapper>
            <Paragraph>{'Javascript에 대한 개념 이해와'}</Paragraph>
            <Paragraph>
              <ParagraphBold>동적 코딩이 가능한</ParagraphBold>
              {'입문자'}
            </Paragraph>
          </ParagraphWrapper>
        </Card>
        <Card>
          <Icon src="/images/precamp/four.png" />
          <ParagraphWrapper>
            <Paragraph>
              {'코드캠프에서 '}
              <ParagraphBold>개발자로 커리어전환</ParagraphBold>
            </Paragraph>
            <Paragraph>{'하기에 필요한 지식을 갖춘 입문자'}</Paragraph>
          </ParagraphWrapper>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default AfterCoursePresenter;
