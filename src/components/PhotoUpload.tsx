
import { useState, useRef } from 'react';
import { Upload, Image, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

interface UploadedImage {
  id: string;
  file: File;
  preview: string;
  title: string;
}

const PhotoUpload = () => {
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      addNewFiles(files);
    }
  };

  const addNewFiles = (files: FileList) => {
    const newImages: UploadedImage[] = Array.from(files).map(file => ({
      id: crypto.randomUUID(),
      file: file,
      preview: URL.createObjectURL(file),
      title: '',
    }));
    setUploadedImages(prev => [...prev, ...newImages]);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files) {
      addNewFiles(e.dataTransfer.files);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeImage = (id: string) => {
    setUploadedImages(uploadedImages.filter(img => img.id !== id));
  };

  const updateImageTitle = (id: string, title: string) => {
    setUploadedImages(uploadedImages.map(img => 
      img.id === id ? { ...img, title } : img
    ));
  };

  const handleUpload = () => {
    // Проверяем, что все изображения имеют заголовки
    const missingTitles = uploadedImages.some(img => !img.title.trim());
    if (missingTitles) {
      toast({
        title: "Необходимо добавить названия",
        description: "Пожалуйста, добавьте названия для всех фотографий",
        variant: "destructive"
      });
      return;
    }

    // В реальном проекте здесь бы отправляли данные на сервер
    // Например, с помощью FormData и fetch API
    
    // Для демонстрации просто показываем сообщение об успешной загрузке
    toast({
      title: "Фотографии загружены",
      description: `Успешно загружено ${uploadedImages.length} фотографий`
    });
    
    // Очищаем форму после "загрузки"
    setUploadedImages([]);
  };

  return (
    <div className="space-y-6">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
        multiple
      />
      
      <div
        onClick={triggerFileInput}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors 
        ${isDragging 
          ? 'border-primary bg-primary/5' 
          : 'border-gray-300 dark:border-gray-700 hover:border-primary/50'}`}
      >
        <div className="flex flex-col items-center">
          <Upload className="h-12 w-12 mb-4 text-gray-400" />
          <h3 className="text-lg font-medium mb-2">Перетащите фотографии сюда</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">или нажмите, чтобы выбрать файлы</p>
          <Button type="button" variant="outline" onClick={triggerFileInput}>
            Выбрать файлы
          </Button>
        </div>
      </div>
      
      {uploadedImages.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-xl font-medium">Загруженные фотографии</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {uploadedImages.map(image => (
              <div key={image.id} className="border rounded-lg overflow-hidden">
                <div className="relative aspect-[4/3] bg-gray-100 dark:bg-gray-800">
                  <img 
                    src={image.preview} 
                    alt="Превью"
                    className="w-full h-full object-cover" 
                  />
                  <button 
                    onClick={() => removeImage(image.id)}
                    className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-black/80"
                  >
                    <X size={16} />
                  </button>
                </div>
                <div className="p-3">
                  <Label htmlFor={`title-${image.id}`} className="mb-1 block">
                    Название фотографии
                  </Label>
                  <Input
                    id={`title-${image.id}`}
                    value={image.title}
                    onChange={(e) => updateImageTitle(image.id, e.target.value)}
                    placeholder="Введите название..."
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-end">
            <Button onClick={handleUpload} className="w-full md:w-auto">
              Загрузить все фотографии
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;
