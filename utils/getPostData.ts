import GhostContentAPI from '@tryghost/content-api';
const { CONTENT_API_KEY } = process.env;

export const getPostData = async (slug: string) => {
  const api = new GhostContentAPI({
    url: 'https://ghost.raulmar.com',
    key: CONTENT_API_KEY,
    version: "v5.0"
  });
  const posts = await api.posts.read({slug: slug}, {formats: ['html']});
  return posts;
}