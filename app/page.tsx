import IntroSection from "./components/sections/IntroSection";
import AboutMe from "./components/sections/AboutMeSection";
import EducationSection from "./components/sections/EducationSection";
import SkillSection from "./components/sections/SkillSection";
import ProjectSection from "./components/sections/ProjectSection";
import SideProjectSection from "./components/sections/SideProjectSection";

export default function Home() {
  return (
    <main>
      <IntroSection />
      <section id="about">
        <AboutMe />
        <EducationSection />
      </section>
      <section id="project">
        <ProjectSection />
        <SideProjectSection />
      </section>
            <section id="skill">
        <SkillSection />
      </section>
    </main>
  );
}
