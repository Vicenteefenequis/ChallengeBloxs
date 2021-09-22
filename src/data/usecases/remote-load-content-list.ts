import {AccessDeniedError, UnexpectedError} from '../../domain/errors';
import {LoadContentList} from '../../domain/usecases';
import {HttpClient, HttpStatusCode} from '../protocols/http';

export class RemoteLoadContentList implements LoadContentList {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadContentList.Model[]>,
  ) {}

  async loadContent(): Promise<LoadContentList.RespondeModel[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    });
    const remoteLoadContent = httpResponse.body || [];

    if (!httpResponse?.body) return [];
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteLoadContent.map(content => ({
          photo_url:
            content._embedded['wp:featuredmedia'][0].media_details.sizes.medium
              .source_url,
          title: content.title.rendered,
          link: content.link,
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
