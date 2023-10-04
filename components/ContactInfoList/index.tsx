import { memo } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { PiArticleMediumBold } from 'react-icons/pi';
import Link from 'next/link';

import styles from './index.module.scss';

const linkItems = [
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/saltchang',
    icon: <FaLinkedin />,
  },
  {
    title: 'GitHub',
    link: 'https://github.com/saltchang/me',
    icon: <FaGithub />,
  },
  {
    title: 'Email',
    link: 'mailto:saltchang@outlook.com',
    icon: <FaEnvelope />,
  },
  {
    title: 'Blog',
    link: 'https://blog.saltchang.com',
    icon: <PiArticleMediumBold />,
  },
];

const ContactInfoList = () => {
  return (
    <nav className={styles.contactInfoListBox}>
      {linkItems.map((item) => (
        <Link key={item.title} title={item.title} href={item.link}>
          {item.icon}
        </Link>
      ))}
    </nav>
  );
};

export default memo(ContactInfoList);
