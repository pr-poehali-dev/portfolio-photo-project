import { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PhotoCardProps {
  src: string;
  alt: string;
  title: string;
  orientation?: 'portrait' | 'landscape';
}

const PhotoCard = ({ src, alt, title, orientation = 'landscape' }: PhotoCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Используем соотношение сторон 10:15 для портретных и 15:10 для пейзажных фото
  const aspectRatio = orientation === 'portrait' ? 10/15 : 15/10;

  return (
    <div className="photo-card group animate-fade-in">
      <div className="relative overflow-hidden">
        <AspectRatio ratio={aspectRatio} className="bg-gray-100 dark:bg-gray-800">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 border-3 border-portfolio-primary border-t-transparent rounded-full animate-spin"></div>
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
      <div className="absolute bottom-0 left-0 right-0 photo-caption">
        <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors">{title}</h3>
      </div>
    </div>
  );
};

export default PhotoCard;
