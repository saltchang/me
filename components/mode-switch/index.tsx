import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

import { ModeSwitchContainer } from './index.style';

interface ModeSwitchProps {
  readonly onSwitchMode?: (isDark: boolean) => void;
  readonly defaultDark?: boolean;
}

const ModeSwitch = ({ onSwitchMode, defaultDark = true }: ModeSwitchProps) => {
  const [isDarkMode, setIsDarkMode] = React.useState(defaultDark);

  const switchMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  React.useEffect(() => {
    if (!onSwitchMode) return;

    onSwitchMode(isDarkMode);
  }, [isDarkMode, onSwitchMode]);

  return (
    <>
      <ModeSwitchContainer
        className="mode-switch"
        onClick={switchMode}
        onKeyUp={switchMode}
        role="button"
        tabIndex={0}
      >
        {isDarkMode ? <FaMoon /> : <FaSun />}
      </ModeSwitchContainer>
    </>
  );
};

export default ModeSwitch;
