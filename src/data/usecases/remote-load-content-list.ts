import {AccessDeniedError, UnexpectedError} from '../../domain/errors';
import {LoadContentList} from '../../domain/usecases';
import {HttpClient, HttpStatusCode} from '../protocols/http';

export class RemoteLoadContentList implements LoadContentList {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadContentList.Model[]>,
  ) {}

  async loadContent(): Promise<LoadContentList.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    });
    const remoteLoadContent = httpResponse.body || [];
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteLoadContent;

      case HttpStatusCode.noContent:
        return [];
      case HttpStatusCode.forbidden:
        throw new AccessDeniedError();
      default:
        throw new UnexpectedError();
    }
  }
}
