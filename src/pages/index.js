import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import {
  GitHubIcon,
  XIcon,
  DiscordIcon,
  LinkedInIcon,
  ShieldIcon,
  BookOpenIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from '@site/src/components/Icons';

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <Heading as="h1" className={styles.heroTitle}>
          Bryan Wendt
        </Heading>
        <div className={styles.heroTagline}>
          Physical Security &bull; Red Teaming &bull; Technical Research
        </div>
        <p className={styles.heroBio}>
          Welcome to my personal site and technical knowledge base. This platform is organized into
          two core areas: the <strong>Physical Red Team Wiki (PRTW)</strong>, an open, structured
          encyclopedia covering covert methods of entry and hardware security; and the{' '}
          <strong>Security &amp; Tech Blog</strong>, documenting hands-on certification reviews,
          CTF machine walkthroughs, and personal engineering projects.
        </p>

        <div className={styles.socialRow}>
          <Link
            href="https://github.com/bryan-wendt"
            className={styles.socialLink}
            aria-label="GitHub">
            <GitHubIcon size={16} />
            <span>GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/bryan-wendt"
            className={styles.socialLink}
            aria-label="LinkedIn">
            <LinkedInIcon size={16} />
            <span>LinkedIn</span>
          </Link>
          <Link
            href="https://discord.com/users/bw#6573"
            className={styles.socialLink}
            aria-label="Discord">
            <DiscordIcon size={16} />
            <span>Discord</span>
          </Link>
          <Link
            href="https://x.com/bryan_wendt"
            className={styles.socialLink}
            aria-label="X">
            <XIcon size={14} />
            <span>X</span>
          </Link>
          <a
            href="/blog/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="RSS Feed">
            <span className={styles.rssDot} />
            <span>RSS</span>
          </a>

        </div>
      </div>
    </section>
  );
}

function PillarsSection() {
  return (
    <section className={styles.pillarsSection}>
      <div className={styles.pillarsGrid}>
        {/* Pillar 1: Physical Red Team Wiki */}
        <div className={styles.pillarCard}>
          <div className={styles.pillarHeader}>
            <div className={styles.pillarIcon}>
              <ShieldIcon size={20} />
            </div>
            <div>
              <span className={styles.pillarCategory}>Knowledge Base</span>
              <Heading as="h2" className={styles.pillarTitle}>
                Physical Red Team Wiki
              </Heading>
            </div>
          </div>

          <p className={styles.pillarDescription}>
            A centralized reference for physical security assessments, covert methods of
            entry (CMOE), lock identification, and bypass mechanics.
          </p>

          <div className={styles.directoryList}>
            <Link to="/docs/category/identification" className={styles.directoryItem}>
              <span className={styles.directoryName}>Identification</span>
              <span className={styles.directoryMeta}>Keyways, blanks, RFID badges &amp; readers</span>
            </Link>
            <Link to="/docs/category/mechanisms" className={styles.directoryItem}>
              <span className={styles.directoryName}>Mechanisms</span>
              <span className={styles.directoryMeta}>Pin tumbler, wafer, SFIC/LFIC, safe dials</span>
            </Link>
            <Link to="/docs/category/obstacles" className={styles.directoryItem}>
              <span className={styles.directoryName}>Obstacles &amp; Defenses</span>
              <span className={styles.directoryMeta}>Doors, egress bars, electronic strikes, vaults</span>
            </Link>
            <Link to="/docs/category/techniques" className={styles.directoryItem}>
              <span className={styles.directoryName}>Techniques &amp; Exploits</span>
              <span className={styles.directoryMeta}>Picking, bypass tools, key decoding, manipulation</span>
            </Link>
            <Link to="/docs/category/tools" className={styles.directoryItem}>
              <span className={styles.directoryName}>Tools &amp; Equipment</span>
              <span className={styles.directoryMeta}>Picks, Blitz machines, Proxmark3, service keys</span>
            </Link>
            <Link to="/docs/category/resources" className={styles.directoryItem}>
              <span className={styles.directoryName}>Standards &amp; Field Ops</span>
              <span className={styles.directoryMeta}>Pinning matrix, ASIS, IES lighting, travel rules</span>
            </Link>
          </div>

          <div className={styles.pillarAction}>
            <Link to="/docs/intro" className={styles.pillarBtn}>
              <span>Enter Physical Red Team Wiki</span>
              <ArrowRightIcon size={15} />
            </Link>
          </div>
        </div>

        {/* Pillar 2: Security & Tech Blog */}
        <div className={styles.pillarCard}>
          <div className={styles.pillarHeader}>
            <div className={styles.pillarIcon}>
              <BookOpenIcon size={20} />
            </div>
            <div>
              <span className={styles.pillarCategory}>Articles &amp; Labs</span>
              <Heading as="h2" className={styles.pillarTitle}>
                Security &amp; Tech Blog
              </Heading>
            </div>
          </div>

          <p className={styles.pillarDescription}>
            Personal writeups detailing cybersecurity certification retrospectives, hands-on
            vulnerable machine solutions, and practical engineering workflows.
          </p>

          <div className={styles.directoryList}>
            <Link to="/blog/tags/certification" className={styles.directoryItem}>
              <span className={styles.directoryName}>Certification Reviews</span>
              <span className={styles.directoryMeta}>eJPT, Practical Ethical Hacking (PEH), prep notes</span>
            </Link>
            <Link to="/blog/tags/walkthrough" className={styles.directoryItem}>
              <span className={styles.directoryName}>CTF Machine Walkthroughs</span>
              <span className={styles.directoryMeta}>TryHackMe boxes (Pickle Rick, Steel Mountain, Alfred)</span>
            </Link>
            <Link to="/blog/tags/notes" className={styles.directoryItem}>
              <span className={styles.directoryName}>Workflows &amp; Methodologies</span>
              <span className={styles.directoryMeta}>Linux setups, note-taking strategies, and lab tooling</span>
            </Link>
            <Link to="/blog/tags/personal" className={styles.directoryItem}>
              <span className={styles.directoryName}>Personal Updates</span>
              <span className={styles.directoryMeta}>Site redesigns, project logs, and continuous learning</span>
            </Link>
          </div>

          <div className={styles.pillarAction}>
            <Link to="/blog" className={styles.pillarBtn}>
              <span>Browse All Blog Posts</span>
              <ArrowRightIcon size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecentArticlesSection() {
  const articles = [
    {
      date: '2024-09-05',
      title: 'New Blog Site!',
      slug: '/blog/new-blog-site',
      category: 'Updates',
    },
    {
      date: '2020-12-18',
      title: 'TryHackMe - Linux Strength Training - Walkthrough',
      slug: '/blog/linux-strength-training-walkthrough',
      category: 'CTF Walkthrough',
    },
    {
      date: '2020-11-18',
      title: 'eLearnSecurity Junior Penetration Tester (eJPT) Review',
      slug: '/blog/ejpt-blog',
      category: 'Certification',
    },
    {
      date: '2020-11-18',
      title: 'Practical Ethical Hacking (PEH) Course Review',
      slug: '/blog/peh-blog',
      category: 'Course Review',
    },
    {
      date: '2020-11-19',
      title: 'My Note-Taking Journey & Security Documentation',
      slug: '/blog/notetaking-blog',
      category: 'Workflow',
    },
    {
      date: '2020-11-25',
      title: 'TryHackMe - Pickle Rick - Walkthrough',
      slug: '/blog/picklerick-walkthrough',
      category: 'CTF Walkthrough',
    },
  ];

  return (
    <section className={styles.articlesSection}>
      <div className={styles.sectionHeadingRow}>
        <div>
          <Heading as="h2" className={styles.sectionTitle}>
            Selected &amp; Recent Writing
          </Heading>
          <p className={styles.sectionSubtitle}>
            Highlights from the blog spanning certification prep, CTF walkthroughs, and notes.
          </p>
        </div>
        <Link to="/blog" className={styles.viewAllLink}>
          <span>View Archive</span>
          <ArrowRightIcon size={14} />
        </Link>
      </div>

      <div className={styles.articlesList}>
        {articles.map((item, idx) => (
          <Link key={idx} to={item.slug} className={styles.articleRow}>
            <span className={styles.articleDate}>{item.date}</span>
            <span className={styles.articleTitle}>{item.title}</span>
            <span className={styles.articleCategory}>{item.category}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function AboutAndLegalSection() {
  return (
    <section className={styles.aboutLegalSection}>
      <div className={styles.aboutLegalGrid}>
        <div className={styles.aboutBlock}>
          <Heading as="h3" className={styles.aboutLegalTitle}>
            About This Site
          </Heading>
          <p className={styles.aboutLegalText}>
            Physical security and covert entry knowledge is frequently scattered across obscure
            locksmith journals, technical bulletins, and conference archives. This platform was built
            to aggregate verifiable physical security engineering data and personal security writeups
            into a single, structured, easily navigable resource.
          </p>
        </div>

        <div className={styles.legalBlock}>
          <Heading as="h3" className={styles.aboutLegalTitle}>
            Authorized Use Policy
          </Heading>
          <p className={styles.aboutLegalText}>
            All technical documentation and bypass methodologies published here are intended
            strictly for authorized physical penetration testing, security evaluations, and academic
            research. Physical manipulation of lock hardware or access control systems without prior
            explicit written authorization from the property owner is unlawful.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Bryan Wendt | Security Research, Physical Red Team Wiki & Blog"
      description="Personal website, Technical Blog, and Physical Red Team Wiki of Bryan Wendt. Dedicated to physical security research, lock mechanisms, bypass tools, and certification reviews.">
      <main className={styles.mainContainer}>
        <HeroSection />
        <PillarsSection />
        <RecentArticlesSection />
        <AboutAndLegalSection />
      </main>
    </Layout>
  );
}
