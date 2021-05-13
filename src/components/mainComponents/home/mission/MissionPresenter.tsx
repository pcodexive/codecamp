import React from 'react';
import {
  Container,
  LeftWrapper,
  RightWrapper,
  TextContainer,
  ParagraphContainer,
  Title,
  Paragraph,
  ParagraphBold,
  IFrame,
  VideoContainer,
} from './MissionStyles';
const IntroComponent: React.FC = () => {
  return (
    <Container>
      <LeftWrapper>
        <TextContainer>
          <Title>우리의 미션</Title>
          <ParagraphContainer>
            <Paragraph>{`코드캠프는 코딩에 대한 사전지식이 없는 비전공자를
          \n대상으로 3개월간 집중적으로 몰입하여 개발자로
          \n성장할 수 있도록 도와주는 코딩 부트캠프입니다.

          \n실천이 없는 '열정'은 '공상'일 뿐입니다.
          \n개발자로 커리어 전환하는데 필요한 것은 의지와 열정입니다.
          \n
          `}</Paragraph>
            <br />
            <ParagraphBold>{`개발자로 성장해 나가는데 필요한 모든 것을
            \n좋은 동료들과 함께 배워나갈 수 있도록 우리가 책임지겠습니다. `}</ParagraphBold>
          </ParagraphContainer>
        </TextContainer>
      </LeftWrapper>
      <RightWrapper>
        <VideoContainer>
          <IFrame
            src={`https://www.youtube.com/embed/0KSjG2m9j7s?autoplay=1&amp;mute=1`}
            frameBorder="0"
            allow="autoplay;"
            // allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </VideoContainer>
      </RightWrapper>
    </Container>
  );
};

export default IntroComponent;
