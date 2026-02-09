import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Always default to dark, ignore local storage for now to enforce "remove light theme"
  const [theme] = useState('dark');

  useEffect(() => {
    // Force dark class on mount
    document.documentElement.classList.add('dark');
    localStorage.setItem('innohacks_theme', 'dark');
  }, []);

  const toggleTheme = () => {
    // No-op or log warning
    console.warn('Theme toggling is disabled.');
  };

  const setSpecificTheme = () => {
     console.warn('Theme setting is disabled.');
  };

  const value = {
    theme: 'dark',
    toggleTheme,
    setTheme: setSpecificTheme,
    isDark: true,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
