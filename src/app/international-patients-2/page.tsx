import MobileBottomNav from "@/components/MobileBottomNav";
import AwardsSection from "./components/Awards";
import ExperiencedTeamSection from "./components/Experience";
import ShardaGroupsSection from "./components/Groups";
import HeroSection from "./components/HeroSection";
import { InternationalPatientServices } from "./components/Services";
import { MedicalSpecialitiesSection } from "./components/Specialities";
import SpecializedTransplantPrograms from "./components/Specialized";
import { StatsStrip } from "./components/StatsStrip";
import PatientStoriesSection from "./components/Stories";
import AdvancedMedicalTechnologies from "./components/Technologies";
import TreatmentJourney from "./components/Treatment";
import { ClinicalTopStrip } from "./components/TopStrip";

export default function HomePage() {
  return (
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
  );
}
