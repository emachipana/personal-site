import { SiJavascript, SiRubyonrails } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { DiRubyRough } from "react-icons/di";

export const projects = [
  {
    name: "Ruby Projects",
    to: "/ruby",
    color: "#FF2200",
    icon: <DiRubyRough />
  },
  {
    name: "Rails Projects",
    to: "/rails",
    color: "#C71B00",
    icon: <SiRubyonrails />
  },
  {
    name: "Javascript Projects",
    to: "/javascript",
    color: "#F3DB00",
    icon: <SiJavascript />
  },
  {
    name: "React Projects",
    to: "/react",
    color: "#61CFEE",
    icon: <GrReactjs />
  }
];
