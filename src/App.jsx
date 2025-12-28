import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import FloatingWhatsApp from "./Components/FloatingWhatsApp";
import ScrollToTop from "./Components/ScrollToTop";
import { ModalProvider } from "./Context/ModalContext";
import AutoPopupModal from "./Components/AutoPopupModal";
import ModalHost from "./Components/ModalHost";
//About Us

import HomePage from "./Pages/HomePage";
import ContactUs from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import MissionVision from "./Pages/MissionVision";
import OurTeam from "./Pages/OurTeam";
import OurProducts from "./Pages/OurProducts";
import TestimonialsPage from "./Pages/TestimonialsPage";
import CompanyOverview from "./Pages/CompanyOverview";
import BlogPage from "./Pages/Blog";
import Careers from "./Pages/Careers";

// Service Pages
import WebDevelopment from "./Pages/Services/WebDevelopment";
import AIML from "./Pages/Services/AIML";
import SoftwareDevelopment from "./Pages/Services/SoftwareDevelopment";
import MobileAppDevelopment from "./Pages/Services/MobileAppDevelopment";
import EnterpriseSystems from "./Pages/Services/EnterpriseSystems";
import CloudSolutions from "./Pages/Services/CloudSolutions";
import Cybersecurity from "./Pages/Services/Cybersecurity";
import ITSupport from "./Pages/Services/ITSupport";
import SEOOptimization from "./Pages/Services/SEOOptimization";

// About Us Pages

// Gallery Pages
 



function App() {
  return (
 <div className="bg-[#030410]">    
 <ModalProvider>
  {/* Global modal host: listens to ModalContext and mounts shared modals */}
  <ModalHost />
  <Router>
   <ScrollToTop />
   <div className="flex flex-col min-h-screen">
     <Navbar />

     <main className="flex-grow mt-[80px]">
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us/mission-vision" element={<MissionVision />} />
        <Route path="/about-us/ourteam" element={<OurTeam />} />
        <Route path="/about-us/overview" element={<CompanyOverview />} />
        <Route path="/about-us/ourproducts" element={<OurProducts />} />
        <Route path="/about-us/ourtestimonials" element={<TestimonialsPage />} />
         <Route path="/services/website-development" element={<WebDevelopment />} />
         <Route path="/services/ai-ml" element={<AIML />} />
         <Route path="/services/seo-optimization" element={<SEOOptimization />} />
         <Route path="/services/software-development" element={<SoftwareDevelopment />} />
         <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
         <Route path="/services/enterprise-systems" element={<EnterpriseSystems />} />
         <Route path="/services/cloud" element={<CloudSolutions />} />
         <Route path="/services/cybersecurity" element={<Cybersecurity />} />
         {/* <Route path="/services/digital-transformation" element={<DigitalTransformation />} /> */}
         <Route path="/services/it-support" element={<ITSupport />} />
         <Route path="/blog" element={<BlogPage />} />
         <Route path="/careers" element={<Careers />} />
       </Routes>
     </main>
   
     <Footer />
     <FloatingWhatsApp />
     <AutoPopupModal />
   </div>
 </Router>
</ModalProvider></div>
  );
}

export default App;
