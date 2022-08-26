/* eslint-disable react/jsx-no-target-blank */
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getAllPosts, getPostBySlug } from '../../utils/Content';
import { markdownToHtml } from '../../utils/Markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params, }) => {
  const post = getPostBySlug(params!.slug, [
    'title',
    'description',
    'date',
    'modified_date',
    'image',
    'content',
    'slug',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      title: post.title,
      date: post.date,
      content,
    },
  };
};

const Post = (props) => {

  const { post } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="An interesting raulmar's posr" />
      </Head>
      <div className='antialiased px-5 md:px-0'>
        <article className="max-w-screen-md mx-auto">
          <Link href='/'>
            <button className="w-max mt-6 mr-2 px-2 py-1 text-base font-bold text-white uppercase transition-colors duration-200 bg-indigo-500 rounded hover:bg-indigo-800">
              <FontAwesomeIcon icon={faAngleLeft} style={{ fontSize: 15, color: "white" }}/>
              <span className='pl-2'>Back to raulmar</span>
            </button>
          </Link>
          <h1 className="post-title">{props.title}</h1>
          <div className="post-container" dangerouslySetInnerHTML={{ __html: props.content }}></div>
        </article>
      </div>
    </>
  )
}

export default Post;