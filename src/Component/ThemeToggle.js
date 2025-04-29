// components/ThemeToggle.js
'use client';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme, } = useTheme();
 

<motion.svg
  key={theme}
  initial={{ rotate: -30 }}
  animate={{ rotate: 0 }}
  transition={{ duration: 0.3 }}
></motion.svg>
  return (
    <button 
      onClick={toggleTheme}
      aria-label={`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="theme-toggle-btn"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        className="h-6 w-6 transition-colors"
      >
        {theme === 'light' ? (
          // Moon icon for dark mode
          <path
            fill="currentColor"
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
          />
        ) : (
          // Sun icon for light mode
          <>
            <circle cx="12" cy="12" r="5" fill="currentColor" />
            <path
              fill="currentColor"
              d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            />
          </>
        )}
      </svg>
    </button>
  );
}