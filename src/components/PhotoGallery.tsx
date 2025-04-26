import PhotoCard from './PhotoCard';

// Образцы данных фотографий
const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Горный пейзаж",
    title: "Величественные горы",
    size: "large" // большой размер
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    alt: "Лесное озеро",
    title: "Спокойствие леса",
    size: "medium" // средний размер
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    alt: "Закат над рекой",
    title: "Золотой закат",
    size: "small" // малый размер
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    alt: "Полевые цветы",
    title: "Цветочная поляна",
    size: "medium"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
    alt: "Зимний лес",
    title: "Снежное царство",
    size: "small"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    alt: "Осенний парк",
    title: "Осенние краски",
    size: "large"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1541675154750-0444c7d51e8e",
    alt: "Горная река",
    title: "Бурный поток",
    size: "small"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    alt: "Морской пейзаж",
    title: "Морской бриз",
    size: "medium"
  }
];

const PhotoGallery = () => {
  return (
    <section id="gallery" className="py-8">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold mb-6 text-center text-portfolio-dark dark:text-white">
          Моя галерея
        </h2>
        <div className="collage-grid">
          {photos.map((photo) => (
            <PhotoCard
              key={photo.id}
              src={photo.src}
              alt={photo.alt}
              title={photo.title}
              size={photo.size as 'small' | 'medium' | 'large'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
