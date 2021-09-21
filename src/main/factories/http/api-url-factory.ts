export const makeApiUrl = (path?: string): string =>
  `https://conteudos.bloxs.com.br/wp-json/wp/v2/posts?_embed=1&categories=${path}`;
