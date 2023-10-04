import Image from 'next/image';
import Link from 'next/link';

import ContactInfoList from '@/components/ContactInfoList';
import TypingMotion from '@/components/TypingMotion';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Link className={styles.avatarContainer} href="/">
        <picture>
          <source srcSet="/avatar.webp" type="image/webp" />
          <source srcSet="/avatar.jp2" type="image/jp2" />
          <source srcSet="/avatar.jpg" type="image/jpg" />
          <Image
            src="/avatar.jpg"
            alt="Salt's avatar"
            width={192}
            height={192}
            priority
          />
        </picture>
      </Link>

      <h2 className={styles.title}>Salt Chang</h2>

      <div className={styles.typingMotionBox}>
        <TypingMotion />
      </div>

      <ContactInfoList />
    </main>
  );
}
