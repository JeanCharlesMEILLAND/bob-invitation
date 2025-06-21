'use client';
import SVGDarkMode from '@/assets/svg/SVGDarkMode';
import SVGLightMode from '@/assets/svg/SVGLightMode';
import { useTheme } from '@/context/themeContext';

export default function ThemeSwitcher() {
  const { theme, toggleTheme, mounted } = useTheme();

  // Afficher un placeholder pendant l'hydratation
  if (!mounted) {
    return (
      <div className="flex items-center gap-6">
        <div className="w-6 h-6 opacity-50" />
        <div className="w-6 h-6 opacity-50" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-6 text-[var(--foreground)]">
      <button
        onClick={toggleTheme}
        className={`p-1 rounded-full cursor-pointer transition-all duration-200 hover:opacity-70 ${
          theme === 'light' ? 'opacity-100' : 'opacity-40'
        }`}
        aria-label={theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}
      >
        <SVGLightMode isActive={theme === "light"} animation='customSpin'/>
      </button>
      
      <button
        onClick={toggleTheme}
        className={`p-1 rounded-full cursor-pointer transition-all duration-200 hover:opacity-70 ${
          theme === 'dark'
            ? 'bg-[var(--foreground)] opacity-100 shadow-sm'
            : 'opacity-40'
        }`}
        aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
      >
        <SVGDarkMode isActive={theme === 'dark'} />
      </button>
    </div>
  );
}
