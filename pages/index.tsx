import * as React from 'react';
import {
  FaEnvelope,
  FaGithubAlt,
  FaLinkedinIn,
  FaRss,
  FaTwitter,
} from 'react-icons/fa';

import ContactInfoList from 'components/contact-info-list';
import TypingMotion from 'components/typing-motion';

import ImgAvatar from '../images/Mob_Cut_M.png';
import {
  Avatar,
  AvatarContainer,
  FooterContainer,
  MainContainer,
  Title,
  TypingMotionBox,
} from '../styles/components/index.style';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [strs] = React.useState([
    'A web developer.',
    'A full-stack engineer.',
    'A creator.',
  ]);

  const [name] = React.useState('Salt Chang');
  const [infoListItems] = React.useState([
    {
      title: 'Twitter',
      link: 'https://twitter.com/saltchang',
      icon: <FaTwitter />,
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/saltchang',
      icon: <FaLinkedinIn />,
    },
    {
      title: 'GitHub',
      link: 'https://github.com/saltchang',
      icon: <FaGithubAlt />,
    },
    {
      title: 'Email',
      link: 'mailto:saltchang@outlook.com',
      icon: <FaEnvelope />,
    },
    {
      title: 'Blog',
      link: 'https://blog.saltchang.com',
      icon: <FaRss />,
    },
  ]);

  return (
    <>
      <MainContainer>
        <AvatarContainer href="/" title="Salt Chang">
          <Avatar
            src={ImgAvatar.src}
            alt="Salt Chang"
            width={192}
            height={192}
            loading="lazy"
            className="avatar"
          />
        </AvatarContainer>

        <Title>{name}</Title>

        <TypingMotionBox>
          <TypingMotion stringsToType={strs} withTag="div" />
        </TypingMotionBox>

        <ContactInfoList items={infoListItems} />
      </MainContainer>

      <FooterContainer></FooterContainer>
    </>
  );
};

export default Home;
