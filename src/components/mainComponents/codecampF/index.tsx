import React from 'react';
import Template from 'src/components/commonComponents/template/Template';
import Main from './main/MainPresenter';
import CurriculumDetail from './curriculumDetail/CurriculumDetailPresenter';
import AfterCourse from './afterCourse/AfterCoursePresenter';
import ApplyDetail from './applyDetail/ApplyDetailPresenter';
const index = () => {
  return (
    <Template>
      <Main />
      <CurriculumDetail />
      <AfterCourse />
      <ApplyDetail />
    </Template>
  );
};

export default index;
