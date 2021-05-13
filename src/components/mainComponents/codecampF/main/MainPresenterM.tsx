import React, { useState } from 'react';
import {
  FlexCoumn,
  TableContainer,
  TableName,
  TableMainstack,
  TableAlterstack,
  Stack,
  StackNoShadow,
  StackDescriptionContainer,
  StackDescriptionWrapper,
  Description,
  BoxImg,
  WrapperMobile,
  FlexWrapper,
  StackSwitchWrapper,
  StackSwitch,
  SwitchBall,
} from './MainStyle';
const MainPresenterM = () => {
  const [isMain, setIsMain] = useState(true)
  return (
    <WrapperMobile>
      <StackSwitchWrapper>
        기술스택보기
        <StackSwitch isMain={isMain} onClick={() => setIsMain((prev) => !prev)}>
          {isMain ? '메인' : '대체'}
        </StackSwitch>
        <SwitchBall isMain={isMain} onClick={() => setIsMain((prev) => !prev)} />
      </StackSwitchWrapper>
      <TableContainer>
        {isMain && (
          <FlexCoumn>
            <FlexWrapper>
              <TableName>Front-End 언어</TableName>
              <TableMainstack>
                <Stack src="/images/stack/HTML.png" />
                <Stack src="/images/stack/CSS.png" />
                <Stack src="/images/stack/JavaScript.png" />
                <Stack src="/images/stack/Typescript.png" />
              </TableMainstack>
            </FlexWrapper>
            <FlexWrapper>
              <TableName>Front-End 라이브러리</TableName>
              <TableMainstack>
                <Stack src="/images/stack/react.js.png" />
                <Stack src="/images/stack/next.js.png" />
              </TableMainstack>
            </FlexWrapper>
            <FlexWrapper>
              <TableName>HTTP 통신</TableName>
              <TableMainstack>
                <Stack src="/images/stack/apollo-client.png" />
                <Stack src="/images/stack/apollo-server.png" />
                <Stack src="/images/stack/graphql-api.png" />
              </TableMainstack>
            </FlexWrapper>
            <FlexWrapper>
              <TableName>Back-End 언어</TableName>
              <TableMainstack>
                <Stack src="/images/stack/JavaScript.png" />
                <Stack src="/images/stack/Typescript.png" />
              </TableMainstack>
            </FlexWrapper>
            <FlexWrapper>
              <TableName>Back-End 프레임워크</TableName>
              <TableMainstack isBlank>-</TableMainstack>
            </FlexWrapper>
            <FlexWrapper>
              <TableName>ORM·ODM</TableName>
              <TableMainstack>
                <Stack src="/images/stack/Typeorm.png" />
              </TableMainstack>
            </FlexWrapper>
            <FlexWrapper>
              <TableName>데이터베이스</TableName>
              <TableMainstack>
                <Stack src="/images/stack/Postgres.png" />
              </TableMainstack>
            </FlexWrapper>
            <FlexWrapper>
              <TableName>배포</TableName>
              <TableMainstack>
                <Stack src="/images/stack/aws.png" />
                <Stack src="/images/stack/GCP.png" />
              </TableMainstack>
            </FlexWrapper>
            <FlexWrapper>
              <TableName>버전관리</TableName>
              <TableMainstack>
                <Stack src="/images/stack/GitHub.png" />
                <Stack src="/images/stack/Git.png" />
              </TableMainstack>
            </FlexWrapper>
          </FlexCoumn>
        )}
        {!isMain && (
          <FlexCoumn>
            <FlexWrapper>
              <TableName>Front-End 언어</TableName>
              <TableAlterstack isBlank>-</TableAlterstack>
            </FlexWrapper>
            <FlexWrapper>
              <TableName>Front-End 라이브러리</TableName>
              <TableAlterstack>
                <StackNoShadow src="/images/stack/Angular.js.png" />
                <StackNoShadow src="/images/stack/Vue.js.png" />
                <StackNoShadow src="/images/stack/Nuxt.js.png" />
              </TableAlterstack>
            </FlexWrapper>
            <FlexWrapper>
              <TableName>HTTP 통신</TableName>
              <TableAlterstack>
                <StackNoShadow src="/images/stack/Axios.png" />
                <StackNoShadow src="/images/stack/Rest-API.png" />
                <StackNoShadow src="/images/stack/Express.png" />
                <StackNoShadow src="/images/stack/Relay.js.png" />
              </TableAlterstack>
            </FlexWrapper>
            <FlexWrapper>
              <TableName>Back-End 언어</TableName>
              <TableAlterstack>
                <StackNoShadow src="/images/stack/Java.png" />
                <StackNoShadow src="/images/stack/Python.png" />
                <StackNoShadow src="/images/stack/Ruby.png" />
                <StackNoShadow src="/images/stack/Php.png" />
              </TableAlterstack>
            </FlexWrapper>
            <FlexWrapper>
              <TableName>Back-End 프레임워크</TableName>
              <TableAlterstack>
                <StackNoShadow src="/images/stack/Nest.js.png" />
                <StackNoShadow src="/images/stack/Spring.png" />
                <StackNoShadow src="/images/stack/Django.png" />
                <StackNoShadow src="/images/stack/Laravel.png" />
              </TableAlterstack>
            </FlexWrapper>
            <FlexWrapper>
              <TableName>ORM·ODM</TableName>
              <TableAlterstack>
                <StackNoShadow src="/images/stack/Mongoose.png" />
                <StackNoShadow src="/images/stack/Sequalize.png" />
                <StackNoShadow src="/images/stack/Prisma.png" />
              </TableAlterstack>
            </FlexWrapper>
            <FlexWrapper>
              <TableName>데이터베이스</TableName>
              <TableAlterstack>
                <StackNoShadow src="/images/stack/Mongodb.png" />
                <StackNoShadow src="/images/stack/Mysql.png" />
                <StackNoShadow src="/images/stack/Mariadb.png" />
                <StackNoShadow src="/images/stack/Firebase.png" />
              </TableAlterstack>
            </FlexWrapper>
            <FlexWrapper>
              <TableName>배포</TableName>
              <TableAlterstack>
                <StackNoShadow src="/images/stack/Docker.png" />
                <StackNoShadow src="/images/stack/Kubernetes.png" />
                <StackNoShadow src="/images/stack/Azure.png" />
              </TableAlterstack>
            </FlexWrapper>
            <FlexWrapper>
              <TableName>버전관리</TableName>
              <TableAlterstack isBlank>-</TableAlterstack>
            </FlexWrapper>
          </FlexCoumn>
        )}
      </TableContainer>
      <StackDescriptionContainer>
        <StackDescriptionWrapper>
          <Description>
            <BoxImg src="/images/precamp/box1.png" />
            중심적으로 배우는 스택
          </Description>
          <Description>
            <BoxImg src="/images/precamp/box2.png" />
            부가 스택
          </Description>
          <Description>
            <BoxImg src="/images/precamp/box3.png" />
            대체 스택
          </Description>
        </StackDescriptionWrapper>
      </StackDescriptionContainer>
    </WrapperMobile>
  );
};

export default MainPresenterM;
