import React from 'react';
import { IPrpos } from './AdvantageTypes';
import {
  CardContainer,
  TitleContainer,
  Title,
  Passage,
  BackImage,
  Icon,
  CardInnerWrapper,
} from './AdvantageCardStyle';
const AdvantageCardPresenter: React.FC<IPrpos> = ({ backgroundUrl, iconUrl, passage, title }) => {
  return (
    <CardContainer>
      <CardInnerWrapper>
        <BackImage src={backgroundUrl} />
        <TitleContainer>
          <Icon src={iconUrl} alt="no img" />
          <Title>{title}</Title>
        </TitleContainer>
        <Passage>{passage}</Passage>
      </CardInnerWrapper>
    </CardContainer>
  );
};

export default AdvantageCardPresenter;
