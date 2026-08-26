import { memo } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { HiMiniIdentification } from 'react-icons/hi2';
import { PiArticleMediumBold } from 'react-icons/pi';
import Link from 'next/link';

import styles from './index.module.scss';

const linkItems = [
  {
    title: 'Resume',
    link: 'https://docs.google.com/document/d/1SP1_at4QTCF3yQBrGgZw2wcgn_amdWXmUKiq07sm7SQ/edit?usp=sharing',
    icon: <HiMiniIdentification />,
  },
  {
    title: 'GitHub',
    link: 'https://github.com/saltchang',
    icon: <FaGithub />,
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/saltchang',
    icon: <FaLinkedin />,
  },
  {
    title: 'Email',
    link: 'mailto:me@saltchang.com',
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
