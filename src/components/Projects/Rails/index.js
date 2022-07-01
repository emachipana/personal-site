import { useTheme } from "../../../context/theme-context";
import { projects } from "../../../data/projects";
import { Container, Title } from "../../../pages/styes";
import * as Style from "./../styles";
import { BsGithub } from "react-icons/bs";

function Rails() {
  const { theme } = useTheme();
  
  return (
    <Container direction="column" style={{margin: "5rem 0"}}>
      <Title style={{margin: "1rem 0"}}>Rails</Title>
      <Style.Projects>
        { projects[1].projects.map((project, index) => (
          <Style.Project
            theme={theme}
            key={index}
          >
            <Style.Name>{ project.name }</Style.Name>
            <Style.Description>{ project.description }</Style.Description>
            <Style.Tags>
              { project.tags.map((tag, index) => (
                <Style.Tag theme={theme} key={index}>{ tag }</Style.Tag>
              )) }
            </Style.Tags>
            <Style.Image src={project.image} alt="project-image"/>
            <Style.ButtonTo 
              theme={theme}
              href={project.to}
              target="_blank"
              >
                Repo
                { <BsGithub /> }
            </Style.ButtonTo>
          </Style.Project>
        )) }
      </Style.Projects>
    </Container>
  );
}

export default Rails;