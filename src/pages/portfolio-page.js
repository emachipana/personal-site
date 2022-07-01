import { useParams } from "react-router-dom";
import Projects from "../components/Projects";
import Javascript from "../components/Projects/Javascript";
import Rails from "../components/Projects/Rails";
import React from "../components/Projects/React";
import Ruby from "../components/Projects/Ruby";
import * as Style from "./styes";
import { Flip } from "react-reveal";
import NotFound from "./notfound-page";

function PortfolioPage() {
  const params = useParams();

  return (
    <Style.MainContainer>
      { 
        !params.name
        ?
        <Projects /> 
        :
        <Flip left>
          {
          (params.name === "ruby" && <Ruby />) ||
          (params.name === "rails" && <Rails />) ||
          (params.name === "javascript" && <Javascript />) ||
          (params.name === "react" && <React />) ||
          (!["ruby", "rails", "react", "javascript"].includes(params.name) && <NotFound />)
          }
        </Flip>
      }
    </Style.MainContainer>
  );
}

export default PortfolioPage;
