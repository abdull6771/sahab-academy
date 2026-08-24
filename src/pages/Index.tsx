import HomeHero from "@/components/home/HomeHero";
import TrustStrip from "@/components/home/TrustStrip";
import Introduction from "@/components/home/Introduction";
import Pathways from "@/components/home/Pathways";
import HomeDestinations from "@/components/home/HomeDestinations";
import HomeFeatures from "@/components/home/HomeFeatures";
import HomeExperience from "@/components/home/HomeExperience";
import CampusMosaic from "@/components/home/CampusMosaic";
import ProprietorFeature from "@/components/home/ProprietorFeature";
import AlumniTeaser from "@/components/home/AlumniTeaser";
import AdmissionsCta from "@/components/home/AdmissionsCta";
import Seo from "@/components/layout/Seo";

const Index = () => {
  return (
    <>
      <Seo
        title="Sahab Academy | Nursery, Primary & Secondary School, Babura"
        description="Sahab Academy is a nursery, primary, and secondary school in Babura Local Government, Jigawa State — careful teaching for local families."
      />
      <HomeHero />
      <TrustStrip />
      <Introduction />
      <Pathways />
      <HomeDestinations />
      <HomeFeatures />
      <HomeExperience />
      <CampusMosaic />
      <ProprietorFeature />
      <AlumniTeaser />
      <AdmissionsCta />
    </>
  );
};

export default Index;
