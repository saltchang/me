import React, { useCallback, useEffect, useState } from 'react';

import TypingMotionContainer from './index.style';

interface TypingMotionProps {
  readonly withTag?: string;
  readonly codeStyle?: boolean;
  readonly baseText?: string;
  readonly stringsToType: readonly string[];
  readonly codeBlock?: boolean;
}

const INIT_TYPING_SENTENCE_ID = 0;
const INIT_TYPING_CHAR_ID = 0;

const DELAY_TIME_TO_SWITCH_SENTENCE = 2000;
const DELAY_TIME_TO_START_TYPING = 1000;

// const clearAllTimeout = (): void => {
//   Array.from({ length: window.setTimeout(() => 0) })
//     .fill(0)
//     .map((_, i) => window.clearTimeout(i));
// };

const getTypeDelay = () => {
  const isLongDelay = Math.floor(Math.random() * Math.floor(20)) === 1;
  const randomShortDelay = 100 + 10 * Math.floor(Math.random() * Math.floor(3));
  const randomLongDelay = isLongDelay ? 100 : 0;

  return randomShortDelay + randomLongDelay;
};

const TypingMotion = ({
  withTag,
  baseText = '',
  stringsToType,
  codeBlock = false,
}: TypingMotionProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBlink, setIsBlink] = useState(false);
  const [typingCharId, setTypingCharId] = useState(INIT_TYPING_CHAR_ID);
  const [typingStringId, setTypingStringId] = useState(INIT_TYPING_SENTENCE_ID);

  const switchTypingSentence = useCallback(() => {
    if (stringsToType.length === 1 && stringsToType[0].length === 0) {
      setIsBlink(true);
      return;
    }

    if (typingStringId + 1 === stringsToType.length) {
      setTypingStringId(0);
    } else {
      setTypingStringId(typingStringId + 1);
    }
  }, [stringsToType, typingStringId]);

  const deleteText = useCallback(() => {
    const hasTextRemain = typingCharId !== 0;

    if (hasTextRemain) {
      setIsBlink(false);
      setTimeout(() => {
        setTypingCharId(typingCharId - 1);
      }, 40);
    } else {
      setIsBlink(true);
      setTimeout(() => {
        setIsDeleting(false);
        switchTypingSentence();
      }, DELAY_TIME_TO_START_TYPING);
    }
  }, [typingCharId, switchTypingSentence]);

  const typeText = useCallback(() => {
    const isTypeTextRemain =
      stringsToType[typingStringId].length !== typingCharId;

    if (isTypeTextRemain) {
      setIsBlink(false);
      setTimeout(() => {
        setTypingCharId(typingCharId + 1);
      }, getTypeDelay());
    } else {
      setIsBlink(true);
      setTimeout(() => {
        setIsDeleting(true);
      }, DELAY_TIME_TO_SWITCH_SENTENCE);
    }
  }, [stringsToType, typingCharId, typingStringId]);

  useEffect(() => {
    if (typingCharId === -1) {
      setTypingCharId(0);
    } else if (isDeleting) {
      deleteText();
    } else {
      typeText();
    }
  }, [typingCharId, isDeleting, typeText, deleteText]);

  return (
    <TypingMotionContainer codeBlock={codeBlock}>
      {withTag ? (
        <span className="tag">
          {'<'}
          <span className="tag-name">{withTag}</span>
          {'>'}
        </span>
      ) : (
        <></>
      )}
      {baseText.replace(' ', '\u00A0')}
      <span className="typing-text">
        {stringsToType && stringsToType.length > 0
          ? stringsToType[typingStringId].slice(0, typingCharId)
          : undefined}
        <div className={`text-cursor ${isBlink ? 'blink' : ''}`}>
          {withTag ? '<' : '\u00A0'}
        </div>
      </span>
      {withTag ? (
        <span className="tag">
          {'/'}
          <span className="tag-name">{withTag}</span>
          {'>'}
        </span>
      ) : (
        <></>
      )}
    </TypingMotionContainer>
  );
};

export default TypingMotion;
