import HomeHeader from "@/components/HomeHeader";
import HeroSection from "./components/HeroSection";
import MedicalExpertsSection from "./components/MedicalExpertiseSection";
import MedicalJourneySection from "./components/MedicalJourneySection";
import RequestCallBackFormFixed from "./components/RequestCallbackFormFixed";
import SpecialtiesSection from "./components/SpecialitiesSection";
import TechnologiesSection from "./components/TechnologiesSection";
import TestimonialSection from "./components/TestimonialSection";
import TreatmentsSection from "./components/TreatmentSection";
import HomeFooter from "@/components/HomeFooter";

export default function HomePage() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center justify-center pt-16">
        <HeroSection />
        <div className="md:block hidden">
          <RequestCallBackFormFixed />
        </div>
        <SpecialtiesSection />
        <TreatmentsSection />
        <MedicalExpertsSection />
        <MedicalJourneySection />
        <TechnologiesSection />
        <TestimonialSection />
      </div>
      <HomeFooter />
    </>
  );
}
