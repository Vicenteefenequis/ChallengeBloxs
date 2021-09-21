export const makeApiUrl = (path?: string, page?: string): string =>
  path
    ? `https://conteudos.bloxs.com.br/wp-json/wp/v2/posts?_embed=1&categories=${path}&per_page=5&page=${page}`
    : `https://conteudos.bloxs.com.br/wp-json/wp/v2/posts?_embed=1&categories&per_page=5&page=${page}`;
