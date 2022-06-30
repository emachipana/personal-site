import { useTheme } from "../../context/theme-context";
import * as Style from "./styles";
import { Slide } from "react-reveal";
import { Title } from "../../pages/styes";

function AboutMe() {
  const { theme } = useTheme();

  return (
    <Style.Container>
      <Slide left>
        <Title>About Me</Title>
        <Style.Text theme={theme}>
            I'm a Full-Stack Web Developer 💻 with experience
            building high quality websites 💪
            I always try to be the one leading the team 🤓
            I consider myself passionate
            about technology and eternally
            self-taught 🧠 I'm always open
            to learning new technologies.
        </Style.Text>
      </Slide>
    </Style.Container>
  );
}

export default AboutMe;
