import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CardComponent from '@site/src/components/Card';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={` ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      <div className="flex-container">
      <CardComponent title="Scientific Basics" text="Learn all you need for scientific writing" link="/scientific/intro"/>
      <CardComponent title="Web Programming" text="Find material for web programming" link="/webprog/intro"/>
      <CardComponent title="Distributed Systems" text="Find material for web programming" link="/distributedsystems/intro"/>
      <CardComponent title="Blog" text="Read the blog" link="/blog"/>
      </div>
      </main>
    </Layout>
  );
}
