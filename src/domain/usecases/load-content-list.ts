import {ContentModel} from '../models';

export interface LoadContentList {
  loadContent: () => Promise<LoadContentList.RespondeModel[]>;
}

export namespace LoadContentList {
  export type Model = {
    id: string;
    link: string;
    title: {
      rendered: string;
    };
    _embedded: {
      'wp:featuredmedia': [
        {
          media_details: {
            sizes: {
              medium: {
                source_url: string;
              };
            };
          };
        },
      ];
    };
  };
  export type RespondeModel = ContentModel;
}
