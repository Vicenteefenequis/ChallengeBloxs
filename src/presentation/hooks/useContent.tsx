import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {ContentModel} from '../../domain/models';
import {LoadContentList} from '../../domain/usecases';
import {FilterType} from '../utils/FilterTypeParameter';

type ContentContextProps = {
  children: React.ReactNode;
  content: (path?: string, page?: string) => LoadContentList;
};

type ContentContext = {
  filterSelected: string;
  setFilterSelected: React.Dispatch<React.SetStateAction<string>>;
  contentList: ContentModel[];
  setContentList: React.Dispatch<React.SetStateAction<ContentModel[]>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  loadingMoreContent: boolean;
  handleMoreContent: (page: number, filterSelected: string) => Promise<void>;
};

export const contentContext = createContext<ContentContext>(
  {} as ContentContext,
);

const ContentContext = ({children, content}: ContentContextProps) => {
  const [filterSelected, setFilterSelected] = useState('todos');
  const [contentList, setContentList] = useState<ContentModel[]>([]);
  const [page, setPage] = useState(1);
  const [loadingMoreContent, setLoadingMoreContent] = useState(false);

  const handleMoreContent = useCallback(
    async (page: number, filterSelected: string) => {
      setLoadingMoreContent(true);

      const allContent = await content(
        FilterType.get(filterSelected),
        page.toString(),
      ).loadContent();

      setContentList(old => [...old, ...allContent]);
      setLoadingMoreContent(false);
    },
    [],
  );

  useEffect(() => {
    handleMoreContent(page, filterSelected);
  }, [filterSelected, page]);

  return (
    <contentContext.Provider
      value={{
        filterSelected,
        setFilterSelected,
        contentList,
        setContentList,
        setPage,
        loadingMoreContent,
        handleMoreContent,
      }}>
      {children}
    </contentContext.Provider>
  );
};

export default ContentContext;
export function useContent(): ContentContext {
  const context = useContext(contentContext);
  return context;
}
