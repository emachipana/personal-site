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
          />,
    projects: [
      {
        name: "CalenCLI",
        description: "This project simulates a personal calendar, it uses the basic concepts of ruby, here you can manage your day to day",
        tags: ["Dates", "Methods", "Loops"],
        image: "",
        to: "https://github.com/emachipana/CalenCLI"
      },
      {
        name: "Clivia Generator",
        description: "A basic game in ruby where we consume an api and generate 10 random questions. We also manage the Score of each user",
        tags: ["HTTP Requests", "Classes", "JSON", "Files"],
        image: "",
        to: "https://github.com/emachipana/clivia-generator"
      },
      {
        name: "Expensable CLI",
        description: "Expensable is an expense/income tracker app that exposes an API to allow the developer to freely build their own interfaces to interact with the app data",
        tags: ["HTTP Requests", "Classes", "JSON"],
        image: "",
        to: "https://github.com/emachipana/expensable-cli"
      },
      {
        name: "Pokemon Ruby",
        description: "This project consists to build a very close recreation of the classic Pokemon game",
        tags: ["Classes", "Loops", "algorithms"],
        image: "",
        to: "https://github.com/emachipana/pokemon-ruby"
      }
    ]
  },
  {
    name: "Rails Projects",
    to: "rails",
    icon: <SiRubyonrails
            size="70px"
            color="#C22200"
          />,
    projects: [
      {
        name: "Insights",
        description: "Insights is a local, global-oriented measurement and data analytics",
        tags: ["PLpgSQL", "Relational Database"],
        image: "",
        to: "https://github.com/emachipana/insights"
      },
      {
        name: "Somesplash",
        description: "This project simulates a page where you can upload images and classify them",
        tags: ["Relational Database", "Devise"],
        image: "",
        to: "https://github.com/emachipana/somesplash"
      },
      {
        name: "Tweetable",
        description: "It is a clone of twitter where you can post tweets, retweets, like and visit the profile of others",
        tags: ["Relational Database", "Conditionals"],
        image: "",
        to: "https://github.com/emachipana/tweetable-c6"
      },
      {
        name: "Centro Vacacional API",
        description: "It is an API for a 3-star hotel, with customer service and basic services",
        tags: ["API", "Bcrypt"],
        image: "",
        to: "https://github.com/emachipana/centro-vacacional-api"
      }
    ]
  },
  {
    name: "Javascript Projects",
    to: "javascript",
    icon: <SiJavascript
            size="55px"
            color="#FFCC00"
          />,
    projects: [
      {
        name: "Organizable",
        description: "Keep track of all your projects and task with this revolutionary",
        tags: ["Authentication", "API Requests", "Session Storage"],
        image: "",
        to: "https://github.com/emachipana/js-organizable"
      },
      {
        name: "Keepable",
        description: "Keepable is a software where you can add and remove notes",
        tags: ["Rendering", "Local Storage"],
        image: "",
        to: "https://github.com/emachipana/keepable"
      },
      {
        name: "Contactable",
        description: "Keep track of contact emails and phone numbers in your local memory (your brain) is something from the past",
        tags: ["Authentication", "API Requests", "Local Storage"],
        image: "",
        to: "https://github.com/emachipana/contactable"
      }
    ]
  },
  {
    name: "React Projects",
    to: "react",
    icon: <GrReactjs
            size="55px"
            color="#61CFEE"
          />,
    projects: [
      {
        name: "Github Stats",
        description: "You can search for github users from all over the world and read their public information",
        tags: ["Authentication", "API Requests", "emotion", "router"],
        image: "",
        to: "https://github.com/emachipana/github-stats"
      },
      {
        name: "Expensable Session",
        description: "This is a hands-on session form in React, where we consume the Expensable API",
        tags: ["Authentication", "API Requests"],
        image: "",
        to: "https://github.com/emachipana/expensable-session"
      },
      {
        name: "Personal Site",
        description: "This is my personal repo, where you can know a little more about me",
        tags: ["emotion", "router", "animation", "react-icons"],
        image: "",
        to: "https://github.com/emachipana/personal-site"
      }
    ]
  }
];
