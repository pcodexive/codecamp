import React from 'react';
import {
  Container,
  H3,
  H4,
  H5,
  H5_Detail,
  MainImg,
  Title,
  Division,
  ProjectContainer,
  ProjectBoxDivision,
  Icon,
  ProjectBox,
  FlexRow,
} from './CurriculumDetailStyle';
const CurriculumDetailPresenter = () => {
  return (
    <Container>
      <MainImg />
      <Title>상세 커리큘럼</Title>
      <Division src="/images/common/divisionLine.png" />
      <ProjectContainer marginTop={320}>
        <FlexRow height={53} isTitle>
          <H3 fontWeight={700}>실습 프로젝트</H3>
          <H4 marginLeft={20} color="#6b6c73">
            기초다지기/과제/클론코딩
          </H4>
        </FlexRow>
        <ProjectBox>
          <ProjectBoxDivision>
            <H4 fontWeight={700} marginBottom={20}>
              1~2 Week
            </H4>
            <FlexRow>
              <Icon src="/images/codecampF/note.png" />
              <H5 marginLeft={12} fontWeight={700}>
                IT지식과 기술스택에 대한 개념과 전체 내용 파악
              </H5>
            </FlexRow>
            <H5_Detail
              marginLeft={36}
            >{`- HTML, CSS, Javascript 등 기본 문법 개념 이해\n- React의 기본 개념을 배우고 적용과 실습\n- 통신의 기본개념을 배우고 적용하며 실습`}</H5_Detail>
          </ProjectBoxDivision>
          <ProjectBoxDivision>
            <H4 fontWeight={700} marginBottom={20}>
              3~4 Week
            </H4>
            <FlexRow>
              <Icon src="/images/codecampF/note.png" />
              <H5 marginLeft={12} fontWeight={700}>
                올어바웃 게시판 초급 과정 실습 프로젝트
              </H5>
            </FlexRow>
            <H5_Detail
              marginLeft={36}
            >{`- 이미지 저장 및 처리과정의 이해\n- 외부 API에 대한 이해와 연동\n- Back-end 데이터베이스 기초 개념 이해`}</H5_Detail>
          </ProjectBoxDivision>
        </ProjectBox>
      </ProjectContainer>
      <ProjectContainer marginTop={80}>
        <FlexRow height={53} isTitle>
          <H3 fontWeight={700}>개인 프로젝트</H3>
          <H4 marginLeft={20} color="#6b6c73">
            실력 향상 시키기/스스로 문제 해결하기
          </H4>
        </FlexRow>
        <ProjectBox>
          <ProjectBoxDivision>
            <H4 fontWeight={700} marginBottom={20}>
              5~6 Week
            </H4>
            <FlexRow>
              <Icon src="/images/codecampF/note.png" />
              <H5 marginLeft={12} fontWeight={700}>
                올어바웃 게시판 중급 과정 실습 프로젝트
              </H5>
            </FlexRow>
            <H5_Detail
              marginLeft={36}
            >{`- 기능 심화 및 알고리즘 구현\n- 로그인 프로세스에 대한 이해 및 권한처리\n- 결제 프로세스에 대한 이해 및 API 연동`}</H5_Detail>
          </ProjectBoxDivision>
          <ProjectBoxDivision>
            <H4 fontWeight={700} marginBottom={20}>
              7~8 Week
            </H4>
            <FlexRow>
              <Icon src="/images/codecampF/note.png" />
              <H5 marginLeft={12} fontWeight={700}>
                올어바웃 게시판 고급 과정을 개인 프로젝트
              </H5>
            </FlexRow>
            <H5_Detail
              marginLeft={36}
            >{`- 기능 심화 및 알고리즘 구현\n- 웹 배포에 대한 이해 및 실습(클라우드,네트워크,도메인)\n- 모바일 배포 (React.Native 설명 및 웹뷰, apk)`}</H5_Detail>
          </ProjectBoxDivision>
        </ProjectBox>
      </ProjectContainer>
      <ProjectContainer marginTop={80}>
        <FlexRow height={53} isTitle>
          <H3 fontWeight={700}>팀 프로젝트</H3>
          <H4 marginLeft={20} color="#6b6c73">
            프로젝트 진행과 이력서 준비
          </H4>
        </FlexRow>
        <ProjectBox>
          <ProjectBoxDivision>
            <H4 fontWeight={700} marginBottom={20}>
              9~12 Week
            </H4>
            <FlexRow>
              <Icon src="/images/codecampF/note.png" />
              <H5 marginLeft={12} fontWeight={700}>
                {`기획 및 팀 구성과 R&R 진행`}
              </H5>
            </FlexRow>
            <H5_Detail marginLeft={36}>{`- 팀 프로젝트 진행\n- 최종 프로젝트 발표`}</H5_Detail>
          </ProjectBoxDivision>
        </ProjectBox>
      </ProjectContainer>
    </Container>
  );
};

export default CurriculumDetailPresenter;
