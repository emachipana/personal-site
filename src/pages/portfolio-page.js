import { useParams } from "react-router-dom";
import Projects from "../components/Projects";
import Ruby from "../components/Projects/Ruby";
import * as Style from "./styes";

function PortfolioPage() {
  const params = useParams();

  return (
    <Style.MainContainer>
      { 
        !params.name
        ?
        <Projects /> 
        :
        (params.name === "ruby" && <Ruby />) ||
        (params.name === "rails" && <h1>Rails</h1>) ||
        (params.name === "javascript" && <h1>Javascript</h1>) ||
        (params.name === "react" && <h1>React</h1>)
      }
    </Style.MainContainer>
  );
}

export default PortfolioPage;
