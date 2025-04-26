import PhotoCard from './PhotoCard';

// Sample photo data
const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Горный пейзаж",
    title: "Величественные горы"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    alt: "Лесное озеро",
    title: "Спокойствие леса"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    alt: "Закат над рекой",
    title: "Золотой закат"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    alt: "Полевые цветы",
    title: "Цветочная поляна"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
    alt: "Зимний лес",
    title: "Снежное царство"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    alt: "Осенний парк",
    title: "Осенние краски"
  }
];

const PhotoGallery = () => {
  return (
    <section id="gallery" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-portfolio-dark dark:text-white">
          Моя галерея
        </h2>
        <div className="photo-grid">
          {photos.map((photo) => (
            <PhotoCard
              key={photo.id}
              src={photo.src}
              alt={photo.alt}
              title={photo.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
