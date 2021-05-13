import React from 'react';
import { TotalContainer, BlackBackground, Title, Division, CardContainer } from './AdvantageStyle';
import AdvantageCardPresenter from 'src/components/commonComponents/cards/advantageCard/AdvantageCardPresenter';
const AdvantagePresenter = () => {
  return (
    <TotalContainer>
      <BlackBackground />
      <Title>코드캠프 강점</Title>
      <Division src="/images/common/divisionLine.png" alt="no image" />
      <CardContainer>
        <AdvantageCardPresenter
          backgroundUrl="/images/main/advantageCard1.webp"
          iconUrl="/images/main/hand.png"
          title="프리랜서 채용"
          passage={`졸업 후 프리랜서로 현업 개발자와
                  \n함께 프로젝트에 참여해서 실제 페이를
                  \n받으며 추가적인 포트폴리오를 쌓을 수 
                  \n있습니다. 더 많은 경험을 위해
                  \n프리랜서로 일정 기간 일을 할 수 있는
                  \n기회를 제공합니다.`}
        />
        <AdvantageCardPresenter
          backgroundUrl="/images/main/advantageCard2.webp"
          iconUrl="/images/main/earth.png"
          title="맞춤형 커리큘럼"
          passage={`메인 커리큘럼 외에도 수강생의 학습
                  \n속도에 맞는 추가 과제가 준비되어
                  \n있습니다. 또한, 알고리즘 코딩
                  \n테스트를 주기적으로 실시하여
                  \n고도화된 기능을 코딩할 수 있도록
                  \n바로 옆에서 지원 해드립니다.`}
        />
        <AdvantageCardPresenter
          backgroundUrl="/images/main/advantageCard3.webp"
          iconUrl="/images/main/paper.png"
          title="이력서 및 모의면접"
          passage={`개인의 장점을 잘 보여줄 수 있는
                  \n이력서를 작성할 수 있도록 피드백을
                  \n통해 관리 해드립니다. 협력사와 제휴를
                  \n통해 취업 연계를 적극 지원하고, 많은
                  \n합격 사례를 공유하며 취업할 수 있는
                  \n모멘텀을 만들어 드립니다.`}
        />
      </CardContainer>
    </TotalContainer>
  );
};

export default AdvantagePresenter;
