import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import FloatingWhatsApp from "./Components/FloatingWhatsApp";
import ScrollToTop from "./Components/ScrollToTop";
import { ModalProvider } from "./Context/ModalContext";
import AutoPopupModal from "./Components/AutoPopupModal";
//About Us

import HomePage from "./Pages/HomePage";
import ContactUs from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import MissionVision from "./Pages/MissionVision";
import OurTeam from "./Pages/OurTeam";
import OurProducts from "./Pages/OurProducts";
import TestimonialsPage from "./Pages/TestimonialsPage";
import CompanyOverview from "./Pages/CompanyOverview";
import Certifications from "./Pages/Certifications";
import ServicesPage from "./Pages/Services";
import BlogPage from "./Pages/Blog";
import Careers from "./Pages/Careers";

// Service Pages
import AllServices from "./Pages/Services/AllServices";
import WebDevelopment from "./Pages/Services/WebDevelopment";
import AIML from "./Pages/Services/AIML";
import SoftwareDevelopment from "./Pages/Services/SoftwareDevelopment";
import EnterpriseSystems from "./Pages/Services/EnterpriseSystems";
import CloudSolutions from "./Pages/Services/CloudSolutions";
import Cybersecurity from "./Pages/Services/Cybersecurity";
import DigitalTransformation from "./Pages/Services/DigitalTransformation";
import ITSupport from "./Pages/Services/ITSupport";

// About Us Pages
import Partners from "./Pages/Partners";

// Gallery Pages
import Albums from "./Pages/Gallery/Albums";
import Videos from "./Pages/Gallery/Videos";



function App() {
  return (
 <div className="bg-[#030410]">    
 <ModalProvider>
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
        <Route path="/about-us/certifications" element={<Certifications />} />
        <Route path="/about-us/partners" element={<Partners />} />
        <Route path="/about-us/ourproducts" element={<OurProducts />} />
        <Route path="/about-us/ourtestimonials" element={<TestimonialsPage />} />
         <Route path="/service" element={<ServicesPage />} />
         <Route path="/services/all" element={<AllServices />} />
         <Route path="/services/website-development" element={<WebDevelopment />} />
         <Route path="/services/ai-ml" element={<AIML />} />
         <Route path="/services/software-development" element={<SoftwareDevelopment />} />
         <Route path="/services/enterprise-systems" element={<EnterpriseSystems />} />
         <Route path="/services/cloud" element={<CloudSolutions />} />
         <Route path="/services/cybersecurity" element={<Cybersecurity />} />
         <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
         <Route path="/services/it-support" element={<ITSupport />} />
         <Route path="/gallery/albums" element={<Albums />} />
         <Route path="/gallery/videos" element={<Videos />} />
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
