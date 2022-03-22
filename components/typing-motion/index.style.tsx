import styled from 'styled-components';

interface Props {
  readonly codeStyle?: boolean;
  readonly dark?: boolean;
  readonly codeBlock?: boolean;
}

const blinkTime = '750ms';

const textSize = 'var(--fs-base)';
const padding = 'var(--space-mini)';

const color = {
  backgroundColor: 'var(--color-bg-main)',
  cursorColor: 'var(--color-amber)',
  cursorTextColor: 'var(--color-sea)',
  tagColor: 'var(--color-berry)',
  codeTextColor: 'var(--color-dark)',
};

const TypingMotionContainer = styled.div<Props>`
  font-size: ${textSize};
  padding: ${padding};

  display: ${(props: Props) => (props.codeStyle ? 'inline-block' : 'flex')};
  font-family: var(--fm-code);
  color: ${(props: Props) => (props.codeStyle ? color.codeTextColor : '')};

  border-radius: 4px;
  background-color: ${(props: Props) =>
    props.codeBlock ? color.backgroundColor : 'transparent'};

  .tag {
    .tag-name {
      color: ${color.tagColor};
    }
  }

  .typing-text {
    min-height: ${textSize};
    white-space: pre-wrap;
    box-sizing: content-box;
    display: inline-block;

    .text-cursor {
      color: ${color.cursorTextColor};
      height: ${`calc(${textSize} + 1px)`};
      display: inline-block;
      padding-top: 1px;
      margin-left: 1px;
      background: ${color.cursorColor};

      &.blink {
        animation: borderBlink ${blinkTime} step-end infinite;
      }
    }
  }

  @keyframes borderBlink {
    from,
    to {
      color: ${color.cursorTextColor};
      background: ${color.cursorColor};
    }
    50% {
      color: ${color.codeTextColor};
      background: transparent;
    }
  }
`;

TypingMotionContainer.defaultProps = {
  codeStyle: true,
  dark: false,
  codeBlock: false,
};

export default TypingMotionContainer;
