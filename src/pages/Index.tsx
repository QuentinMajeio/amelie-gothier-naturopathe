import Hero from "@/components/Hero";
import StickyNav from "@/components/StickyNav";
import Approche from "@/components/Approche";
import PourQui from "@/components/PourQui";
import NeedsCarousel from "@/components/NeedsCarousel";
import Accompagnements from "@/components/Accompagnements";
import Seance from "@/components/Seance";
import APropos from "@/components/APropos";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyNav />
      <Hero />
      <Approche />
      <PourQui />
      <NeedsCarousel />
      <Accompagnements />
      <Seance />
      <APropos />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
