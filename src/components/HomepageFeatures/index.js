import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// Your HomepageFeatures content has been moved here and updated to use the new CSS classes.
const FeatureList = [
  {
    title: 'Physical Red Team Wiki',
    titleLink: '/docs/intro',
    imageLink: '/img/red_team.png',
    description: (
      <>
        Physical Red Team Wiki that covers a large
        number of topics pertaining to physical security.
      </>
    ),
  },
  {
    title: 'Blog',
    titleLink: '/blog',
    imageLink: '/img/blog_new.png',
    description: (
      <>
        Blog covers a wide range of topics regarding security, certifications,
        training, and personal endeavors.
      </>
    ),
  }
];

function Feature({title, description, imageLink, titleLink}) {
  return (
    <div className={clsx(styles.feature, 'col', 'col--6', 'md:col--3')}>
      <div className={styles.featureImageWrapper}>
        <img src={imageLink} alt={title} className={styles.featureImage} />
      </div>
      <div className={styles.featureText}>
        <Heading as="h3" className={styles.featureTitle}>
          <Link to={titleLink}>{title}</Link>
        </Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', 'hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button', 'button--secondary', 'button--lg', styles.button)}
            to="/docs/intro">
            Get Started
          </Link>
          <Link
            className={clsx('button', 'button--secondary', 'button--lg', styles.button)}
            to="/blog">
            Read My Blog
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container text--center">
        <Heading as="h1">Site is a work in progress</Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentBlogPosts() {
  // Example blog post data, you would likely fetch this dynamically in a real app.
  const recentPosts = [
    {
      title: 'My First Blog Post',
      description: 'An introduction to my new Docusaurus site.',
      link: '#', // Placeholder link
    },
    {
      title: 'How to use Tailwind with Docusaurus',
      description: 'A quick guide to integrating Tailwind CSS for flexible styling.',
      link: '#', // Placeholder link
    },
    {
      title: 'Project Showcase: The Docusaurus Homepage',
      description: 'A walkthrough of how I built this custom homepage.',
      link: '#', // Placeholder link
    },
  ];

  return (
    <section className={styles.recentPosts}>
      <div className="container">
        <Heading as="h2" className={styles.recentPostsTitle}>Recent Blog Posts</Heading>
        <div className="row">
          {recentPosts.map((post, idx) => (
            <Link key={idx} to={post.link} className={clsx('col', 'col--4', styles.postCardLink)}>
              <div className={styles.postCard}>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postDescription}>{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Bryan Wendt's personal website and blog built with Docusaurus.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <RecentBlogPosts />
      </main>
    </Layout>
  );
}