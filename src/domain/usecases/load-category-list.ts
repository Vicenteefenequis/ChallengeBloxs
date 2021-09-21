import {CategoryModel} from '../models/category-model';

export interface LoadCategoryList {
  loadCategory: () => Promise<LoadCategoryList.RespondeModel[]>;
}

export namespace LoadCategoryList {
  export type Model = {
    id: number;
    name: string;
  };
  export type RespondeModel = CategoryModel;
}
