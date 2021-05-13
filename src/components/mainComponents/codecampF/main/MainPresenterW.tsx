import React from 'react';
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
  WrapperWeb,
  CategoryGridContainer,
  StackCategoryTab,
  MainStackTab,
  AlterStackTab,
} from './MainStyle';
const MainPresenterW = () => {
  return (
    <WrapperWeb>
      <CategoryGridContainer>
        <StackCategoryTab>스택 분류</StackCategoryTab>
        <MainStackTab>메인 기술 스택</MainStackTab>
        <AlterStackTab>대체 기술 스택</AlterStackTab>
      </CategoryGridContainer>
      <TableContainer>
        <FlexCoumn>
          <TableName>Front-End 언어</TableName>
          <TableName>Front-End 라이브러리</TableName>
          <TableName>HTTP 통신</TableName>
          <TableName>Back-End 언어</TableName>
          <TableName>Back-End 프레임워크</TableName>
          <TableName>ORM·ODM</TableName>
          <TableName>데이터베이스</TableName>
          <TableName>배포</TableName>
          <TableName>버전관리</TableName>
        </FlexCoumn>
        <FlexCoumn>
          <TableMainstack>
            <Stack src="/images/stack/HTML.png" />
            <Stack src="/images/stack/CSS.png" />
            <Stack src="/images/stack/JavaScript.png" />
            <Stack src="/images/stack/Typescript.png" />
          </TableMainstack>
          <TableMainstack>
            <Stack src="/images/stack/react.js.png" />
            <Stack src="/images/stack/next.js.png" />
          </TableMainstack>
          <TableMainstack>
            <Stack src="/images/stack/apollo-client.png" />
            <Stack src="/images/stack/apollo-server.png" />
            <Stack src="/images/stack/graphql-api.png" />
          </TableMainstack>
          <TableMainstack>
            <Stack src="/images/stack/JavaScript.png" />
            <Stack src="/images/stack/Typescript.png" />
          </TableMainstack>
          <TableMainstack>
          </TableMainstack>
          <TableMainstack>
            <Stack src="/images/stack/Typeorm.png" />
          </TableMainstack>
          <TableMainstack>
            <Stack src="/images/stack/Postgres.png" />
          </TableMainstack>
          <TableMainstack>
            <Stack src="/images/stack/aws.png" />
            <Stack src="/images/stack/GCP.png" />
          </TableMainstack>
          <TableMainstack>
            <Stack src="/images/stack/GitHub.png" />
            <Stack src="/images/stack/Git.png" />
          </TableMainstack>
        </FlexCoumn>
        <FlexCoumn>
          <TableAlterstack></TableAlterstack>
          <TableAlterstack>
            <StackNoShadow src="/images/stack/Angular.js.png" />
            <StackNoShadow src="/images/stack/Vue.js.png" />
            <StackNoShadow src="/images/stack/Nuxt.js.png" />
          </TableAlterstack>
          <TableAlterstack>
            <StackNoShadow src="/images/stack/Axios.png" />
            <StackNoShadow src="/images/stack/Rest-API.png" />
            <StackNoShadow src="/images/stack/Express.png" />
            <StackNoShadow src="/images/stack/Relay.js.png" />
          </TableAlterstack>
          <TableAlterstack>
            <StackNoShadow src="/images/stack/Java.png" />
            <StackNoShadow src="/images/stack/Python.png" />
            <StackNoShadow src="/images/stack/Ruby.png" />
            <StackNoShadow src="/images/stack/Php.png" />
          </TableAlterstack>
          <TableAlterstack>
            <StackNoShadow src="/images/stack/Nest.js.png" />
            <StackNoShadow src="/images/stack/Spring.png" />
            <StackNoShadow src="/images/stack/Django.png" />
            <StackNoShadow src="/images/stack/Laravel.png" />
          </TableAlterstack>
          <TableAlterstack>
            <StackNoShadow src="/images/stack/Mongoose.png" />
            <StackNoShadow src="/images/stack/Sequalize.png" />
            <StackNoShadow src="/images/stack/Prisma.png" />
          </TableAlterstack>
          <TableAlterstack>
            <StackNoShadow src="/images/stack/Mongodb.png" />
            <StackNoShadow src="/images/stack/Mysql.png" />
            <StackNoShadow src="/images/stack/Mariadb.png" />
            <StackNoShadow src="/images/stack/Firebase.png" />
          </TableAlterstack>
          <TableAlterstack>
            <StackNoShadow src="/images/stack/Docker.png" />
            <StackNoShadow src="/images/stack/Kubernetes.png" />
            <StackNoShadow src="/images/stack/Azure.png" />
          </TableAlterstack>
          <TableAlterstack></TableAlterstack>
        </FlexCoumn>
      </TableContainer>
      <StackDescriptionContainer>
        <StackDescriptionWrapper>
          <Description>
            <BoxImg src="/images/precamp/box1.png" alt="box1.png" />
            중심적으로 배우는 스택
          </Description>
          <Description>
            <BoxImg src="/images/precamp/box2.png" alt="box2.png" />
            부가적으로 배우는 스택
          </Description>
          <Description>
            <BoxImg src="/images/precamp/box3.png" alt="box3.png" />
            대체 사용 가능한 스택
          </Description>
        </StackDescriptionWrapper>
      </StackDescriptionContainer>
    </WrapperWeb>
  );
};

export default MainPresenterW;
