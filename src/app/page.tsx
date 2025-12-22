// app/page.tsx
import MobileBottomNav from "@/components/MobileBottomNav";
import { ClinicalTopStrip } from "./international-patients-2/components/TopStrip";
import { StatsStrip } from "./international-patients-2/components/StatsStrip";
import { InternationalPatientServices } from "./international-patients-2/components/Services";
import { MedicalSpecialitiesSection } from "./international-patients-2/components/Specialities";
import SpecializedTransplantPrograms from "./international-patients-2/components/Specialized";
import TreatmentJourney from "./international-patients-2/components/Treatment";
import ExperiencedTeamSection from "./international-patients-2/components/Experience";
import AdvancedMedicalTechnologies from "./international-patients-2/components/Technologies";
import AwardsSection from "./international-patients-2/components/Awards";
import PatientStoriesSection from "./international-patients-2/components/Stories";
import ShardaGroupsSection from "./international-patients-2/components/Groups";
import HomeHeader from "@/components/HomeHeader";
import HomeFooter from "@/components/HomeFooter";
import HeroSection from "./international-patients-2/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen w-screen">
      <HomeHeader />
      <div className="pt-16">
        <ClinicalTopStrip />
        <HeroSection />
        <StatsStrip />
        <InternationalPatientServices />
        <MedicalSpecialitiesSection />
        <SpecializedTransplantPrograms />
        <TreatmentJourney />
        <ExperiencedTeamSection />
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
