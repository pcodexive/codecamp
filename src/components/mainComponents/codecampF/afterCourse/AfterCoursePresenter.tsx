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
      <Title>{`     코드캠프를 마치면
      \n이런 IT 개발자가 됩니다.`}</Title>
      <Division src="/images/common/divisionLine.png" alt="no image" />
      <CardContainer>
        <Card>
          <Icon src="/images/precamp/one.png" />
          <ParagraphWrapper>
            <Paragraph>
              <ParagraphBold>최신 기술스택</ParagraphBold>
              {'으로 '}
              <ParagraphBold>Front-end</ParagraphBold>에
            </Paragraph>
            <Paragraph>{'집중적인 개발 실력을 가진 개발자'}</Paragraph>
          </ParagraphWrapper>
        </Card>
        <Card>
          <Icon src="/images/precamp/two.png" />
          <ParagraphWrapper>
            <Paragraph>
              <ParagraphBold>Back-end</ParagraphBold>
              {'에 대한 이해와'}
            </Paragraph>
            <Paragraph>{'기본적인 개발 지식이 있는 개발자'}</Paragraph>
          </ParagraphWrapper>
        </Card>
        <Card>
          <Icon src="/images/precamp/three.png" />
          <ParagraphWrapper>
            <Paragraph>
              <ParagraphBold>자기주도적</ParagraphBold>
              {'으로 문제를 해결하고'}
            </Paragraph>
            <Paragraph>
              {'개발을'} <ParagraphBold>고도화</ParagraphBold> {' 할 수 있는 개발자'}
            </Paragraph>
          </ParagraphWrapper>
        </Card>
        <Card>
          <Icon src="/images/precamp/four.png" />
          <ParagraphWrapper>
            <Paragraph>
              {'팀으로 '}
              <ParagraphBold>협업</ParagraphBold>
              {'하고 '}
              <ParagraphBold>소통</ParagraphBold>
              {'을 잘하는'}
            </Paragraph>
            <Paragraph>{'IT회사들이 필요로 하는 개발자'}</Paragraph>
          </ParagraphWrapper>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default AfterCoursePresenter;
