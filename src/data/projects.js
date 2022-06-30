import { SiJavascript, SiRubyonrails } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { DiRubyRough } from "react-icons/di";

export const projects = [
  {
    name: "Ruby Projects",
    to: "ruby",
    icon: <DiRubyRough
            size="65px"
            color="#C91E00"
          />
  },
  {
    name: "Rails Projects",
    to: "rails",
    icon: <SiRubyonrails
            size="70px"
            color="#C22200"
          />
  },
  {
    name: "Javascript Projects",
    to: "javascript",
    icon: <SiJavascript
            size="55px"
            color="#FFCC00"
          />
  },
  {
    name: "React Projects",
    to: "react",
    icon: <GrReactjs
            size="55px"
            color="#61CFEE"
          />
  }
];
