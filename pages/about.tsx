import Head from 'next/head'
import { Shell } from '../components/Shell'
import styles from '../styles/Home.module.css'
import { getMiscBySlug } from '../utils/Content'
import { markdownToHtml } from '../utils/Markdown'

export const getStaticProps = async () => {
  const about = getMiscBySlug('about' , [
    'title',
    'content',
  ]);
  const content = await markdownToHtml(about.content || '');

  return {
    props: {
      title: about.title,
      content,
    },
  };

}

const About = (props) => (
  <div className={styles.container}>
    <Head>
      <title>About raulmar</title>
      <meta name="description" content="raulmar's description" />
    </Head>
    <Shell location="about">
      <div className='about-page post-container' dangerouslySetInnerHTML={{__html: props.content}}></div>
    </Shell>
  </div>
)

export default About;