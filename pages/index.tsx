import * as React from 'react';
import { FaBook, FaGithubAlt, FaLinkedin, FaTwitter } from 'react-icons/fa';

import TypingMotion from 'components/typing-motion';

import ImgAvatar from '../images/Kuroko_AAA.jpeg';
import {
  Avatar,
  AvatarContainer,
  ContactInfoList,
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

  return (
    <>
      <MainContainer>
        <AvatarContainer>
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

        <ContactInfoList>
          <a href="https://github.com/saltchang">
            <FaGithubAlt />
          </a>
          <a href="https://twitter.com/saltchang">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/saltchang">
            <FaLinkedin />
          </a>
          <a href="https://blog.saltchang.com">
            <FaBook />
          </a>
        </ContactInfoList>
      </MainContainer>

      <FooterContainer></FooterContainer>
    </>
  );
};

export default Home;
