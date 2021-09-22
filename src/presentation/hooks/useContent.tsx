import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {ContentModel} from '../../domain/models';
import {CategoryModel} from '../../domain/models/category-model';
import {LoadContentList} from '../../domain/usecases';
import {LoadCategoryList} from '../../domain/usecases/load-category-list';

type ContentContextProps = {
  children: React.ReactNode;
  content: (path?: string, page?: string) => LoadContentList;
  category: LoadCategoryList;
};

type ContentContext = {
  filterSelected: string;
  setFilterSelected: React.Dispatch<React.SetStateAction<string>>;
  contentList: ContentModel[];
  setContentList: React.Dispatch<React.SetStateAction<ContentModel[]>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  loadingMoreContent: boolean;
  handleMoreContent: (page: number, filterSelected: string) => Promise<void>;
  categoryList: CategoryModel[];
};

export const contentContext = createContext<ContentContext>(
  {} as ContentContext,
);

const ContentContext = ({children, content, category}: ContentContextProps) => {
  const categoryMap = new Map<any, any>();

  const [filterSelected, setFilterSelected] = useState('Todos');
  const [contentList, setContentList] = useState<ContentModel[]>([]);
  const [page, setPage] = useState(1);
  const [loadingMoreContent, setLoadingMoreContent] = useState(false);
  const [categoryList, setCategoryList] = useState<CategoryModel[]>(
    [] as CategoryModel[],
  );

  const handleMoreContent = useCallback(
    async (page: number, filter: string) => {
      setLoadingMoreContent(true);

      const allContent = await content(
        categoryMap.get(filter),
        page.toString(),
      ).loadContent();

      setContentList(old => [...old, ...allContent]);
      setLoadingMoreContent(false);
    },
    [],
  );

  useEffect(() => {
    handleMoreContent(page, filterSelected);
  }, [page, filterSelected]);

  useEffect(() => {
    category.loadCategory().then(categories => {
      categories.map(ctg => categoryMap.set(ctg.name, ctg.id));
      setCategoryList([{id: 0, name: 'Todos'}, ...categories]);
    });
  }, []);

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
        categoryList,
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
