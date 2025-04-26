import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";

const Hero = () => {
  const scrollToGallery = () => {
    const galleryElement = document.getElementById('gallery');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-portfolio-accent dark:bg-portfolio-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-portfolio-dark dark:text-white">
            Моё фотопортфолио
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
            Коллекция моих лучших фотографий, каждая со своей историей и уникальным названием
          </p>
          <Button 
            onClick={scrollToGallery}
            className="bg-portfolio-primary hover:bg-portfolio-secondary text-white"
          >
            Смотреть галерею
            <ArrowDownIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 md:w-64 md:h-64 bg-portfolio-primary opacity-10 rounded-full"></div>
      <div className="absolute -top-20 -right-20 w-48 h-48 md:w-72 md:h-72 bg-portfolio-secondary opacity-10 rounded-full"></div>
    </section>
  );
};

export default Hero;
