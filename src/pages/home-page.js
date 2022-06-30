import AboutMe from "../components/AboutMe/about-me";
import Hero from "../components/Hero";
import MySkills from "../components/MySkills/my-skills";
import Footer from "../components/Footer";
import { MainContainer } from "./styes";

function HomePage() {
  return (
    <>
      <MainContainer>
        <Hero />
        <AboutMe />
        <MySkills />
      </MainContainer>
      <Footer />
    </>
  )
};

export default HomePage;