import AboutMe from "../components/AboutMe/about-me";
import Hero from "../components/Hero";
import MySkills from "../components/MySkills/my-skills";
import { MainContainer } from "./styes";

function HomePage() {
  return (
    <MainContainer>
      <Hero />
      <AboutMe />
      <MySkills />
    </MainContainer>
  )
};

export default HomePage;