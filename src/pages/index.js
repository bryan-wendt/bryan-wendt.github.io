import React from 'react';
import clsx from 'clsx';
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
  DoorIcon,
  ToolIcon,
  KeyIcon,
  FileTextIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from '@site/src/components/Icons';

function HeroHeader() {
  return (
    <header className={styles.heroWrapper}>
      <div className={styles.heroAura} />
      <div className={styles.heroContent}>
        <div className={styles.badgePill}>
          <span>Physical Security • Red Teaming • Research</span>
        </div>
        
        <Heading as="h1" className={styles.heroTitle}>
          Bryan Wendt
        </Heading>
        
        <div className={styles.heroRole}>
          Security Professional & Physical Red Teamer
        </div>
        
        <p className={styles.heroSubtitle}>
          Welcome to my personal site and knowledge base. Here I document deep dives into 
          physical security mechanisms, bypass methodologies, hardware tooling, cybersecurity 
          certifications, and hands-on walkthroughs.
        </p>

        <div className={styles.heroButtons}>
          <Link
            className={styles.primaryBtn}
            to="/docs/intro">
            <span>Explore Physical Wiki</span>
            <ArrowRightIcon size={16} />
          </Link>
          <Link
            className={styles.secondaryBtn}
            to="/blog">
            <span>Read Blog & Writeups</span>
          </Link>
          <Link
            className={styles.secondaryBtn}
            href="https://github.com/bryan-wendt">
            <span>GitHub Profile</span>
            <ArrowUpRightIcon size={15} />
          </Link>
        </div>

        <div className={styles.tagsRow}>
          <span className={styles.tagPill}>Lock Picking & Bypass</span>
          <span className={styles.tagPill}>Obstacles & Barriers</span>
          <span className={styles.tagPill}>Certification Reviews</span>
          <span className={styles.tagPill}>Linux & Tooling</span>
          <span className={styles.tagPill}>Always Learning</span>
        </div>
      </div>
    </header>
  );
}

function PillarsSection() {
  return (
    <section className={styles.pillarsSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>Core Knowledge Bases</span>
        <Heading as="h2" className={styles.sectionTitle}>
          Explore the Work
        </Heading>
        <p className={styles.sectionSubtitle}>
          Dedicated resources built to organize practical physical security knowledge and technical security writeups.
        </p>
      </div>

      <div className={styles.pillarsGrid}>
        {/* Pillar 1: Physical Red Team Wiki */}
        <div className={styles.pillarCard}>
          <div>
            <div className={styles.pillarHeader}>
              <div className={styles.pillarIconBox}>
                <ShieldIcon size={24} />
              </div>
              <span className={styles.pillarBadge}>Open Wiki</span>
            </div>

            <Heading as="h3" className={styles.pillarTitle}>
              Physical Red Team Wiki
            </Heading>
            <p className={styles.pillarDesc}>
              A centralized repository for physical security topics. Covers locks, bypass techniques, 
              hardware tools, electronic access systems, and real-world engagement obstacles.
            </p>

            <ul className={styles.pillarList}>
              <li className={styles.pillarListItem}>
                <span className={styles.itemBullet} />
                <span><strong>Bypass Techniques:</strong> Latch slips, under-door tools, REX sensor triggers, and shimming methods.</span>
              </li>
              <li className={styles.pillarListItem}>
                <span className={styles.itemBullet} />
                <span><strong>Obstacles & Barriers:</strong> Turnstiles, fences, crash bars, electronic strikes, and perimeter controls.</span>
              </li>
              <li className={styles.pillarListItem}>
                <span className={styles.itemBullet} />
                <span><strong>Tools & Equipment:</strong> Lock picks, bypass keys, decoders, and field-tested bypass gear.</span>
              </li>
            </ul>
          </div>

          <div className={styles.pillarFooter}>
            <Link to="/docs/intro" className={styles.cardCta}>
              <span>Enter Physical Red Team Wiki</span>
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>

        {/* Pillar 2: Technical Blog */}
        <div className={styles.pillarCard}>
          <div>
            <div className={styles.pillarHeader}>
              <div className={styles.pillarIconBox}>
                <BookOpenIcon size={24} />
              </div>
              <span className={styles.pillarBadge}>Articles & Labs</span>
            </div>

            <Heading as="h3" className={styles.pillarTitle}>
              Security & Tech Blog
            </Heading>
            <p className={styles.pillarDesc}>
              In-depth articles detailing cybersecurity certifications, hands-on CTF walkthroughs, 
              custom scripts, tool breakdowns, and reflections from continuous learning.
            </p>

            <ul className={styles.pillarList}>
              <li className={styles.pillarListItem}>
                <span className={styles.itemBullet} />
                <span><strong>Certifications:</strong> Honest reviews and prep notes for eJPT, Practical Ethical Hacking (PEH), and more.</span>
              </li>
              <li className={styles.pillarListItem}>
                <span className={styles.itemBullet} />
                <span><strong>CTFs & Walkthroughs:</strong> Detailed breakdowns of TryHackMe machines (Pickle Rick, Alfred, Steel Mountain, etc.).</span>
              </li>
              <li className={styles.pillarListItem}>
                <span className={styles.itemBullet} />
                <span><strong>Personal Projects:</strong> Tool evaluations, note-taking strategies, and security workflows.</span>
              </li>
            </ul>
          </div>

          <div className={styles.pillarFooter}>
            <Link to="/blog" className={styles.cardCta}>
              <span>Browse All Blog Posts</span>
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutBio}>
            <Heading as="h2">About Bryan Wendt (BW)</Heading>
            <p className={styles.aboutText}>
              I am a security professional with a specialized passion for physical security, 
              penetration testing, and understanding how physical mechanisms can be manipulated and bypassed.
            </p>
            <p className={styles.aboutText}>
              Physical security knowledge is often scattered across obscure blog posts, conference 
              recordings, and specialized forums. I created this platform to consolidate structured, 
              practical research in one location while sharing my ongoing learning journey.
            </p>
          </div>

          <div className={styles.aboutCard}>
            <div className={styles.aboutCardTitle}>Core Focus & Connect</div>
            
            <div className={styles.skillsList}>
              <span className={styles.skillBadge}>Physical Pen Testing</span>
              <span className={styles.skillBadge}>Lock Mechanisms</span>
              <span className={styles.skillBadge}>Bypass Tooling</span>
              <span className={styles.skillBadge}>Access Control</span>
              <span className={styles.skillBadge}>CTF Walkthroughs</span>
              <span className={styles.skillBadge}>Documentation</span>
            </div>

            <div className={styles.socialGrid}>
              <Link href="https://github.com/bryan-wendt" className={styles.socialBtn} aria-label="GitHub Profile">
                <GitHubIcon size={18} />
                <span>GitHub</span>
              </Link>
              <Link href="https://x.com/bryan_wendt" className={styles.socialBtn} aria-label="X Profile">
                <XIcon size={16} />
                <span>X</span>
              </Link>
              <Link href="https://discord.com/users/bw#6573" className={styles.socialBtn} aria-label="Discord">
                <DiscordIcon size={18} />
                <span>Discord</span>
              </Link>
              <Link href="https://linkedin.com/in/bryan-wendt" className={styles.socialBtn} aria-label="LinkedIn Profile">
                <LinkedInIcon size={18} />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickTopicsSection() {
  const topics = [
    {
      icon: <DoorIcon size={22} />,
      title: 'Obstacles & Defenses',
      desc: 'Analyze perimeter barriers, turnstiles, crash bars, and door hardware.',
      to: '/docs/category/obstacles',
    },
    {
      icon: <ToolIcon size={22} />,
      title: 'Tools & Equipment',
      desc: 'Guides on picks, tension tools, bump keys, and bypass devices.',
      to: '/docs/category/tools',
    },
    {
      icon: <KeyIcon size={22} />,
      title: 'Bypass Techniques',
      desc: 'Methodologies for shimming, latch manipulation, and sensor evasion.',
      to: '/docs/category/techniques',
    },
    {
      icon: <FileTextIcon size={22} />,
      title: 'Recent Writeups',
      desc: 'Read the latest blog articles, certifications, and project updates.',
      to: '/blog',
    },
  ];

  return (
    <section className={styles.quickSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>Quick Navigation</span>
        <Heading as="h2" className={styles.sectionTitle}>
          Jump Right In
        </Heading>
      </div>

      <div className={styles.quickGrid}>
        {topics.map((topic, idx) => (
          <Link key={idx} to={topic.to} className={styles.quickCard}>
            <div className={styles.quickIcon}>{topic.icon}</div>
            <div className={styles.quickTitle}>{topic.title}</div>
            <p className={styles.quickDesc}>{topic.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Bryan Wendt | Physical Red Team Wiki & Security Blog"
      description="Personal website and Physical Red Team Wiki of Bryan Wendt (BW). Exploring physical security, bypass techniques, certifications, and technical writeups.">
      <main>
        <HeroHeader />
        <PillarsSection />
        <AboutSection />
        <QuickTopicsSection />
      </main>
    </Layout>
  );
}
