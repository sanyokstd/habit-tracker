import { useState, useCallback } from 'react';

export const usePreventDoublePress = (delay: number = 1000) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const preventDoublePress = useCallback(
    (callback: () => void) => {
      if (isDisabled) return;

      setIsDisabled(true);
      callback();

      setTimeout(() => {
        setIsDisabled(false);
      }, delay);
    },
    [isDisabled, delay]
  );

  return {
    isDisabled,
    preventDoublePress,
  };
};
