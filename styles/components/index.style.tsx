import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100%;
  min-height: calc(100% - var(--footer-height));
  padding: var(--space-normal);
`;

export const FooterContainer = styled.footer`
  /* height: var(--footer-height); */
`;

export const AvatarContainer = styled.div`
  text-align: center;
  margin: var(--space-normal) auto;
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: var(--fs-header);
  font-weight: var(--fw-semiBold);
  margin-bottom: var(--space-double);
`;

export const ContactInfoList = styled.div`
  min-width: 250px;
  max-width: 360px;
  width: 75%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--fs-large);
`;

export const TypingMotionBox = styled.div`
  margin: var(--space-double) auto;
  width: fit-content;
`;
