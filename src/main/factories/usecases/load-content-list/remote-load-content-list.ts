import {RemoteLoadContentList} from '../../../../data/usecases/remote-load-content-list';
import {LoadContentList} from '../../../../domain/usecases';
import {makeApiUrl} from '../../http/api-url-factory';
import {makeAxiosHttpClient} from '../../http/axios-http-client-factory';

export const makeRemoteLoadContentList = (): LoadContentList =>
  new RemoteLoadContentList(makeApiUrl(), makeAxiosHttpClient());
