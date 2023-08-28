import React  from "react";
import HeroSection from "./HeroSection";
import FindDoctor from "./FindDoctor";
import PatientsOnBoeard from "./PatientsOnBoeard";
import WhyMediHub from "./WhyMediHub";
import FreqAskQuestion from "../../Components/FreqAskQuestion";
import Footer from "../../Components/Footer";

const LandingPage = () => {
 
  return (
    <>
      <div>
        <HeroSection />
        <FindDoctor />
        <PatientsOnBoeard />
        <WhyMediHub />
        <FreqAskQuestion />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
