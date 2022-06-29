import { useTheme } from "../../context/theme-context";
import * as Style from "./styles";

function AboutMe() {
  const { theme } = useTheme();

  return (
    <Style.Container>
      <Style.Title>About Me</Style.Title>
      <Style.Text theme={theme}>
          I'm a Full-Stack Web Developer 💻 with experience
          building high quality websites 💪
          I always try to be the one leading the team 🤓
          I consider myself passionate
          about technology and eternally
          self-taught 🧠 I'm always open
          to learning new technologies.
      </Style.Text>
    </Style.Container>
  );
}

export default AboutMe;
