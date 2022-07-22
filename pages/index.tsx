import { format } from 'date-fns'
import Head from 'next/head'
import { BlogGallery } from '../components/BlogGallery'
import { Shell } from '../components/Shell'
import styles from '../styles/Home.module.css'
import { getPosts } from '../utils/getPosts'
const readingTime = require('reading-time')

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts('title,slug,tag,html,published_at');
  const titles = posts.map(post => post.title)
  const rawReadingTimes = posts.map(post => readingTime(post.html))
  const readingTimes = rawReadingTimes.map(readingTime => readingTime.text)
  const slugs = posts.map(post => post.slug)
  const tags = posts.map(post => post.tags[0].name)
  const rawDates = posts.map(post => post.published_at)
  const dates = rawDates.map(date => format(new Date(date), 'dd/MM/yyyy'))
  return {
    props: { titles, readingTimes, slugs, tags, dates }
  }
}

const Home = ({ titles, readingTimes,slugs, tags, dates }) => (
  <div className={styles.container}>
    <Head>
      <title>raulmar</title>
      <meta name="description" content="my online home" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Shell location="home">
      <BlogGallery/>  
    </Shell>
    <div className="text-red-500">{JSON.stringify(titles)}</div>
    <div>{JSON.stringify(readingTimes)}</div>
    <div className='text-red-500'>{JSON.stringify(slugs)}</div>
    <div>{JSON.stringify(tags)}</div>
    <div className='text-red-500'>{JSON.stringify(dates)}</div>
  </div>
)

export default Home