import FeatureImgContentTwo from "@components/feature-img-content/FeatureImgContentTwo";
import HeroSectionFourth from "@components/hero-section/HeroSectionFourth";
import MarketingIntegration from "@components/integration/MarketingIntegration";
import PromoThree from "@components/promo/PromoThree";
import SingleServiceFeature from "@components/services/SingleServiceFeature";
import TestimonialThree from "@components/testimonial/TestimonialThree";
import WorkProcessFour from "@components/workprocess/WorkProcessFour";
import CryptoFooter from "@layout/Footer/CryptoFooter";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Navbar navDark />
      <HeroSectionFourth bgDark />
      <PromoThree />
      <FeatureImgContentTwo cardDark />
      <SingleServiceFeature />
      <WorkProcessFour />
      <TestimonialThree />
      <MarketingIntegration />
      <CryptoFooter />
    </Layout>
  );
};


export default Home;
