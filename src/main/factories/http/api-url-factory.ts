export const makeApiUrl = (path?: string): string =>
  path
    ? `https://conteudos.bloxs.com.br/wp-json/wp/v2/posts?_embed=1&categories=${path}`
    : `https://conteudos.bloxs.com.br/wp-json/wp/v2/posts?_embed=1&categories`;
