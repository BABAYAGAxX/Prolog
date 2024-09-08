// import getMetadata from "@/lib/seo";
import { HeroSection } from "@/components";
import HealthcareCards from "@/components/UI/HealthCards";
import ServiceProvider from "@/components/UI/ServiceProvider";
import Cards from "@/components/UI/Cards";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HealthcareCards />
      <ServiceProvider />
      <Cards />
    </main>
  );
}
