import React from 'react';
import ContentContext from '../../../presentation/hooks/useContent';
import Content from '../../../presentation/screen/Content/content';

export const makeContent: React.FC = () => {
  return (
    <ContentContext>
      <Content />
    </ContentContext>
  );
};
