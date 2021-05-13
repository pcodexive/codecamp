import React from 'react';
import {
  Container,
  MainBackground,
  H2,
  H5,
  AccordionWrapper,
  AccordionContent,
  Paragraph,
  Title,
} from './MainStyle';
import Accordion from 'src/components/commonComponents/accordion/faqAccordion/FaqAccordionPresenter';
import { IProps } from './MainTypes';
const MainPresenter: React.FC<IProps> = ({ handleIsActive, isActive }) => {
  return (
    <Container>
      <MainBackground>
        <Title>Q&A</Title>
      </MainBackground>
      <H2 fontWeight={600} marginTop={160} marginBottom={80}>
        자주 묻는 질문
      </H2>
      <AccordionWrapper>
        <Accordion
          handleIsActive={handleIsActive}
          number={0}
          title="{코드캠프의 코딩 부트캠프는 무엇인가요?}"
          isActive={isActive[0]}
        >
          <AccordionContent>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16}>
              코딩 경험이 전혀 없는 비전공자도, 개발자로 커리어전환 할 수 있도록 초점을 맞춘 코딩
              부트캠프입니다.
            </H5>
            <Paragraph>{`{code.camp}는 현재를 기준으로 매월3~5개의 프로젝트를 개발하고 있는 개발회사에서 직접 만든 코딩 부트캠프입니다.
현업에서 실제 많은 서비스를 개발하다보니, 주니어 개발자가 필요한 개발지식과 역량을 누구보다 잘 파악하고 있습니다.

현업 전문 개발자들이 함께 모여 실무 위주의 커리큘럼을 구성했고, 실무 내용을 깊게 이해하기 위한 전반적인 IT지식과 개념을 포함했습니다.
저희는 스스로 문제를 해결하며 코드를 작성할 능동적이고 열정적인 수강생을 기다립니다.

{code.camp}의 본질은 단순한 코딩교육이 아닌, 수강생 여러분의 든든한 파트너가 되는 것입니다.`}</Paragraph>
          </AccordionContent>
        </Accordion>
        <Accordion
          handleIsActive={handleIsActive}
          number={1}
          title="{코드캠프의 강점은 무엇인가요?}"
          isActive={isActive[1]}
        >
          <AccordionContent>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16}>
              확실한 커리큘럼
            </H5>
            <Paragraph>{`부트캠프(Bootcamp)는 ‘신병 훈련소’, 확실한 목표와 정신/육체적인 훈련을 거쳐 목표를 이루는 과정을 나타냅니다. 미국 해병대의 부트캠프는
무려 13주의 혹독한 훈련 과정을 통과해야만 해병대로 인정합니다. 이와 같은 부트캠프의 개념은 전통적인 대학 교육에 대한 대안으로 떠오르고, 높은 실무의
전문성과 충분한 초봉 확보에 집중하는 코딩(프로그래밍) 부트캠프로 확산되었습니다.

{code.camp}에서는 주니어 개발자에게 필요한 개발 지식을 최신 기술 스택으로 배울 수 있게 커리큘럼을 구성하였습니다. 
바로 현업에 투입되어 프로젝트의 일부 또는 전체를 맡아 스타트업에서 원하는 개발 가능한 수준으로 성장할 수 있습니다.
`}</Paragraph>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16} marginTop={40}>
              {`{code.camp} Main Course 120% Front-end 개발자 과정`}
            </H5>
            <Paragraph>{`3개월 동안 Front-end와 Back-end, 두 가지 모두 집중적으로 공부하는 것은 비효율적이며 사실상 어렵습니다. {code.camp}는 선택과 집중을 했고, 
백앤드를 구현할 수 있는 프론트앤드 개발자를 목표로 합니다. 

실무적으로 필요한 Front-end 개발지식을 100% 담았습니다. 또한 Back-end가 동작되는 원리를 이해하고 실제로 구현할 수 있도록 
Back-end의 20%를 커리큘럼에 담았습니다. 이렇게 Main Course는 120% Front-end 개발자 과정입니다.

`}</Paragraph>
            <Paragraph
              // fontWeight={300}
              color="#3c448f"
            >{`*Full-Stack 개발자가 되기 위한 Back-end 과정은 {High Course}로 준비중입니다.*`}</Paragraph>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16} marginTop={40}>
              공유오피스 NextThey
            </H5>
            <Paragraph>{`스타트업하면 떠오르는 멋진 사무실 환경입니다. {code.camp}는 프리미엄 공유오피스 NextThey의 전용공간을 사용하고 있습니다. 
부트캠프 기간 동안은 다른데 가지 마세요. 최고의 시설을 24시간 자유롭게 사용하며 공부에 집중할 수 있습니다. 또한 팀별 프로젝트 진행 시, 전용 사무실을 
제공하여 실제 스타트업을 창업 한 기분을 느끼실 수 있습니다. 공용 오픈스페이스, 커피, 릴렉싱룸(안마기기 2대 배치), 주중 조식 서비스(베이커리, 시리얼,
우유, 쨈 등), 샤워장(24시간) 등등, 부대시설 또한 사용 가능합니다. 더불어 다양한 NextThey의 네트워킹 및 소셜 모임도 참여 가능합니다.

`}</Paragraph>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16} marginTop={40}>
              {`커뮤니티로 이어지는 {code.camp}`}
            </H5>
            <Paragraph>{`{code.camp} 졸업생은 커뮤니티를 통해 IT업계 소식, 취업소식, 스터디, 창업 파트너 모집 등 다양한 소셜 이벤트에 참여할 수 있습니다. 
졸업 후에도 소중한 인연을 맺은 동료 개발자와 계속해서 함께 성장할 수 있습니다. {code.camp}는 그런 선한 영향력을 믿습니다.
`}</Paragraph>
          </AccordionContent>
        </Accordion>
        <Accordion
          handleIsActive={handleIsActive}
          number={2}
          title="{졸업하면 어떤 결과를 기대할 수 있나요?}"
          isActive={isActive[2]}
        >
          <AccordionContent>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16}>
              {`{code.camp} 졸업생은 120%의 Front-end 개발자가 될 수 있습니다.`}
            </H5>
            <Paragraph>{`{code.camp}졸업생은 협업 개발자와 함께 프로젝트를 진행할 수 있는 프론트엔드(Front-end) 역량을 가지게 됩니다.
현재 많은 스타트업에서 필요로 하는 코딩 능력 및 알고리즘 이해, 폴더관리 및 네임밍법, 배포를 위한 AWS/GCP 구조, HTTP 통신을 배우게 됩니다. 
또한, UI를 위해 Zeplin, Figma 등의 툴의 보는 법, Git으로 Branch 관리와 Merge 하고 관리하는 법, 프로젝트 매니저(PM), 디자이너 그리고 
다른 개발자와 함께 소통하고 협업하는 법도 직간접적으로 경험하게 됩니다.
`}</Paragraph>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16} marginTop={40}>
              {`개발자로서 자신을 보여줄 수 있는 포트폴리오를 갖게 됩니다.`}
            </H5>
            <Paragraph>{`수강생의 창의적인 아이디어를 발굴하고 적극 반영하며, 실제로 팀 프로젝트에서 개발될 수 있도록 현업 개발자가 지원합니다.
`}</Paragraph>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16} marginTop={40}>
              {`졸업 후에도 함께 성장하며 목표를 공유할 수 있는 {code.camp}만의 커뮤니티 일원이 됩니다.`}
            </H5>
            <Paragraph>{`{code.camp}의 커뮤니티는 더 성장하고 발전해 나갈 것이며, 계속 많은 것을 공유하고 성장할 수 있는 소통공간과 모임을 제공합니다. 바로 취업을
하거나, 꿈꿔왔던 스타트업 창업에 도전하거나, 포트폴리오 쌓는 것에 집중하며 프리랜서로 일하거나 혹은 개발스터디 모임을 통해 더 높은 역량을 목표로
할 수 있습니다.
`}</Paragraph>
          </AccordionContent>
        </Accordion>
        <Accordion
          handleIsActive={handleIsActive}
          number={3}
          title="{취업과 프리랜서 채용은 어떻게 연계되나요?}"
          isActive={isActive[3]}
        >
          <AccordionContent>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16}>
              {`{code.camp}는 졸업생들이 취업할 수 있도록 다양한 서포트를 제공합니다.`}
            </H5>
            <Paragraph>{`취업 플랫폼(원티드와 로켓펀치 등)을 관리하는 방법과 매력적인 이력서를 작성할 수 있도록 도와드리고 있으며, 채용담당자와 모의면접도 진행합니다.
또한 프로젝트를 진행했던 스타트업과 협력을 맺은 IT 기업에 {code.camp} 졸업생의 이력서 전달과 함께 추천해드리고 있습니다.
`}</Paragraph>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16} marginTop={40}>
              {`{code.camp} 졸업생들에게는 프리랜서로 프로젝트를 함께 진행할 기회가 있습니다.`}
            </H5>
            <Paragraph>{`졸업생 일부에게는 진행되고 있는 프로젝트 시기에 맞춰 현직 개발자와 직접 협업해서, 실제 페이를 받으며 프리랜서로 일할 수 있습니다. 
프로젝트 매니저(PM), 기획자, 디자이너, 다른 개발자와 서비스를 개발하며 역량을 더 키워갈 수 있습니다.

`}</Paragraph>
            <Paragraph
              // fontWeight={300}
              color="#3c448f"
            >{`*프로젝트 난이도 및 일정에 따라 기수별로 프리랜서 채용의 인원은 변동될 수 있습니다.`}</Paragraph>
          </AccordionContent>
        </Accordion>
        <Accordion
          handleIsActive={handleIsActive}
          number={4}
          title="{커리큘럼은 어떤 방식으로 진행되나요?}"
          isActive={isActive[4]}
        >
          <AccordionContent>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16}>
              {`총 13주 과정의 Main Course (프리캠프1주, 코드캠프12주)`}
            </H5>
            <Paragraph>{`1. 실습 프로젝트
하루 3~5시간 이론과 원리, 그리고 코딩을 집중적으로 배우게 되는 수업(기술스택 참고)을 진행하며, 나머지 시간에는 개별 학습, 과제, TIL정리를 하게 됩니다. 
주기별로 JavaScript와 알고리즘 테스트가 있습니다.  

2. 개인 프로젝트
하루 2~4시간 수업 후, 실습 프로젝트에서 조금 더 난이도 있는 개발을 합니다.
이 과정에서 수강생은 스스로 문제를 해결하고 고민하며 효율적인 코드를 짜는 법을 배우게 됩니다.

3. 팀 프로젝트
팀별로 협업하여 프로젝트를 진행하며, 개발멘토가 코드리뷰와 리팩토링을 할 수 있도록 팀별로 지도합니다. 팀 프로젝트 진행시, 전용 사무실을 제공하여 
실제 스타트업을 창업 한 기분을 느끼실 수 있습니다.
`}</Paragraph>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16} marginTop={40}>
              {`팀 프로젝트와 팀원은 어떻게 정하나요?`}
            </H5>
            <Paragraph>{`실습 프로젝트와 개인 프로젝트 기간에도 혼자 하지 않도록, 시작부터 함께 할 수 있는 팀을 구성해 드립니다. 
팀 단위로 함께 모르는 것을 풀어가며 코드리뷰를 진행할 수 있게 도와드립니다. 
마지막 팀 프로젝트는 개발하고자 하는 프로젝트를 최대한 반영할 수 있도록 수강생이 별도로 팀원을 모집하고 구성할 수 있도록 하고 있습니다.

`}</Paragraph>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16} marginTop={40}>
              {`기술스택이 바뀔 수 있나요?`}
            </H5>
            <Paragraph>{`코드캠프의 Main 기술스택은 Javascript가 기준입니다.
Javascript가 기반인 Front-end 라이브러리는 React.js와 React.Native를 주력으로 배우게 되고,
Back-end는 Node.js와 프레임워크인 Nest를 주력으로 배우게 됩니다.

하지만, 기술은 발전하고 새로운 언어가 나오고, 더 높은 버전의 기술스택이 등장할 수 있습니다.
{code.camp}는 실무에서 필요한 최신기술을 늘 사용하며 연구합니다.

시대의 흐름에 따라 기술 트렌드에 맞춰 기술스택을 조율하며 최고의 커리큘럼을 만들어 가겠습니다.
`}</Paragraph>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16} marginTop={40}>
              {`커리큘럼 진도가 너무 빠르거나 느릴까 봐 걱정이에요.`}
            </H5>
            <Paragraph>{`{code.camp}의 커리큘럼은 개인 맞춤형입니다. 수강생의 실력에 맞게 커스텀 가능하게 설계 되어 있으며, 
수강생의 속도에 맞춰 도전적이고 확실하게 성장하실 수 있습니다.
`}</Paragraph>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16} marginTop={40}>
              {`12주 동안 커리큘럼을 소화하지 못할까 봐 걱정하지 마세요.`}
            </H5>
            <Paragraph>{`한번 {code.camp} 수강생은 영원한 개발 수강생입니다. 졸업 후에도 {code.camp}에서 멘토들의 도움을 받으면서 커리큘럼을 완전히 소화할 때까지 이끌어
드립니다. 또한 매일 생길 수 있는 질문은 함께 상주하고 있는 멘토에게 언제든 질문할 수 있습니다.
`}</Paragraph>
          </AccordionContent>
        </Accordion>
        <Accordion
          handleIsActive={handleIsActive}
          number={5}
          title="{수강신청은 어떻게 하나요?}"
          isActive={isActive[5]}
        >
          <AccordionContent>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16}>
              {`신청 접수`}
            </H5>
            <Paragraph>{`홈페이지에서 상담신청을 통해 간단한 지원서를 작성해주세요.
`}</Paragraph>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16} marginTop={40}>
              {`코드캠프에서 개별 연락을 드립니다.`}
            </H5>
            <Paragraph>{`1. 코드캠프 방문상담
2. 전화 또는 Zoom으로 화상미팅 일정을 잡을 수 있습니다.

`}</Paragraph>
            <Paragraph
              // fontWeight={300}
              color="#3c448f"
            >{`*방문상담은 코드캠프의 환경을 미리 보며 더 자세한 상담이 가능합니다.*`}</Paragraph>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16} marginTop={40}>
              {`결제 후 지원한 기수 확정 메일 & 문자 받기`}
            </H5>
            <Paragraph>{`수강 확정 메일에 일정 안내를 함께 보내드립니다.
모든 수강생은 시작 전에 {code.camp} 커뮤니티 프로필을 작성합니다.
`}</Paragraph>
          </AccordionContent>
        </Accordion>
        <Accordion
          handleIsActive={handleIsActive}
          number={6}
          title="{수강료와 비용결제는 어떻게 되나요?}"
          isActive={isActive[6]}
        >
          <AccordionContent>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16}>
              {`{code.camp}의 Main Course 수강료는 770만원입니다.`}
            </H5>
            <Paragraph>{`계좌이체 혹은 체크/신용카드 결제 가능합니다. (카드결제+현금 분할 납부 가능)
오프라인 현장 결제 또는 문자/카카오톡으로 결제링크를 보내드립니다. 

`}</Paragraph>
            <Paragraph
              // fontWeight={300}
              color="#3c448f"
            >{`*무이자 할부 : 개별 한도 설정 및 카드 종류에 따라 다를 수 있습니다. 카드사에 직접 문의하시기 바랍니다.*`}</Paragraph>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16} marginTop={40}>
              {`국비 지원을 받을 수 있나요?`}
            </H5>
            <Paragraph>{`{code.camp}는 일반적인 컴퓨터 학원이 아니므로 국비지원은 지원되지 않습니다.
`}</Paragraph>
          </AccordionContent>
        </Accordion>
        <Accordion
          handleIsActive={handleIsActive}
          number={7}
          title="{환불정책은 어떻게 되나요?}"
          isActive={isActive[7]}
        >
          <AccordionContent>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16}>
              {`환불은 어디서 하나요?`}
            </H5>
            <Paragraph>{`- 환불 신청은 학원 방문 또는 이메일로 신청 가능
- 반환 사유 발생일 기준으로 영업일 10일 이내 환불처리

`}</Paragraph>
            <Paragraph color="#3c448f">{`*{code.camp}의 환불 규정은 학원의 설립·운영에 관한 법률 (제18조제3항)을 준수합니다.*`}</Paragraph>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16} marginTop={40}>
              {`{code.camp}의 Main Course 시작 전`}
            </H5>
            <Paragraph>{`금융 수수료와 실비를 제외한 수강료 전액 환불이 가능합니다. (카드사 수수료가 없다면 금융 수수료가 없음)`}</Paragraph>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16} marginTop={40}>
              {`{code.camp}의 Main Course 시작 후`}
            </H5>
            <Paragraph>{`실비 및 금융 수수료를 제외하고 학원의 설립·운영에 관한 법률 (제18조제3항)에 따라 해당하는 금액을 환불이 가능합니다. `}</Paragraph>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16} marginTop={40}>
              {`수강이 시작된 달의 경우`}
            </H5>
            <Paragraph>{`해당 월의 과정 중 1/3이하를 수강한 경우: 해당 월의 수강료 2/3에 해당하는 금액
해당 월의 과정 중 1/2이하를 수강한 경우: 해당 월의 수강료 1/2에 해당하는 금액
해당 월의 과정 중 1/2를 초과하여 수강한 경우: 환불 금액 없음
`}</Paragraph>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16} marginTop={40}>
              {`수강이 시작되지 않은 달의 경우`}
            </H5>
            <Paragraph>{`해달 월의 수강료를 전액 환불이 가능합니다.
`}</Paragraph>
          </AccordionContent>
        </Accordion>
        <Accordion
          handleIsActive={handleIsActive}
          number={8}
          title="{자주 묻는 질문}"
          isActive={isActive[8]}
          noBorderBottom={true}
        >
          <AccordionContent>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16}>
              {`{pre.camp}는 무엇인가요?`}
            </H5>
            <Paragraph>{`{pre.camp}는 무료 오프라인 입문 Course입니다.

인터넷으로 무료강의를 들었더라도 궁금증은 늘 생길 수 있고, 내가 코딩하고 있는 그 순간에 즉각적인 피드백을 받으면서 코딩을 배울 수 있다면 
더 많은 사람이 개발에 흥미를 가지고 쉽게 시작할 수 있을 것으로 생각했습니다.

온라인으로 부족한 부분을 저희가 채워드립니다. 웹앱 서비스를 이해하기 위한 필수적인 IT지식과, HTML, CSS, Javascript 수업을 통해 
추억의 미니홈피 프로젝트를 만들어 보세요. {code.camp} 등록생은 꼭 {pre.camp}과정을 수료해야 합니다.

`}</Paragraph>
            <Paragraph color="#3c448f">{`*등록신청이 마감될 경우 {code.camp} 수강생을 위한 별도의 {pre.camp}가 마련될 수 있습니다.*
            `}</Paragraph>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16} marginTop={40}>
              {`지원 자격은 어떻게 되나요?`}
            </H5>
            <Paragraph>{`{code.camp}는 코딩을 전혀 모르는 분들이 시작할 수 있도록 준비되어 있습니다.

3개월 동안 집중할 수 있는 시간과 도전하고자 하는 의지만 있으면 됩니다.
개발자의 꿈을 가진 분들이나, 개발자로 커리어전환을 하고 싶은 누구나 지원할 수 있습니다.

단, 부트캠프의 취지에 맞게 최소 3개월 동안은 오로지 코딩에 집중하겠다는 집요한 목표의식과 열정이 필요합니다.
`}</Paragraph>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16} marginTop={40}>
              {`{code.camp} 인원은 어느정도 인가요?`}
            </H5>
            <Paragraph>{`오프라인 부트캠프는 소수정예로(20명±) 운영됩니다.
`}</Paragraph>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16} marginTop={40}>
              {`등록 후 시작 전에 어떤 준비를 해야 하나요?`}
            </H5>
            <Paragraph>{`개발 또는 코딩을 한번도 안 하고 오셔도 괜찮습니다. 하지만, {code.camp}에 있는 동안 전념할 수 있도록 모든 일정을 비워두시길 바랍니다. 
개발에 대한 지식보다는 부트캠프 동안 몰두하여 모든 커리큘럼을 120% 내 것으로 만들겠다는 마음가짐이 더 중요합니다.
{code.camp}를 등록한 수강생은 꼭 {pre.camp} 과정을 수료해야 합니다.

`}</Paragraph>
            <Paragraph
              // fontWeight={300}
              color="#3c448f"
            >{`*수강생의 {pre.camp} 일정은 등록 후 안내받을 수 있습니다.*
`}</Paragraph>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16} marginTop={40}>
              {`주말에는 어디에서 작업하나요?`}
            </H5>
            <Paragraph>{`공유오피스 NextThey 공간은 부트캠프 기간 내내 언제나 열려있습니다. 수강생들은 NextThey {code.camp} 전용 출입카드가 발급되기 때문에 
언제든지 최고의 환경에서 모든 시설을 자율적으로 편안하게 이용할 수 있습니다.
`}</Paragraph>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16} marginTop={40}>
              {`부트캠프 중간에 다른 기수로 변경 가능한가요?`}
            </H5>
            <Paragraph>{`부트캠프가 시작되고 중간에는 다른 기수로 이동은 불가합니다. 
단, 부트캠프 시작 전에 다른 기수 이동은 남은 자리에 따라 가능할 수 있습니다.
`}</Paragraph>
            <H5 color="#3c448f" fontWeight={700} marginBottom={16} marginTop={40}>
              {`어떤 노트북이 필요한가요? 권장사항은 무엇인가요?`}
            </H5>
            <Paragraph>{`수강생의 노트북은 필수입니다. 노트북 종류는 상관없습니다. 다만 권장 사양은 아래와 같습니다.
새로 구매하시는 경우 맥북을 추천드리며, 중고를 구매하시는 경우 2015년 이상의 맥북이면 무리없이 개발 가능합니다.

- Window / Mac 
- RAM 16G 이상
- i5 이상
- 64bit 이상

`}</Paragraph>
            <Paragraph
              // fontWeight={300}
              color="#3c448f"
            >{`*코트캠프에서는 실무와 유사한 환경과 교육을 위해 듀얼 모니터, 키보드, 노트북 거치대를 비치하고 있습니다.*`}</Paragraph>
          </AccordionContent>
        </Accordion>
      </AccordionWrapper>
    </Container>
  );
};

export default MainPresenter;
