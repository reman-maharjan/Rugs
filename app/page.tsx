import VideoAndImages from "@/components/herosection/happy-rugs";
import HeroSection from "@/components/herosection/hero-section";
import LightningDeals from "@/components/herosection/lightning-deals";
import NaturalRugs from "@/components/herosection/natural-rugs";
import OutdoorRugs from "@/components/herosection/outdoor-rugs";
import ShopByRooom from "@/components/herosection/shopbyroom";
import TwoImages from "@/components/herosection/twoimages";
import ShopByStyle from "@/components/herosection/shopbystyle";
import About from "@/components/herosection/about";
import FAQ from "@/components/herosection/faq";
import PreviouslyViewed from "@/components/herosection/PreviouslyViewed";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <FAQ/>
    <PreviouslyViewed/>
    <LightningDeals/>
    <ShopByRooom/>
    <VideoAndImages/>
    <NaturalRugs/>
    <TwoImages/>
    <OutdoorRugs/>
    <TwoImages/>
    <ShopByStyle/>
    <About/>

    </>
  );
}
