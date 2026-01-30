import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Explore Physical Red Team Wiki
          </Link>
        </div>
      </div>
    </header>
  );
}

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={clsx('container', styles.aboutContainer)}>
        <Heading as="h2" className={styles.aboutTitle}>
          About Me
        </Heading>
        <p className={styles.aboutText}>
          I am a security professional with a passion for physical security and red teaming.
          This site documents my knowledge, projects, and continuous learning journey in the world of security.
          Check out the Wiki for in-depth resources on locks, bypass techniques, and more.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Personal site and Physical Red Team Wiki of Bryan Wendt">
      <HomepageHeader />
      <main>
        <AboutSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
