import { HeartIcon } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-portfolio-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-portfolio-primary">Фотопортфолио</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              © {currentYear} Все права защищены
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
              Сделано с <HeartIcon className="h-4 w-4 mx-1 text-portfolio-primary" /> в России
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
