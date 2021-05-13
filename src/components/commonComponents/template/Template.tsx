import React from 'react';
import Header from '../header/HeaderContaienr';
import Footer from '../footer/FooterContainer';
import { TotalContainer } from './TemplateStyle';

const Template: React.FC = ({ children }) => {
  return (
    <TotalContainer>
      <Header />
      {children}
      <Footer />
    </TotalContainer>
  );
};

export default Template;
