import React from 'react';
import Footer from '@theme-original/Footer';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

const footerLinks = {
  style: 'dark',
  links: [
    {
      title: 'Projects',
      items: [
        {
          label: 'Physical Red Team Wiki',
          href: '/docs/intro',
        },
        {
          label: 'Twitter',
          href: 'https://twitter.com/docusaurus',
        },
      ],
    },
    {
      title: 'Community',
      items: [
        {
          label: 'Discord',
          href: 'https://discord.com/users/bw#6573',
        },
        {
          label: 'X',
          href: 'https://x.com/bryan_wendt',
        },
      ],
    },
    {
      title: 'More',
      items: [
        {
          label: 'Blog',
          to: '/blog',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/bryan-wendt',
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} Bryan Wendt. Built with Docusaurus.`,
};

function FooterWrapper(props) {
  return (
    <div className={clsx(styles.footerWrapper)}>
      <Footer {...props} {...footerLinks} />
    </div>
  );
}