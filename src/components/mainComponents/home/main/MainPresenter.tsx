import React, { useContext } from 'react';
import { GlobalContext } from 'src/components/commonComponents/globalProvider/GlobalProvider';
import { Background, SloganWrapper, Slogan, SloganBold, ConsultingBtn } from './MainStyle';

const MainComponent: React.FC = () => {
  const {toggleRegisterForm} = useContext(GlobalContext)
  return (
    <>
      <Background>
        <SloganWrapper>
          <Slogan>{'개발회사에서 만든 실무 코딩 부트캠프'}</Slogan>
          <SloganBold>
            개발자로 커리어점프 <Slogan>하다.</Slogan>
          </SloganBold>
        </SloganWrapper>
        <ConsultingBtn onClick={toggleRegisterForm}>상담 신청하기</ConsultingBtn>
      </Background>
    </>
  );
};

export default MainComponent;
