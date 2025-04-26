
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Проверяем текущую тему при монтировании
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 px-4 md:px-8 border-b border-gray-100 dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-950 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-bold text-xl text-gray-900 dark:text-white">
            ФотоПортфолио
          </Link>

          {/* Мобильное меню */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Переключить тему"
              className="mr-2"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
              aria-label="Меню"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Десктопное меню */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Галерея
            </Link>
            <Link to="/upload" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Загрузить
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Переключить тему"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>
        </div>

        {/* Мобильное меню (открывается) */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-100 dark:border-gray-800">
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Галерея
                </Link>
              </li>
              <li>
                <Link 
                  to="/upload" 
                  className="block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Загрузить
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
