import React from 'react';
import {
  Container,
  Wrapper,
  LeftWrapper,
  TextWrapper,
  Text,
  TextLarge,
  TextBold,
  RightWrapper,
  Space,
} from './LinkImageStyle';
import { IProps } from './LinkImageTypes';
const LinkImagePresenter: React.FC<IProps> = ({
  isMouseOver1,
  isMouseOver2,
  handleMouseEnter1,
  handleMouserLeave1,
  handleMouseEnter2,
  handleMouseLeave2,
  moveToPrecamp,
  moveToCodecamp,
}) => {
  return (
    <Container>
      <Wrapper>
        <LeftWrapper
          onClick={(e) => moveToPrecamp(e)}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouserLeave1}
        >
          {!isMouseOver1 && (
            <TextWrapper>
              <Text>개발은 하고 싶은데 시작이 어려운</Text>
              <Space />
              <TextBold>왕초보 비전공자라면?</TextBold>
            </TextWrapper>
          )}
          {isMouseOver1 && (
            <TextWrapper>
              <TextLarge>+</TextLarge>
              <Space />
              <TextBold>PRE.CAMP</TextBold>
              <Text>커리큘럼 보러가기</Text>
            </TextWrapper>
          )}
        </LeftWrapper>
        <RightWrapper
          onClick={(e) => moveToCodecamp(e)}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          {!isMouseOver2 && (
            <TextWrapper>
              <Text>개발자로 커리어를 시작하기 위해</Text>
              <Space />
              <TextBold>부트캠프를 알아보고 있다면?</TextBold>
            </TextWrapper>
          )}
          {isMouseOver2 && (
            <TextWrapper>
              <TextLarge>+</TextLarge>
              <Space />
              <TextBold>PRE.CAMP</TextBold>
              <Text>커리큘럼 보러가기</Text>
            </TextWrapper>
          )}
        </RightWrapper>
      </Wrapper>
    </Container>
  );
};

export default LinkImagePresenter;
