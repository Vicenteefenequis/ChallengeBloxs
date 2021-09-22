import {AccessDeniedError, UnexpectedError} from '../../domain/errors';
import {LoadCategoryList} from '../../domain/usecases/load-category-list';
import {HttpClient, HttpStatusCode} from '../protocols/http';

export class RemoteLoadCategoryList implements LoadCategoryList {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadCategoryList.Model[]>,
  ) {}

  async loadCategory(): Promise<LoadCategoryList.RespondeModel[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    });

    const remoteLoadContent = httpResponse.body || [];

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteLoadContent.map(content => ({
          id: content.id,
          name: content.name,
        }));

      case HttpStatusCode.noContent:
        return [];
      case HttpStatusCode.forbidden:
        throw new AccessDeniedError();
      default:
        throw new UnexpectedError();
    }
  }
}
