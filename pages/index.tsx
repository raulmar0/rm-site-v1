import Head from 'next/head'
import { BlogGallery } from '../components/BlogGallery'
import { Shell } from '../components/Shell'
import styles from '../styles/Home.module.css'
import { getAllPosts } from '../utils/Content'

export const getStaticProps = async ({ params }) => {

  const posts = await getAllPosts(['title', 'slug', 'date', 'content', 'tags']);

  return {
    props: { posts }
  }
}

const Home = ({ posts }) => (
  <div className={styles.container}>
    <Head>
      <title>Raulmar</title>
      <meta name="description" content="my online home" />
      <link rel="icon" href="/ocean.ico" />
    </Head>
    <Shell location="home">
      <BlogGallery posts={posts}/>  
    </Shell>
  </div>
)

export default Home