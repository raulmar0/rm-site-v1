import GhostContentAPI from '@tryghost/content-api';
// const { CONTENT_API_KEY } = process.env;
const CONTENT_API_KEY = '35bd6367810ca3ea073ee2e397'

export const getPosts = async (fields: string) => {
  const api = new GhostContentAPI({
    url: 'https://raulmar.me',
    key: CONTENT_API_KEY,
    version: "v5.0"
  });
  const posts = await api.posts.browse({ limit: 'all', include: 'tags', fields: fields });
  return posts;
}