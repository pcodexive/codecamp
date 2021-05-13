import React from 'react';
import { Tab, TabContentWrapper, TabButton } from './CurriculumTabStyle';
import { IProps } from './CurriculumTabTypes';
const CurriculumTab: React.FC<IProps> = ({
  moveToPrecamp,
  moveToCodecampF,
  moveToCodecampB,
  tabType,
}) => {
  return (
    <Tab>
      <TabContentWrapper>
        <TabButton onClick={(e) => moveToPrecamp(e)} isActive={tabType === 'precamp'}>
          pre.camp
        </TabButton>
        <TabButton
          onClick={(e) => moveToCodecampF(e)}
          isActive={tabType === 'codecampf'}
        >{`code.camp {F}`}</TabButton>
        <TabButton
          onClick={(e) => moveToCodecampB(e)}
          isActive={tabType === 'codecampb'}
        >{`code.camp {B}`}</TabButton>
      </TabContentWrapper>
    </Tab>
  );
};

export default CurriculumTab;
