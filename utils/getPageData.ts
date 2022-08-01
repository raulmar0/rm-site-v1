import GhostContentAPI from '@tryghost/content-api';
const { CONTENT_API_KEY } = process.env;

export const getPageData = async (slug: string) => {
  const api = new GhostContentAPI({
    url: 'https://ghost.raulmar.com',
    key: CONTENT_API_KEY,
    version: "v5.0"
  });
  const page = await api.pages.read({slug: slug}, {fields: ['title', 'html']});
  api.pages.read({slug: 'something'}, {fields: ['title']});
  return page;
}