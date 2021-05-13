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
  const {toggleRegisterForm} = useContext(GlobalContext)
  return (
    <Container>
      <Title>모집 세부 내용</Title>
      <CardContainer>
        <Card>
          <CardCircle src="/images/precamp/who.png" />
          <CardBox>
            <CardTitle>대상자</CardTitle>
            <CardTextBox>코딩 입문에 의지를 가진</CardTextBox>
            <CardTextBox>사람은 누구나 신청 가능</CardTextBox>
          </CardBox>
        </Card>
        <Card>
          <CardCircle src="/images/precamp/when.png" />
          <CardBox>
            <CardTitle>기간 1주일</CardTitle>
            <CardTextBox>월요일 ~ 금요일</CardTextBox>
            <CardTextBox>오후 (3시간)</CardTextBox>
          </CardBox>
          <CardTextBox></CardTextBox>
        </Card>
        <Card>
          <CardCircle src="/images/precamp/where.png" />
          <CardBox>
            <CardTitle>NextThey</CardTitle>
            <CardTextBox>고급스러운 라운지를</CardTextBox>
            <CardTextBox>갖춘 공유오피스 제공</CardTextBox>
          </CardBox>
          <CardTextBox></CardTextBox>
        </Card>
        <Card>
          <CardCircle src="/images/precamp/tuition.png" />
          <CardBox>
            <CardTitle>예치금 5만원</CardTitle>
            <CardTextBox>100% 출석 전액 환불</CardTextBox>
            <CardTextBox>※불참 시 하루에 만원씩 차감</CardTextBox>
          </CardBox>
          <CardTextBox></CardTextBox>
        </Card>
      </CardContainer>
      <ApplyButton onClick={toggleRegisterForm}>신청하기</ApplyButton>
    </Container>
  );
};

export default ApplyDetailPresenter;
