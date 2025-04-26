import { Card, CardContent } from "@/components/ui/card";
import { CameraIcon, ImageIcon, BookOpenIcon } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-portfolio-dark dark:text-white">
          О проекте
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-portfolio-light dark:bg-gray-900 border-none shadow-md">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-portfolio-primary flex items-center justify-center mb-4">
                  <CameraIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-portfolio-dark dark:text-white">
                  Уникальные фотографии
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Каждая фотография в портфолио уникальна и имеет свою историю, которую я стараюсь передать через изображение.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-portfolio-light dark:bg-gray-900 border-none shadow-md">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-portfolio-primary flex items-center justify-center mb-4">
                  <ImageIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-portfolio-dark dark:text-white">
                  Высокое качество
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Все фотографии представлены в высоком разрешении, что позволяет рассмотреть каждую деталь композиции.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-portfolio-light dark:bg-gray-900 border-none shadow-md">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-portfolio-primary flex items-center justify-center mb-4">
                  <BookOpenIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-portfolio-dark dark:text-white">
                  Имя для каждого снимка
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Каждое фото имеет своё уникальное название, которое отражает его суть и помогает лучше понять историю.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
