import { SiJavascript, SiRubyonrails } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { DiGit, DiCss3 } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";
import { BsGithub } from "react-icons/bs";
import { DiRubyRough } from "react-icons/di";

export const skills = [
  {
    name: "React Js",
    icon: <GrReactjs 
            size="50px"
            color="#61CFEE"
          />
  },
  {
    name: "Rails",
    icon: <SiRubyonrails 
            size="50px"
            color="#C22200"
          />
  },
  {
    name: "Javascript",
    icon: <SiJavascript 
            size="45px"
            color="#FFCC00"
          />
  },
  {
    name: "Ruby",
    icon: <DiRubyRough 
            size="45px"
            color="#C91E00"
          />
  },
  {
    name: "HTML",
    icon: <TiHtml5 
            size="50px"
            color="#EB471C"
          />
  },
  {
    name: "CSS",
    icon: <DiCss3 
            size="50px"
            color="#4893D3"
          />
  },
  {
    name: "Git",
    icon: <DiGit 
            size="50px"
            color="#EB4E29"
          />
  },
  {
    name: "Github",
    icon: <BsGithub 
            size="50px"
          />
  }
];
