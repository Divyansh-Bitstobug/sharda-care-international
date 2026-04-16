import AdvancedMedicalTechnologies from "@/components/HomeComponents/Technologies";
import Ailments from "./components/Ailments";
import CardiologyCareSection from "./components/CardiologyCare";
import DoctorProfileSection from "./components/DoctorProfileSection";
import OurTreatments from "./components/OurTreatment";
import SubSpecialization from "./components/SubSpecialization";
import PatientStoriesSection from "@/components/HomeComponents/Stories";
import FAQs from "./components/FaqSection";
import { CardiacTopStrip } from "./components/CardiacTopStrip";


export default function CardiacPage() {
  return (
    <div className="min-h-screen w-screen pt-20">
      <CardiacTopStrip />
      <CardiologyCareSection />
      <DoctorProfileSection />
      <OurTreatments />
      <Ailments />
      <AdvancedMedicalTechnologies />
      <SubSpecialization />
      <PatientStoriesSection />
      <FAQs />
    </div>
  );
}
