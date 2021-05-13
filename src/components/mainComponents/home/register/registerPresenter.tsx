import { ChangeEvent } from 'react';
import {
  Checkbox,
  CloseButton,
  Header,
  InputWrapper,
  Label,
  Question,
  RadioInput,
  RadioWrapper,
  TermsAgreementWrapper,
  TermsDetail,
  TermsDetailWrapper,
  TextArea,
  TextAreaWrapper,
  TextInput,
  Title,
  Wrapper,
  AgreementLabel,
  RegisterButton,
  BackgroundDisabledWrapper,
  Body,
  Star,
  Table,
  Th,
  Tr,
  Td,
  ShowAgreementDetailButton,
} from './registerStyles';

interface IProps {
  customedPhone: string;
  toggleRegisterForm: () => void;
  onChangeInput: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClickRegisterButton: () => void;
  isOpenAgreementDetail: boolean;
  onClickAgreementDetailButton: () => void;
}

const RegisterPresenter: React.FC<IProps> = ({
  customedPhone,
  toggleRegisterForm,
  onChangeInput,
  onClickRegisterButton,
  isOpenAgreementDetail,
  onClickAgreementDetailButton,
}) => {
  return (
    <BackgroundDisabledWrapper>
      <Wrapper>
        <Header>
          <CloseButton src="/images/common/button_cancel.png" onClick={toggleRegisterForm} />
        </Header>
        <Title>상담 신청서</Title>
        <Body>
          <InputWrapper>
            <Question>
              이름 <Star>*</Star>
            </Question>
            <TextInput
              type="text"
              name="name"
              placeholder="이름을 적어주세요."
              onChange={onChangeInput}
            />
          </InputWrapper>
          <InputWrapper>
            <Question>
              연락처 <Star>*</Star>
            </Question>
            <TextInput
              type="text"
              name="phone"
              placeholder="연락처를 적어주세요."
              onChange={onChangeInput}
              value={customedPhone}
            />
          </InputWrapper>
          <InputWrapper>
            <Question>
              이메일 <Star>*</Star>
            </Question>
            <TextInput
              type="text"
              name="email"
              placeholder="이메일을 적어주세요."
              onChange={onChangeInput}
            />
          </InputWrapper>
          <RadioWrapper>
            <Question>
              희망하는 캠프를 선택해주세요. <Star>*</Star>
            </Question>
            <RadioInput
              type="radio"
              name="hopecamp"
              id="hopecamp-precamp"
              value="프리캠프(무료 오프라인 강좌)"
              onChange={onChangeInput}
            />
            <Label htmlFor="hopecamp-precamp">프리캠프(무료 오프라인 강좌)</Label>
            <br />
            <RadioInput
              type="radio"
              name="hopecamp"
              id="hopecamp-codecamp"
              value="코드캠프(3개월 코딩 부트캠프)"
              onChange={onChangeInput}
            />
            <Label htmlFor="hopecamp-codecamp">코드캠프(3개월 코딩 부트캠프)</Label>
            <br />
          </RadioWrapper>
          <RadioWrapper>
            <Question>코딩에 대한 지식은 어느정도 있나요?</Question>
            <RadioInput
              type="radio"
              name="knowledge"
              id="knowledge-noexperience"
              value="경험이 전혀 없는 비전공자입니다."
              onChange={onChangeInput}
            />
            <Label htmlFor="knowledge-noexperience">경험이 전혀 없는 비전공자입니다.</Label>
            <br />
            <RadioInput
              type="radio"
              name="knowledge"
              id="knowledge-self"
              value="혼자 어느정도 공부했습니다."
              onChange={onChangeInput}
            />
            <Label htmlFor="knowledge-self">혼자 어느정도 공부했습니다.</Label>
            <br />
            <RadioInput
              type="radio"
              name="knowledge"
              id="knowledge-major"
              value="개발 관련 전공자입니다."
              onChange={onChangeInput}
            />
            <Label htmlFor="knowledge-major">개발 관련 전공자입니다.</Label>
            <br />
            <RadioInput
              type="radio"
              name="knowledge"
              id="knowledge-etc"
              value="기타"
              onChange={onChangeInput}
            />
            <Label htmlFor="knowledge-etc">기타</Label>
            <br />
          </RadioWrapper>
          <TextAreaWrapper>
            <Question>원하시는 상담 내용이 무엇인가요?</Question>
            <TextArea
              placeholder="내용을 적어주세요."
              rows={5}
              name="consultation"
              onChange={onChangeInput}
            />
          </TextAreaWrapper>
          <TermsAgreementWrapper>
            <div>
              <Checkbox
                type="checkbox"
                id="isAgreement"
                name="isAgreement"
                onChange={onChangeInput}
              />
              <AgreementLabel htmlFor="isAgreement">개인정보 취급방침에 동의합니다.</AgreementLabel>
              <Star> *</Star>
            </div>
            <ShowAgreementDetailButton onClick={onClickAgreementDetailButton}>
              {!isOpenAgreementDetail ? '약관보기' : '약관접기'}
            </ShowAgreementDetailButton>
          </TermsAgreementWrapper>
          {isOpenAgreementDetail && (
            <TermsDetailWrapper>
              <TermsDetail>
                <b>주식회사 뉴비즈스타트(이하 “회사”)</b>는 개인정보 보호법 제30조에 따라 정보주체의
                개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기
                위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
                <br />
                <br />
                <br />
                <b>
                  제1조 (개인정보의 처리목적) 회사는 다음의 목적을 위하여 개인정보를 처리합니다.
                </b>
                <br />
                <br /> • 부트캠프 수강계약의 체결 및 관리
                <br />
                <br /> • 재화 또는 서비스의 제공
                <br />
                <br /> • 서비스 상담 및 안내
                <br />
                <br /> • 마케팅 활용관리
                <br />
                <br />
                <br />
                <b>제2조 (처리하는 개인정보의 항목 및 보유기간)</b>
                <br />
                <br /> • 회사는 다음의 개인정보 항목을 처리하고 보유기간 동안 보유합니다.
                <br />
                &nbsp;&nbsp;처리 목적
                <br />
                &nbsp;&nbsp;처리하는 개인정보 보유기간
                <br />
                &nbsp;&nbsp;서비스 상담신청
                <br />
                &nbsp;&nbsp;성명, 이메일 주소, 전화번호
                <br />
                &nbsp;&nbsp;상담 및 안내절차 종료시까지
                <br />
                &nbsp;&nbsp;수강 계약의 체결 및 관리
                <br />
                &nbsp;&nbsp;성명, 이메일 주소, 생년월일, 주소, 전화번호
                <br />
                &nbsp;&nbsp;수강 계약 종료시까지
                <br />
                &nbsp;&nbsp;재화 또는 서비스의 제공
                <br />
                &nbsp;&nbsp;성명, 생년월일, 아이디, 비밀번호, 아이핀 번호,
                <br />
                &nbsp;&nbsp;주소, 전화번호, 은행계좌정보/신용카드번호 등 결제정보, 이메일 주소
                <br />
                &nbsp;&nbsp;재화 또는 서비스 공급완료 및 대금 결제·정산 완료시까지
                <br />
                &nbsp;&nbsp;마케팅 활용
                <br />
                &nbsp;&nbsp;성명, 이메일 주소, 전화번호
                <br />
                &nbsp;&nbsp;동의 후 1년
                <br />
                <br /> • 회사의 서비스 이용 과정에서 IP 주소, 쿠키, 서비스 이용 기록, 기기정보,
                위치정보가 생성되어 수집될 수 있습니다.
                <br />
                <br />
                <br />
                <b>
                  제3조(개인정보의 제3자 제공) 회사는 다음과 같이 개인정보를 제3자에게 제공하고
                  있습니다.
                </b>
                <br />
                <br /> • 개인정보를 제공받는 자 : 협업채용 참가 기업
                <br />
                <br /> • 제공받는 자의 개인정보 이용목적 : 채용 프로세스의 보조
                <br />
                <br /> • 제공하는 개인정보 항목 : 이름, 전화번호, 이메일
                <br />
                <br /> • 제공받는자의 보유기간 : 이용목적 달성시까지
                <br />
                <br />
                <br />
                <b>제4조(정보주체의 권리·의무 및 행사방법)</b>
                <br />
                <br />• 정보주체는 회사에 대해 서면, 전자우편 등을 통하여 언제든지 개인정보
                열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
                <br />
                <br /> • 회사는 개인정보의 열람 및 처리정지 요구 시 개인정보보호법 제35조 제4항,
                제37조 제2항에 의하여 이를 제한하거나 거절할 수 있고, 개인정보의 정정 및 삭제는 다른
                법령에서 수집대상으로 명시한 경우에는 요구할 수 없습니다.
                <br />
                <br /> • 정보주체는 회사와의 이용계약을 종료시킴으로써 개인정보 수집 및 이용에 대한
                동의를 철회할 수 있습니다.
                <br />
                <br />
                <br />
                <b>제5조(개인정보의 파기)</b>
                <br />
                <br /> • 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게
                되었을 때에는 지체없이 해당 개인정보를 파기합니다. 다만, 법령에 따라 개인정보를 계속
                보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나
                보관장소를 달리하여 보존합니다.
                <br />
                <br /> • 개인정보 파기의 절차 및 방법은 다음과 같습니다.
                <br />
                <br /> • 파기절차 : 회사 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보
                보호책임자의 승인을 받아 개인정보를 파기합니다.
                <br />
                <br /> • 파기방법 : 전자적 파일 형태로 기록·저장된 개인정보는 기록을 재생할 수
                없도록 파기하며, 종이 문서에 기록·저장된 개인정보는 분쇄기로 분쇄하거나 소각하여
                파기합니다.
                <br />
                <br />
                <br />
                <b>
                  제6조(개인정보의 안전성 확보조치) 회사는 개인정보의 안전성 확보를 위해 다음과 같은
                  조치를 취하고 있습니다.
                </b>
                <br />
                <br /> • 개인정보의 암호화 : 법령에서 암호화를 요구하고 있는 비밀번호, 고유식별정보,
                계좌번호 및 카드번호 외에 이메일 주소와 휴대폰 번호 등을 추가로 암호화 하여 보관하고
                있습니다.
                <br />
                <br /> • 해킹 등에 대한 조치 : 해킹이나 컴퓨터 바이러스 등에 의해 정보주체의
                개인정보가 유출되거나 훼손되는 것을 막기 위해 외부로부터 접근이 통제된 구역에
                시스템을 설치하고 있습니다. 개인정보의 훼손에 대비해서 자료를 수시로 백업하고 있고,
                최신 백신프로그램을 이용하여 정보주체의 개인정보나 자료가 유출되거나 손상되지 않도록
                방지하고 있습니다. 암호화 통신 등을 통하여 네트워크상에서 개인정보를 안전하게
                송수신하고 있습니다.
                <br />
                <br /> • 개인정보 취급자 관리 : 개인정보를 처리하는 직원을 최소한으로 관리하며,
                개인정보처리시스템에서 개인정보의 다운로드가 가능한 직원들의 업무용 PC에 대해 외부
                인터넷망과 내부망을 분리하여 개인정보 유출 가능성을 줄이고 있습니다. 제7조(개인정보
                자동 수집 장치의 설치∙운영 및 거부에 관한 사항) 회사는 정보주체에게 개별적인
                맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠기(cookie)’를
                사용합니다.
                <br />
                <br /> • 쿠키의 사용목적: 정보주체가 방문한 각 서비스와 웹 사이트들에 대한 방문 및
                이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 정보주체에게 최적화된 정보
                제공을 위해 사용됩니다.
                <br />
                <br /> • 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.
                <br />
                <br />
                <br />
                <b>제8조(개인정보 보호책임자)</b>
                <br />
                <br /> • 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와
                관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를
                지정하고 있습니다.
                <br />
                <br />
                <br />
                <img
                  src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/google-medium/25b6-fe0f@2x.png"
                  style={{ width: '12px', height: '12px', marginRight: '5px' }}
                />
                개인정보 보호책임자
                <br />
                <br /> 성명 : 김준영
                <br />
                직책 : 대표이사
                <br />
                연락처 : 010-7277-3591, support@codebootcamp.co.kr
                <br />
                <br />
                <br />
                <img
                  src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/google-medium/25b6-fe0f@2x.png"
                  style={{ width: '12px', height: '12px', marginRight: '5px' }}
                />
                개인정보 보호 담당부서
                <br />
                <br />
                부서명 : 운영팀
                <br />
                담당자 : 안우엽
                <br />
                연락처 : 010-4651-0897, ahnwooyup@codebootcamp.co.kr
                <br />
                <br />
                <br /> • 정보주체는 회사의 서비스를 이용하면서 발생한 모든 개인정보 보호 관련 문의,
                불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다.
                <br />
                <br />
                <br />
                <b>제9조(개인정보 처리방침 적용)</b>
                <br />
                <br /> 이 개인정보 처리방침은 2021. 4. 1. 부터 적용됩니다.
                <br />
                <br />
                <Table>
                  <Th>처리 목적</Th>
                  <Th>처리하는 개인정보</Th>
                  <Th>보유기간</Th>
                  <Tr>
                    <Td style={{ border: '1px' }}>서비스 상담신청</Td>
                    <Td>성명, 이메일 주소, 전화번호</Td>
                    <Td>상담 및 안내절차 종료시까지</Td>
                  </Tr>
                  <Tr>
                    <Td>수강 계약의 체결 및 관리</Td>
                    <Td>성명, 이메일 주소, 생년월일, 주소, 전화번호</Td>
                    <Td>수강 계약 종료시까지</Td>
                  </Tr>
                  <Tr>
                    <Td>재화 또는 서비스의 제공</Td>
                    <Td>
                      성명, 생년월일, 아이디, 비밀번호, 아이핀 번호, 주소, 전화번호,
                      은행계좌정보/신용카드번호 등 결제정보, 이메일 주소
                    </Td>
                    <Td>재화 또는 서비스 공급완료 및 대금 결제·정산 완료시까지</Td>
                  </Tr>
                  <Tr>
                    <Td>마케팅 활용</Td>
                    <Td>성명, 이메일 주소, 전화번호</Td>
                    <Td>동의 후 1년</Td>
                  </Tr>
                </Table>
              </TermsDetail>
            </TermsDetailWrapper>
          )}
          <RegisterButton onClick={onClickRegisterButton}>상담 신청하기</RegisterButton>
        </Body>
      </Wrapper>
    </BackgroundDisabledWrapper>
  );
};

export default RegisterPresenter;
