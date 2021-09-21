export interface LoadContentList {
  loadContent: () => Promise<LoadContentList.Model[]>;
}

export namespace LoadContentList {
  export type Model = {
    id: string;
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
}
