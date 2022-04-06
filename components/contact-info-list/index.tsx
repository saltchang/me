import * as React from 'react';

import { ContactInfoListBox } from './index.style';

interface ContactInfoListProps {
  items: {
    title: string;
    link: string;
    icon: JSX.Element;
  }[];
}

const ContactInfoList = ({ items = [] }: ContactInfoListProps) => {
  return (
    <>
      <ContactInfoListBox>
        {items.map((item) => (
          <a key={item.title} title={item.title} href={item.link}>
            {item.icon}
          </a>
        ))}
      </ContactInfoListBox>
    </>
  );
};

export default ContactInfoList;
