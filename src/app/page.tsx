// app/page.tsx
import MobileBottomNav from "@/components/MobileBottomNav";
import { ClinicalTopStrip } from "../components/HomeComponents/TopStrip";
import { StatsStrip } from "../components/HomeComponents/StatsStrip";
import { InternationalPatientServices } from "../components/HomeComponents/Services";
import SpecializedTransplantPrograms from "../components/HomeComponents/Specialized";
import TreatmentJourney from "../components/HomeComponents/Treatment";
import ExperiencedTeamSection from "../components/HomeComponents/Experience";
import AdvancedMedicalTechnologies from "../components/HomeComponents/Technologies";
import AwardsSection from "../components/HomeComponents/Awards";
import PatientStoriesSection from "../components/HomeComponents/Stories";
import ShardaGroupsSection from "../components/HomeComponents/Groups";
import HomeHeader from "@/components/HomeHeader";
import HomeFooter from "@/components/HomeFooter";
import HeroSection from "../components/HomeComponents/HeroSection";
import MedicalSpecialtiesSection from "../components/HomeComponents/Specialities";
import MedicalExpertsSection from "../components/HomeComponents/Experts";
import InfrastructureSection from "../components/HomeComponents/Infrastructure";
import WhyChooseUs from "../components/HomeComponents/WhyChooseUs";


export default function Home() {
  return (
    <div className="min-h-screen w-screen">
      <HomeHeader />
      <div className="pt-16">
        <HeroSection />
        <StatsStrip />
        {/* <InternationalPatientServices /> */}
        <MedicalSpecialtiesSection />
        <SpecializedTransplantPrograms />
        <TreatmentJourney />
        <WhyChooseUs />
        <MedicalExpertsSection />
        <InfrastructureSection />
        <AdvancedMedicalTechnologies />
        <AwardsSection />
        <PatientStoriesSection />
        <ShardaGroupsSection />
        <MobileBottomNav />
      </div>
      <HomeFooter />
    </div>
  );
}
