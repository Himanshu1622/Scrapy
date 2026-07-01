import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import DemoVideoSection from '@/components/DemoVideoSection';
import UseCasesSection from '@/components/UseCasesSection';
import ContactSection from '@/components/ContactSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DemoVideoSection />
      <UseCasesSection />
      <ContactSection />
      <FAQ />
      <Footer />
    </main>
  );
}
