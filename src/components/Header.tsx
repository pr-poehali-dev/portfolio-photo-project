import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-portfolio-dark shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-portfolio-primary">Фотопортфолио</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="font-medium hover:text-portfolio-primary transition-colors">
            Главная
          </a>
          <a href="#gallery" className="font-medium hover:text-portfolio-primary transition-colors">
            Галерея
          </a>
          <a href="#about" className="font-medium hover:text-portfolio-primary transition-colors">
            О проекте
          </a>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleDarkMode}
            className="ml-2"
          >
            {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleDarkMode}
            className="mr-2"
          >
            {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-portfolio-dark shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <a 
              href="/" 
              className="py-2 font-medium hover:text-portfolio-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </a>
            <a 
              href="#gallery" 
              className="py-2 font-medium hover:text-portfolio-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Галерея
            </a>
            <a 
              href="#about" 
              className="py-2 font-medium hover:text-portfolio-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              О проекте
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
