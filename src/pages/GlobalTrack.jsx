import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import GlHero from '../components/global/GlHero';
import GlWhyUs from '../components/global/GlWhyUs';
import GlForWhom from '../components/global/GlForWhom';
import GlProcess from '../components/global/GlProcess';
import GlProduct from '../components/global/GlProduct';
import GlPricing from '../components/global/GlPricing';
import GlReviews from '../components/global/GlReviews';
import GlFAQ from '../components/global/GlFAQ';
import GlCTA from '../components/global/GlCTA';

export default function GlobalTrack({ onLangSwitch }) {
  return (
    <div>
      <NavBar track="global" onLangSwitch={onLangSwitch} />
      <GlHero />
      <GlWhyUs />
      <GlForWhom />
      <GlProcess />
      <GlProduct />
      <GlPricing />
      <GlReviews />
      <GlFAQ />
      <GlCTA />
      <Footer track="global" />
    </div>
  );
}
