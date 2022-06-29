import AboutMe from "../components/AboutMe/about-me";
import Hero from "../components/Hero";
import MySkills from "../components/MySkills/my-skills";
import { MainContainer, LinkTo } from "./styes";
import { BsArrowReturnRight } from "react-icons/bs";

function HomePage() {
  return (
    <MainContainer>
      <Hero />
      <AboutMe />
      <MySkills />
      <LinkTo to="/portfolio">
        See Projects
        <BsArrowReturnRight />
      </LinkTo>
    </MainContainer>
  )
};

export default HomePage;