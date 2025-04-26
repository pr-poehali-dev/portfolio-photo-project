import PhotoCard from './PhotoCard';

// Образцы данных фотографий
const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Горный пейзаж",
    title: "Величественные горы",
    orientation: "landscape" // 15:10 пейзажная ориентация
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    alt: "Лесное озеро",
    title: "Спокойствие леса",
    orientation: "landscape"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1541675154750-0444c7d51e8e",
    alt: "Горная река",
    title: "Бурный поток",
    orientation: "portrait" // 10:15 портретная ориентация
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    alt: "Полевые цветы",
    title: "Цветочная поляна",
    orientation: "landscape"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    alt: "Портрет девушки",
    title: "Портрет на природе",
    orientation: "portrait"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    alt: "Осенний парк",
    title: "Осенние краски",
    orientation: "landscape"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa",
    alt: "Пляжный портрет",
    title: "Закат на пляже",
    orientation: "portrait"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    alt: "Морской пейзаж",
    title: "Морской бриз",
    orientation: "landscape"
  }
];

const PhotoGallery = () => {
  return (
    <section id="gallery" className="py-8">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold mb-6 text-center text-portfolio-dark dark:text-white">
          Моя галерея
        </h2>
        <div className="photo-grid">
          {photos.map((photo) => (
            <PhotoCard
              key={photo.id}
              src={photo.src}
              alt={photo.alt}
              title={photo.title}
              orientation={photo.orientation as 'portrait' | 'landscape'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
