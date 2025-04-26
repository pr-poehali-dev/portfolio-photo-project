import { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PhotoCardProps {
  src: string;
  alt: string;
  title: string;
}

const PhotoCard = ({ src, alt, title }: PhotoCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="photo-card group animate-fade-in">
      <div className="relative overflow-hidden">
        <AspectRatio ratio={4/3} className="bg-gray-100 dark:bg-gray-800">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-portfolio-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
          />
        </AspectRatio>
      </div>
      <div className="photo-caption">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 transition-colors">{title}</h3>
      </div>
    </div>
  );
};

export default PhotoCard;
