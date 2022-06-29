import AboutMe from "../components/AboutMe/about-me";
import Hero from "../components/Hero";
import { MainContainer } from "./styes";


function HomePage() {
  return (
    <MainContainer>
      <Hero />
      <AboutMe />
    </MainContainer>
  )
};

export default HomePage;