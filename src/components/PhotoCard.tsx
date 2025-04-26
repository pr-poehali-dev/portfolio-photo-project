import { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PhotoCardProps {
  src: string;
  alt: string;
  title: string;
  size?: 'small' | 'medium' | 'large';
}

const PhotoCard = ({ src, alt, title, size = 'medium' }: PhotoCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Определяем классы в зависимости от размера
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 row-span-1 md:col-span-2 md:row-span-1',
    large: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2'
  }[size];

  // Выбираем соотношение сторон в зависимости от размера
  const aspectRatio = size === 'large' ? 1 : 4/3;

  return (
    <div className={`photo-card group animate-fade-in ${sizeClasses}`}>
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
