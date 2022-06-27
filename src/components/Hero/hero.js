import { useTheme } from "../../context/theme-context";
import * as Style from "./styles";
import { Fade } from "react-reveal";

function Hero() {
  const { theme } = useTheme();

  return (
    <Style.Container>
      <Fade left>
        <Style.Info>
          <Style.Detail theme={theme}>
            Hi I'm <Style.Name>Enmanuel</Style.Name>{" "}
            <Style.Text>Full Stack Web Developer</Style.Text>
          </Style.Detail>
        </Style.Info>
      </Fade>
      <Fade right>
        <Style.Image src="./image.png"/>
      </Fade>
    </Style.Container>
  );
};

export default Hero;