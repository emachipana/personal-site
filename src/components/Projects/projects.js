import { useTheme } from "../../context/theme-context";
import { projects } from "../../data/projects";
import * as Style from "./styles";
import { Bounce } from "react-reveal";

function Projects() {
  const { theme } = useTheme();

  return (
    <Style.Container>
      <Bounce right>
        <Style.Title>Portfolio</Style.Title>
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
    </Style.Container>
  );
}

export default Projects;
