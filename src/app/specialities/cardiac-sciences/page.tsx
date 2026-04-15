import AdvancedMedicalTechnologies from "@/app/international-patients-2/components/Technologies";
import Ailments from "./components/Ailments";
import CardiologyCareSection from "./components/CardiologyCare";
import DoctorProfileSection from "./components/DoctorProfileSection";
import OurTreatments from "./components/OurTreatment";
import SubSpecialization from "./components/SubSpecialization";
import PatientStoriesSection from "@/app/international-patients-2/components/Stories";
import FAQs from "./components/FaqSection";


export default function CardiacPage() {
  return (
    <div className="min-h-screen w-screen pt-20">
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
