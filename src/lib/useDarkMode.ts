import useSimpleDarkMode from './useSimpleDarkMode';
import { useEffect } from 'react';
import { useLocalStorage } from 'react-use';

const Theme = {
  Dark: 'dark',
  Light: 'light',
} as const;

type UseDarkMode = () => {
  isDarkMode: boolean;
  toggle: (isDark: boolean) => void;
};

export const useDarkMode: UseDarkMode = () => {
  const [value, setValue] = useLocalStorage<typeof Theme['Dark' | 'Light']>('theme');
  const { isDarkMode, toggle } = useSimpleDarkMode();

  const persistToggle = (isDark: boolean) => {
    toggle(isDark);
    setValue(isDark ? Theme.Dark : Theme.Light);
  };

  useEffect(() => {
    if (
      value === Theme.Dark ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      toggle(true);
      setValue(Theme.Dark);
    } else {
      toggle(false);
      setValue(Theme.Light);
    }
  }, [value, setValue, toggle]);

  return { isDarkMode, toggle: persistToggle };
};
