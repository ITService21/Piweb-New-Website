// Import modular components
import Navbar from "../Components/Navbar";
import HeroBanner from "../Components/HomePage/HeroBanner";
import AboutSnapshot from "../Components/HomePage/AboutSnapshot";
import CoreServices from "../Components/HomePage/CoreServices";
import ProductsShowcase from "../Components/HomePage/ProductsShowcase";
import IndustriesWeServe from "../Components/HomePage/IndustriesWeServe";
import WhyChooseUs from "../Components/HomePage/WhyChooseUs";
import KeyStats from "../Components/HomePage/KeyStats";
import CaseStudies from "../Components/HomePage/CaseStudies";
import ClientLogos from "../Components/HomePage/ClientLogos";
import Testimonials from "../Components/HomePage/Testimonials";
import TechnologyStack from "../Components/HomePage/TechnologyStack";
import BlogTeaser from "../Components/HomePage/BlogTeaser";
import AwardsRecognition from "../Components/HomePage/AwardsRecognition";


// Main HomePage Component
const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="home">
        <HeroBanner />
      </section>
      <section id="about">
        <AboutSnapshot />
      </section>
      <section id="services">
        <CoreServices />
      </section>
      <WhyChooseUs />
      <KeyStats />
      <CaseStudies />
      <Testimonials />
    </div>
  );
};

export default HomePage;
