import Logo from '@/components/Logo';
import HeroSection from '@/components/HeroSection';
import MenuButton from '@/components/MenuButton';
import ContactButtons from '@/components/ContactButtons';
import SocialLinks from '@/components/SocialLinks';
import DeliveryBanner from '@/components/DeliveryBanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="page-container">
      <Logo />
      <HeroSection />
      <MenuButton />
      <ContactButtons />
      <SocialLinks />
      <DeliveryBanner />
      <Footer />
    </main>
  );
}
