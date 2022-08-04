import React, { createContext, useState } from 'react';

interface ThemeContextInterface {
  darkMode: boolean | null;
  changeMode: () => void;
}

export const ThemeContext = createContext<ThemeContextInterface | null>(null);

export function ThemeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const changeMode = () => {
    setDarkMode(!darkMode);
  };
  return <ThemeContext.Provider value={{ darkMode, changeMode }}>{children}</ThemeContext.Provider>;
}
