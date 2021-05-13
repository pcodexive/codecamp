import React /* , { useEffect } */ from 'react';
import Template from 'src/components/commonComponents/template/Template';
import Main from './main/MainPresenter';
import Mission from './mission/MissionPresenter';
import LinkImage from './linkImage/LinkImageContainer';
import Term from './term/TermContainer';
import Advantage from './advantage/AdvantagePresenter';
import MentoIntro from './mentoIntro/MentoInroPresenter';
import MobileRegisterButton from './mobileRegisterButton/MobileRegisterButtonPresenter';
import Environment from './environment/EnvironmentPresenter';
import LazyLoad from 'react-lazyload';

const HomeComponent: React.FC = () => {
  // // 모든 페이지의 메인사진을 미리 로딩함(pre-load)
  // useEffect(() => {
  //   const faqImage = new Image()
  //   const curriculumPrecampImage = new Image()
  //   const curriculumCodecampFImage = new Image()
  //   const curriculumCodecampBImage = new Image()
  //   const mapImage = new Image()

  //   faqImage.src = "/images/faq/faqBackground.webp"
  //   curriculumPrecampImage.src = "/images/precamp/precampMainBackground.webp"
  //   curriculumCodecampFImage.src = "/images/precamp/precampMainBackground.webp"
  //   curriculumCodecampBImage.src = "/images/precamp/precampMainBackground.webp"
  //   mapImage.src = "/images/map/background.webp"

  //   faqImage.src = '/images/faq/faqBackgroundM.webp';
  //   curriculumPrecampImage.src = '/images/precamp/precampMainBackgroundM.webp';
  //   curriculumCodecampFImage.src = '/images/precamp/precampMainBackgroundM.webp';
  //   curriculumCodecampBImage.src = '/images/precamp/precampMainBackgroundM.webp';
  //   mapImage.src = '/images/map/backgroundM.webp';
  // }, [])

  return (
    <Template>
      <Main />
      <Mission />
      <LinkImage />
      <LazyLoad height={200}>
        <Term />
      </LazyLoad>
      <LazyLoad height={200}>
        <Advantage />
      </LazyLoad>
      <LazyLoad height={200}>
        <MentoIntro />
      </LazyLoad>
      <LazyLoad height={200}>
        <Environment />
      </LazyLoad>
      <MobileRegisterButton />
    </Template>
  );
};

export default HomeComponent;
