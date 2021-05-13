import React, { useContext } from 'react';
import { GlobalContext } from 'src/components/commonComponents/globalProvider/GlobalProvider';
import {
  Container,
  Title,
  CardContainer,
  Card,
  CardCircle,
  CardBox,
  CardTitle,
  CardTextBox,
  ApplyButton,
} from './ApplyDetailStyle';

const ApplyDetailPresenter = () => {
  const {  toggleRegisterForm  } = useContext(GlobalContext);;
  return (
    <Container>
      <Title>모집 세부 내용</Title>
      <CardContainer>
        <Card>
          <CardCircle src="/images/precamp/who.png" />
          <CardBox>
            <CardTitle>대상자</CardTitle>
            <CardTextBox>
              {` 개발자로 커리어점프를
          \n하고 싶은 사람은 누구나`}
            </CardTextBox>
          </CardBox>
        </Card>
        <Card>
          <CardCircle src="/images/precamp/when.png" />
          <CardBox>
            <CardTitle>기간 3개월</CardTitle>
            <CardTextBox>
              {`  월요일 ~ 금요일
          \n09:30 ~ 18:30 + α`}
            </CardTextBox>
          </CardBox>
          <CardTextBox></CardTextBox>
        </Card>
        <Card>
          <CardCircle src="/images/precamp/where.png" />
          <CardBox>
            <CardTitle>NextThey</CardTitle>
            <CardTextBox>
              {`고급스러운 라운지를
              \n 갖춘 공유오피스 제공`}
            </CardTextBox>
          </CardBox>
          <CardTextBox></CardTextBox>
        </Card>
        <Card>
          <CardCircle src="/images/precamp/tuition.png" />
          <CardBox>
            <CardTitle>수강료 770만원</CardTitle>
            <CardTextBox>
              {`※ 자세한 내용은
              \nQ&A 에서 확인 가능`}
            </CardTextBox>
          </CardBox>
          <CardTextBox></CardTextBox>
        </Card>
      </CardContainer>
      <ApplyButton onClick={toggleRegisterForm}>신청하기</ApplyButton>
    </Container>
  );
};

export default ApplyDetailPresenter;
