import React from 'react';
import {
  Container,
  BackImage,
  Title,
  Division,
  H4,
  H5,
} from './MainStyle';
import CurriculumTab from 'src/components/commonComponents/curriculumTab/CurriculumTabContainer';
import MainPresenterW from './MainPresenterW';
import MainPresenterM from './MainPresenterM';
import { TitleSub } from '../../precamp/main/MainStyle';
import LazyLoad from 'react-lazyload';
const MainPresenter = () => {
  return (
    <Container>
      <BackImage />
      <Title color="white">{`코드캠프는 개발자의 성장을 응원하며,`}</Title>
      <Title color="white">{`친철하고 혁명적인 커리큘럼을 제공합니다.`}</Title>
      <CurriculumTab tabType="codecampf" />
      <TitleSub marginTop={160} fontWeight={600}>
        MAIN COURSE
      </TitleSub>
      <Division src="/images/common/divisionLine.png" alt="no image" />
      <H4 fontWeight={700} marginTop={20}>
        120% Front-End 개발자 Course
      </H4>
      <H4 fontWeight={700} marginTop={20}>
        백앤드를 구현할 수 있는 프론트앤드 개발자를 목표로 합니다.
      </H4>
      <H5
        marginTop={40}
      >{`  개발자가 어떤 마인드로 성장 할 수 있는지 바로 옆에서 배울 수 있습니다.`}</H5>
      <H5
        marginTop={30}
      >{`        문제를 해결하기 위한 과정과 집요함, 협업할 수 있는 소통능력과 경청 스킬,
      \n    성장하려는 목표의식과 노력, 이 모든 것을 함께 경험하고, 보고 배울 수 있습니다.`}</H5>
      <LazyLoad height={200}>
        <MainPresenterW />
        <MainPresenterM />
      </LazyLoad>
    </Container>
  );
};

export default MainPresenter;
