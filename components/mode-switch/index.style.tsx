import styled from 'styled-components';

export const ModeSwitchContainer = styled.div`
  background-color: var(--color-bg-mist);
  width: min-content;
  height: min-content;
  padding: var(--space-small);
  display: flex;
  border-radius: var(--br-small);
  cursor: pointer;

  transition: background-color 200ms;

  &:hover {
    transition: background-color 200ms;
    background-color: var(--color-bg-milk);
  }
`;
