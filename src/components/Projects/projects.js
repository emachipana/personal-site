import { useTheme } from "../../context/theme-context";
import { projects } from "../../data/projects";
import * as Style from "./styles";
import { Bounce } from "react-reveal";
import { Container, Title } from "../../pages/styes";

function Projects() {
  const { theme } = useTheme();

  return (
    <Container direction="column" margin="2rem">
      <Bounce right>
        <Title>Portfolio</Title>
        <Style.Section>
          { projects.map((project, index) => (
            <Style.Card
              key={index}
              theme={theme}
              to={project.to}
            >
              { project.icon }
              { project.name }
            </Style.Card>
          )) }
        </Style.Section>
      </Bounce>
    </Container>
  );
}

export default Projects;
