import React from 'react';
import ContentContext from '../../../presentation/hooks/useContent';
import Content from '../../../presentation/screen/Content/content';
import {makeRemoteLoadCategoryList} from '../usecases/load-category-list/remote-load-category-list';
import {makeRemoteLoadContentList} from '../usecases/load-content-list/remote-load-content-list';

export const makeContent: React.FC = () => {
  return (
    <ContentContext
      content={makeRemoteLoadContentList}
      category={makeRemoteLoadCategoryList()}>
      <Content />
    </ContentContext>
  );
};
