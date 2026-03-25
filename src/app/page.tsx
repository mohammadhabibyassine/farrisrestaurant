import Logo from '@/components/Logo';
import HeroSection from '@/components/HeroSection';
import MenuButton from '@/components/MenuButton';
import ContactButtons from '@/components/ContactButtons';
import SocialLinks from '@/components/SocialLinks';
import DeliveryBanner from '@/components/DeliveryBanner';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="page-container">
        <Logo />
        <HeroSection />
        <MenuButton />
        <ContactButtons />
        <SocialLinks />
        <DeliveryBanner />
        <Footer />
      </main>
    </>
  );
}
