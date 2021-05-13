import React from 'react';
import {
  Container,
  BackImage,
  Title,
  TitleSub,
  Division,
  H4,
  H5,
  Step,
  StepDescriptionContainer,
  StepDescription,
  StepM,
} from './MainStyle';
import CurriculumTab from 'src/components/commonComponents/curriculumTab/CurriculumTabContainer';
const MainPresenter = () => {
  return (
    <Container>
      <BackImage />
      <Title color="white">{`코드캠프는 개발자의 성장을 응원하며,`}</Title>
      <Title color="white">{`친철하고 혁명적인 커리큘럼을 제공합니다.`}</Title>
      <CurriculumTab tabType="precamp" />
      <TitleSub marginTop={160} fontWeight={600}>
        무료 오프라인 강의
      </TitleSub>
      <Division src="/images/common/divisionLine.png" alt="no image" />
      <H5 marginTop={40}>{`          온라인 강의로 시작하기 어려웠던 개발을
      \n무료 오프라인 강의를 통해 재미있게 할 수 있습니다.`}</H5>
      <H4 fontWeight={700} marginTop={20}>
        개발멘토와 함께 하는 프리캠프에 참여하세요!
      </H4>
      <Step src="/images/precamp/step.png" />
      <StepDescriptionContainer>
        <StepM src="/images/precamp/mobile/step1.png" />
        <StepDescription>
          <H4 fontWeight={600}>웹구조 지식</H4>{' '}
          <H5 marginTop={20}>{`웹서비스의 동작과 원리를 이해하고,
          \n기초 IT지식에 대한 이론을 배웁니다.`}</H5>
        </StepDescription>
        <StepM src="/images/precamp/mobile/step2.png" />
        <StepDescription>
          <H4 fontWeight={600}>HTML/CSS/JavaScript</H4>{' '}
          <H5 marginTop={20}>{`웹페이지의 뼈대인 HTML과 꾸밈 담당 CSS,
          \n동적 요소를 구현하는 JS의 이론을 배웁니다.`}</H5>
        </StepDescription>
        <StepM src="/images/precamp/mobile/step3.png" />
        <StepDescription>
          <H4 fontWeight={600}>미니 프로젝트 진행</H4>{' '}
          <H5 marginTop={20}>{`미니 프로젝트인 추억의 미니홈피 제작을
          \n   통해 실제로 배운 내용을 실습합니다.`}</H5>
        </StepDescription>
      </StepDescriptionContainer>
    </Container>
  );
};

export default MainPresenter;
