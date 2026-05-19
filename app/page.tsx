import IntroSection from "./components/sections/IntroSection";
import AboutMe from "./components/sections/AboutMeSection";
import EducationSection from "./components/sections/EducationSection";
import SkillSection from "./components/sections/SkillSection"

export default function Home() {
  return (
      <main>
        <IntroSection />
        
      <section id="about">
        <AboutMe />
        <EducationSection />
      </section>
      <section id="skill">
        <SkillSection />
      </section>


      </main>
  );
}
