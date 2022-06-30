import { useTheme } from "../../context/theme-context";
import { skills } from "../../data/skills";
import * as Styles from "./styles";
import { LightSpeed } from "react-reveal";

function MySkills() {
  const { theme } = useTheme();
  
  return (
    <Styles.Container>
      <LightSpeed right>
        <Styles.Title>My Skills</Styles.Title>
        <Styles.Cards>
          { skills.map(skill => (
            <Styles.Card theme={theme} key={skill.name}>
              { skill.icon }
              <h2>{skill.name}</h2>
            </Styles.Card>
          )) }
        </Styles.Cards>
      </LightSpeed>
    </Styles.Container>
  );
}

export default MySkills;
