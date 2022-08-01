import Head from 'next/head'
import { ProjectsGallery } from '../components/ProjectsGallery'
import { Shell } from '../components/Shell'
import styles from '../styles/Home.module.css'
import { getPageData } from '../utils/getPageData'

export const getStaticProps = async () => {
  const about = await getPageData('about');
  return {
    props: { about }
  }
}

const About = ({ about }) => (
  <div className={styles.container}>
    <Head>
      <title>About raulmar</title>
      <meta name="description" content="raulmar's description" />
    </Head>
    <Shell location="about">
      <div className='about-page post-container' dangerouslySetInnerHTML={{__html: about.html}}></div>
    </Shell>
  </div>
)

export default About;