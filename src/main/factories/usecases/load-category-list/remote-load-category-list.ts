import {RemoteLoadCategoryList} from '../../../../data/usecases/remote-load-category-list';
import {LoadCategoryList} from '../../../../domain/usecases/load-category-list';
import {makeApiCategories} from '../../http/api-url-factory';
import {makeAxiosHttpClient} from '../../http/axios-http-client-factory';

export const makeRemoteLoadCategoryList = (): LoadCategoryList =>
  new RemoteLoadCategoryList(makeApiCategories(), makeAxiosHttpClient());
