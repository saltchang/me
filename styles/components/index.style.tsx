import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100%;
  min-height: calc(100% - var(--footer-height));
  padding: var(--space-normal);
`;

export const FooterContainer = styled.footer`
  /* height: var(--footer-height); */
`;

export const AvatarContainer = styled.a`
  display: flex;
  position: relative;
  width: 192px;
  height: 192px;
  border-radius: 50%;
  overflow: hidden;
  mask-image: radial-gradient(white, black);
  text-align: center;
  margin: var(--space-normal) auto;

  img {
    transition: transform 300ms;
    transform: scale(1.03);
  }

  &:hover {
    img {
      transform: scale(1.2);
    }
  }
`;

export const Avatar = styled.img``;

export const Title = styled.h2`
  cursor: default;
  text-align: center;
  font-size: var(--fs-header);
  font-weight: var(--fw-semiBold);
  margin-bottom: var(--space-double);
`;

export const TypingMotionBox = styled.div`
  margin: var(--space-double) auto;
  width: fit-content;
`;
