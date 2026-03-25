import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import FloatingChat from '../components/common/FloatingChat';
import MarqueeBanner from '../components/common/MarqueeBanner';
import CursorFollower from '../components/common/CursorFollower';
import EventPopup from '../components/common/EventPopup';
import KrHero from '../components/kr/KrHero';
import KrWhyUs from '../components/kr/KrWhyUs';
import KrForWhom from '../components/kr/KrForWhom';
import KrVideoSection from '../components/kr/KrVideoSection';
import KrProcess from '../components/kr/KrProcess';
import KrProduct from '../components/kr/KrProduct';
import KrPricing from '../components/kr/KrPricing';
import KrReviews from '../components/kr/KrReviews';
import KrFAQ from '../components/kr/KrFAQ';
import KrCTA from '../components/kr/KrCTA';

export default function KrTrack({ onLangSwitch }) {
  return (
    <div>
      <CursorFollower />
      <EventPopup />
      <NavBar track="kr" onLangSwitch={onLangSwitch} />
      <KrHero />
      <KrWhyUs />
      <MarqueeBanner />
      <KrForWhom />
      <KrProcess />
      <KrVideoSection />
      <KrProduct />
      <KrPricing />
      <KrReviews />
      <KrFAQ />
      <KrCTA />
      <Footer track="kr" />
      <FloatingChat />
    </div>
  );
}
