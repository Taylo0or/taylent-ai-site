import Hero from "@/components/home/hero";
import Models from "@/components/home/models";
import Capabilities from "@/components/home/capabilities";
import Integrations from "@/components/home/integrations";
import QuickStart from "@/components/home/quick-start";
import UseCases from "@/components/home/use-cases";
import ThreeSteps from "@/components/home/three-steps";
import CTA from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Models />
      <Capabilities />
      <Integrations />
      <QuickStart />
      <UseCases />
      <ThreeSteps />
      <CTA />
    </>
  );
}
