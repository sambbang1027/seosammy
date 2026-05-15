import IntroSection from "./components/sections/IntroSection";
import AboutMe from "./components/sections/AboutMeSection";

export default function Home() {
  return (
      <main>
        <IntroSection />
        
      <section id="about">
        <AboutMe />
      </section>

      </main>
  );
}
