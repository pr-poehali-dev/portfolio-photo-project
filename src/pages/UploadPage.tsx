
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhotoUpload from "@/components/PhotoUpload";

const UploadPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">Загрузить фотографии</h1>
          <PhotoUpload />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UploadPage;
