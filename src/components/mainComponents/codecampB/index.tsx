import React from 'react';
import Template from 'src/components/commonComponents/template/Template';
import Main from './main/MainPresenter';
import Course from './course/CoursePresenter';
const index = () => {
  return (
    <Template>
      <Main />
      <Course />
    </Template>
  );
};

export default index;
