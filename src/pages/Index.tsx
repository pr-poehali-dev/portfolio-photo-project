import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PhotoGallery from "@/components/PhotoGallery";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PhotoGallery />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
