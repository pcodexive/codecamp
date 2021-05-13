import React from 'react';
import { H4, H5 } from 'src/common/styles/style';
import {
  Container,
  BackImage,
  Title,
  TitleSub,
  Division,
  FlexRow,
  Card,
  Icon,
  ParagraphWrapper,
  Paragraph,
  BoldText,
} from './MainStyle';
import CurriculumTab from 'src/components/commonComponents/curriculumTab/CurriculumTabContainer';
const MainPresenter = () => {
  return (
    <Container>
      <BackImage />
      <Title color="white">{`코드캠프는 개발자의 성장을 응원하며,`}</Title>
      <Title color="white">{`친철하고 혁명적인 커리큘럼을 제공합니다.`}</Title>
      <CurriculumTab tabType="codecampb" />
      <TitleSub marginTop={160} fontWeight={600}>
        HIGH COURSE
      </TitleSub>
      <Division src="/images/common/divisionLine.png" alt="no image" />
      <H4 fontWeight={700} marginTop={20}>
        {`      Back-end 개발자 Course\nFull-Stack 개발자를 목표로 합니다.`}
      </H4>
      <H5
        marginTop={40}
      >{`데이터베이스 설계를 하며 프로젝트를 전체를 개발할 수 있습니다.
\n프로젝트 개발의 모든 과정을 이해하기 때문에 IT기업에서 원하는 최적의 개발자가 됩니다.`}</H5>
      <FlexRow>
        <Card>
          <Icon src="/images/codecampB/cap.png" />
          <ParagraphWrapper>
            <Paragraph>
              <BoldText>Main Course 졸업생</BoldText>만
            </Paragraph>
            <Paragraph>수강 등록이 가능합니다.</Paragraph>
          </ParagraphWrapper>
        </Card>
        <Card>
          <Icon src="/images/codecampB/payment.png" />
          <ParagraphWrapper>
            <Paragraph>{`취업 후 수업료를 상환하는`}</Paragraph>
            <Paragraph>
              <BoldText>{`{소득공유 후불제}`}</BoldText>로 신청 가능합니다.
            </Paragraph>
          </ParagraphWrapper>
        </Card>
      </FlexRow>
    </Container>
  );
};

export default MainPresenter;
