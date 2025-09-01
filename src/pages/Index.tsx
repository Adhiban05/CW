import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TradeInfoSection from '@/components/TradeInfoSection';
import AboutSection from '@/components/AboutSection';
import SpecificationsSection from '@/components/SpecificationsSection';
import OriginsSection from '@/components/OriginsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ImageGallery from '@/components/ImageGallery';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TradeInfoSection />
      <AboutSection />
      <SpecificationsSection />
      <OriginsSection />
      <CertificationsSection />
      <ImageGallery />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
