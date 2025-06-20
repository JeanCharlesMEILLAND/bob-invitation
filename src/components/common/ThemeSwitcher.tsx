'use client';

import SVGDarkMode from '@/assets/svg/SVGDarkMode';
import SVGLightMode from '@/assets/svg/SVGLightMode';
import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const savedTheme = localStorage.getItem('theme') || 'system';
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, [mounted]);

  const applyTheme = (newTheme: string) => {
    const root = document.documentElement;
    
    if (newTheme === 'dark') {
      root.style.setProperty('--background', '#262626');
      root.style.setProperty('--foreground', '#ededed');
    } else if (newTheme === 'light') {
      root.style.setProperty('--background', '#ffffff');
      root.style.setProperty('--foreground', '#262626');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        root.style.setProperty('--background', '#262626');
        root.style.setProperty('--foreground', '#ededed');
      } else {
        root.style.setProperty('--background', '#ffffff');
        root.style.setProperty('--foreground', '#262626');
      }
    }
  };

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  const getCurrentTheme = () => {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme;
  };

  if (!mounted) {
    return (
      <div className="flex items-center gap-6 text-[var(--foreground)]">
        <div className="w-6 h-6" />
        <div className="w-6 h-6" />
      </div>
    );
  }

  const currentTheme = getCurrentTheme();

  return (
    <div className="flex items-center gap-6 text-[var(--foreground)]">
      <button 
        onClick={() => toggleTheme('light')}
        className={`p-1 rounded-full cursor-pointer transition-all duration-200 hover:opacity-70 ${
          currentTheme === 'light' ? 'opacity-100' : 'opacity-40'
        }`}
        aria-label="Activer le mode clair"
      >
        <SVGLightMode isActive={currentTheme === "light"} animation='customSpin'/>
      </button>
      <button 
        onClick={() => toggleTheme('dark')}
        className={`p-1 rounded-full cursor-pointer transition-all duration-200 hover:opacity-70 ${
          currentTheme === 'dark' 
            ? 'bg-[var(--foreground)] opacity-100 shadow-sm' 
            : 'opacity-40'
        }`}
        aria-label="Activer le mode sombre"
      >
        <SVGDarkMode isActive={currentTheme === 'dark'} />
      </button>
    </div>
  );
}