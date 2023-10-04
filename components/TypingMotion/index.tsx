'use client';

import { memo, useCallback, useEffect, useState } from 'react';

import styles from './index.module.scss';

interface TypingMotionProps {
  readonly withTag?: string;
  readonly codeStyle?: boolean;
  readonly baseText?: string;
  readonly stringsToType?: readonly string[];
  readonly codeBlock?: boolean;
}

const INIT_TYPING_SENTENCE_ID = 0;
const INIT_TYPING_CHAR_ID = 0;

const DELAY_TIME_TO_SWITCH_SENTENCE = 2000;
const DELAY_TIME_TO_START_TYPING = 1000;

const getTypeDelay = () => {
  const isLongDelay = Math.floor(Math.random() * Math.floor(20)) === 1;
  const randomShortDelay = 100 + 10 * Math.floor(Math.random() * Math.floor(3));
  const randomLongDelay = isLongDelay ? 100 : 0;

  return randomShortDelay + randomLongDelay;
};

const defaultStringsToType = [
  'A web developer.',
  'A software engineer.',
  'A creator.',
];

const TypingMotion = ({
  withTag = 'code',
  baseText = '',
  stringsToType = defaultStringsToType,
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
    <div className={styles.typingMotionContainer}>
      {withTag ? (
        <span className={styles.tag}>
          {'<'}
          <span className={styles.tagName}>{withTag}</span>
          {'>'}
        </span>
      ) : (
        <></>
      )}
      {baseText.replace(' ', '\u00A0')}
      <span className={styles.typingText}>
        {stringsToType && stringsToType.length > 0
          ? stringsToType[typingStringId].slice(0, typingCharId)
          : undefined}
        <span
          className={`${styles.textCursor} ${isBlink ? `${styles.blink}` : ''}`}
        >
          {withTag ? '<' : '\u00A0'}
        </span>
      </span>
      {withTag ? (
        <span className={styles.tag}>
          {'/'}
          <span className={styles.tagName}>{withTag}</span>
          {'>'}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
};

export default memo(TypingMotion);
