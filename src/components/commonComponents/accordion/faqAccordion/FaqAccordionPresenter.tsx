import React from 'react';
import { IProps } from './FaqAccordionTypes';
import {
  Container,
  Icon,
  AccordionTitle,
  FlexRow,
  ArrowIcon,
  ParagraphWrapper,
} from './FaqAccordionStyle';

const FaqAccordionPresenter: React.FC<IProps> = ({
  children,
  isActive,
  noBorderBottom,
  title,
  number,
  handleIsActive,
}) => {
  return (
    <Container noBorderBottom={noBorderBottom}>
      <FlexRow onClick={() => handleIsActive(number)}>
        <Icon src="/images/faq/Q.png" />
        <AccordionTitle>{title}</AccordionTitle>
        {isActive && (
          <ArrowIcon src="/images/faq/arrowUp.png" />
        )}
        {!isActive && (
          <ArrowIcon src="/images/faq/arrowDown.png" />
        )}
      </FlexRow>
      <ParagraphWrapper isDisplay={isActive}>{children}</ParagraphWrapper>
    </Container>
  );
};

export default FaqAccordionPresenter;
