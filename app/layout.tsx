import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import styles from './layout.module.scss';

import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Salt Chang',
  description: "Hi, I'm Salt Chang, a software engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} data-theme="dark">
        <div className={styles.appContainer}>{children}</div>
      </body>
    </html>
  );
}
