import React from 'react';
import Template from 'src/components/commonComponents/template/Template';
import Main from './main/MainPresenter';
import AfterCourse from './afterCourse/AfterCoursePresenter';
import Detail from './applyDetail/ApplyDetailPresenter';

const PrecampPresenter = () => {
  return (
    <Template>
      <Main />
      <AfterCourse />
      <Detail />
    </Template>
  );
};

export default PrecampPresenter;
