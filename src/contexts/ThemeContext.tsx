import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface CustomColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  customColors: CustomColors;
  setCustomColor: (key: keyof CustomColors, value: string) => void;
  resetColors: () => void;
}

const defaultColors: CustomColors = {
  primary: '#d4a533',
  secondary: '#e8dcc8',
  accent: '#e67e22',
  background: '#faf8f5',
};

const darkDefaultColors: CustomColors = {
  primary: '#e4b843',
  secondary: '#2d2a24',
  accent: '#e67e22',
  background: '#1a1816',
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const hexToHsl = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '0 0% 0%';
  
  let r = parseInt(result[1], 16) / 255;
  let g = parseInt(result[2], 16) / 255;
  let b = parseInt(result[3], 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const stored = localStorage.getItem('saranya-theme');
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [customColors, setCustomColors] = useState<CustomColors>(() => {
    const stored = localStorage.getItem('saranya-custom-colors');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return defaultColors;
      }
    }
    return defaultColors;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('saranya-theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary', hexToHsl(customColors.primary));
    root.style.setProperty('--ring', hexToHsl(customColors.primary));
    root.style.setProperty('--golden', hexToHsl(customColors.primary));
    root.style.setProperty('--accent', hexToHsl(customColors.accent));
    localStorage.setItem('saranya-custom-colors', JSON.stringify(customColors));
  }, [customColors]);

  const toggleTheme = () => {
    setThemeState(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const setCustomColor = (key: keyof CustomColors, value: string) => {
    setCustomColors(prev => ({ ...prev, [key]: value }));
  };

  const resetColors = () => {
    setCustomColors(theme === 'dark' ? darkDefaultColors : defaultColors);
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme, 
      setTheme, 
      customColors, 
      setCustomColor,
      resetColors 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
