import React from 'react';
import { TotalContainer, Title, Division, IFrame } from './MentoIntroStyle';
const MentoInroPresenter = () => {
  return (
    <TotalContainer>
      <Title>멘토소개</Title> <Division src="/images/common/divisionLine.png" alt="no image" />
      <IFrame
        src={`https://www.youtube.com/embed/F9hG9E7jnG0`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </TotalContainer>
  );
};

export default MentoInroPresenter;
