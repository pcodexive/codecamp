import React from 'react';
import {
  FooterContainer,
  FooterContentWrapper,
  FlexColumnWrapper,
  FlexColumnWrapper2,
  FlexColumnWrapper3,
  LogoWithMargin,
  TextSmallGrey,
  TextSmallGreySiteMap,
  TextBoldWhite,
  FlexRowWrapper,
  IconSmall,
  FooterCopyrightWrapper,
} from './FooterStyle';

interface IProps {
  moveToCurriculum: () => Promise<boolean>;
  moveToFaq: () => Promise<boolean>;
}

const FooterPresenter: React.FC<IProps> = ({ moveToCurriculum, moveToFaq }) => {
  return (
    <FooterContainer>
      <FooterContentWrapper>
        <FlexColumnWrapper>
          <LogoWithMargin src="/images/common/logo.png" alt="no image" />
          <TextSmallGrey>상호명:(주)뉴비즈스타트</TextSmallGrey>
          <TextSmallGrey>대표자: 김준영</TextSmallGrey>
          <TextSmallGrey>상담문의: 02-6953-0120</TextSmallGrey>
          <TextSmallGrey>사업자번호: 662-81-01029</TextSmallGrey>
          {/* <TextSmallGrey>학원 등록 번호: 제 00000호</TextSmallGrey> */}
          <TextSmallGrey>서울시 구로구 디지털로31길 12, 태평양물산 빌딩 2층</TextSmallGrey>
        </FlexColumnWrapper>
        <FlexColumnWrapper2>
          <TextBoldWhite>Site Map</TextBoldWhite>
          <TextSmallGreySiteMap onClick={moveToCurriculum}>커리큘럼</TextSmallGreySiteMap>
          <TextSmallGreySiteMap onClick={moveToFaq}>{`Q&A`}</TextSmallGreySiteMap>
          {/* <TextSmallGrey>후기모음</TextSmallGrey> */}
        </FlexColumnWrapper2>
        <FlexColumnWrapper3>
          <TextBoldWhite>Follows up</TextBoldWhite>
          <FlexRowWrapper>
            <a href="https://www.facebook.com/codecampkorea/" target="_blank">  
              <IconSmall src="/images/common/facebook.png" />
            </a>
            <a href="https://www.instagram.com/code.camp_official/" target="_blank">
              <IconSmall src="/images/common/instagram.png" />
            </a>
            <IconSmall src="/images/common/youtube.png" />
          </FlexRowWrapper>
        </FlexColumnWrapper3>
      </FooterContentWrapper>

      <FooterCopyrightWrapper>
        <TextSmallGrey>Copyright © 2021. Newbizstart Co. Ltd.</TextSmallGrey>
      </FooterCopyrightWrapper>
    </FooterContainer>
  );
};

export default FooterPresenter;
