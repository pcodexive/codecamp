import React from 'react';
import {
  Container,
  Background,
  HeaderWrapper,
  HeaderSubWrapper,
  H2,
  H4,
  Line,
  LeftButton,
  RightButton,
  CourseSlidWrapper,
  CourseSlideInnerWrapper,
  Space,
} from './TermStyle';
import { IProps } from './TermTypes';
import CoursePrecampCard from 'src/components/commonComponents/cards/coursePrecampCard/CoursePrecampCard';
import CourseCodecampCard from 'src/components/commonComponents/cards/courseCodecampCard/CourseCodecampCard';

const TermPresenter: React.FC<IProps> = ({
  fetchRegisterPrecamps,
  fetchRegisterCodecamps,
  precampTran,
  codecampTran,
  precampCardRef,
  codecampCardRef,
  handlePrecampTranLeft,
  handlePrecampTranRight,
  handleCodecampTranLeft,
  handleCodecampTranRight,
}) => {
  return (
    <Container>
      <Background />
      <HeaderWrapper>
        <H2>pre.camp</H2>
        <Line src="/images/main/line.png" />
        <LeftButton onClick={handlePrecampTranLeft} src="/images/main/bt_left.png" />
        <RightButton onClick={handlePrecampTranRight} src="images/main/bt_right.png" />
      </HeaderWrapper>
      <HeaderSubWrapper>
        <H4>무료 오프라인 강의 </H4> <H4 fontWeight={1000}>HTML, CSS, Javascript</H4>
      </HeaderSubWrapper>
      <CourseSlidWrapper>
        <CourseSlideInnerWrapper style={{ transform: `translate(${precampTran}px, 0px)` }}>
          {fetchRegisterPrecamps
            ?.sort((a, b) => (a.start < b.start ? -1 : 1))
            .map((data) => (
              <CoursePrecampCard
                month={data.month}
                end={data.end}
                start={data.start}
                isExpired={data.isExpired}
                precampCardRef={precampCardRef}
              />
            ))}
        </CourseSlideInnerWrapper>
      </CourseSlidWrapper>
      <Space />

      <HeaderWrapper>
        <H2>code.camp</H2>
        <Line src="/images/main/line.png" />
        <LeftButton onClick={handleCodecampTranLeft} src="/images/main/bt_left.png" />
        <RightButton onClick={handleCodecampTranRight} src="images/main/bt_right.png" />
      </HeaderWrapper>
      <HeaderSubWrapper>
        <H4>3개월 오프라인 부트캠프 </H4> <H4 fontWeight={1000}>120% Front-End Course</H4>
      </HeaderSubWrapper>
      <CourseSlidWrapper>
        <CourseSlideInnerWrapper style={{ transform: `translate(${codecampTran}px, 0px)` }}>
          {fetchRegisterCodecamps
            ?.sort((a, b) => ((a.stage < b.stage ? -1 : 1)))
            .map((data) => (
              <CourseCodecampCard
                stage={data.stage}
                remaining={data.remaining}
                start={data.start}
                end={data.end}
                isExpired={data.isExpired}
                codecampCardRef={codecampCardRef}
              />
            ))}
        </CourseSlideInnerWrapper>
      </CourseSlidWrapper>
    </Container>
  );
};

export default TermPresenter;
