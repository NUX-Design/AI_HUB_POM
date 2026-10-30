import SiteHeader from "./components/SiteHeader.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import ChaptersSection from "./sections/ChaptersSection.jsx";
import ModelMatrixSection from "./sections/ModelMatrixSection.jsx";
import AgentWorkflowsSection from "./sections/AgentWorkflowsSection.jsx";
import TelemetrySection from "./sections/TelemetrySection.jsx";
import PricingSection from "./sections/PricingSection.jsx";
import GetStartedSection from "./sections/GetStartedSection.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className={'bg-surface-canvas font-body-md text-on-surface antialiased overflow-x-clip selection:bg-primary-container selection:text-on-primary-container'}>
        <SiteHeader />
        <main className={'w-full pt-28 bg-surface-canvas min-h-screen'} id={'main-content'}>
          <div className={'flex flex-col w-full text-on-surface'}>
            <HeroSection />
            <ChaptersSection />
            <ModelMatrixSection />
            <AgentWorkflowsSection />
            <TelemetrySection />
            <PricingSection />
            <GetStartedSection />
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
