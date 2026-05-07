import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventInfo from "@/components/EventInfo";
import Pricing from "@/components/Pricing";
import MaidGallery from "@/components/MaidGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Pricing />
      <MaidGallery />
      <EventInfo />
      <Footer />
    </main>
  );
}