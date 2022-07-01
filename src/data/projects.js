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
        image: "https://i.ibb.co/3yGWXKM/calenCLI.png",
        to: "https://github.com/emachipana/CalenCLI"
      },
      {
        name: "Clivia Generator",
        description: "A basic game in ruby where we consume an api and generate 10 random questions. We also manage the Score of each user",
        tags: ["HTTP Requests", "Classes", "JSON", "Files"],
        image: "https://i.ibb.co/T2y8wwK/clivia.png",
        to: "https://github.com/emachipana/clivia-generator"
      },
      {
        name: "Expensable CLI",
        description: "Expensable is an expense/income tracker app that exposes an API to allow the developer to freely build their own interfaces to interact with the app data",
        tags: ["HTTP Requests", "Classes", "JSON"],
        image: "https://hilarious-sunflower-706e73.netlify.app/assets/img/project_images/expensablecli.png",
        to: "https://github.com/emachipana/expensable-cli"
      },
      {
        name: "Pokemon Ruby",
        description: "This project consists to build a very close recreation of the classic Pokemon game",
        tags: ["Classes", "Loops", "algorithms"],
        image: "https://hilarious-sunflower-706e73.netlify.app/assets/img/project_images/pokemon.png",
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
        name: "Somesplash",
        description: "This project simulates a page where you can upload images and classify them",
        tags: ["Relational Database", "Devise"],
        image: "https://i.ibb.co/zRMx8gp/somesplash.png",
        to: "https://github.com/emachipana/somesplash"
      },
      {
        name: "Tweetable",
        description: "It is a clone of twitter where you can post tweets, retweets, like and visit the profile of others",
        tags: ["Relational Database", "Conditionals"],
        image: "https://i.ibb.co/RHVZYXJ/tweetable.png",
        to: "https://github.com/emachipana/tweetable-c6"
      },
      {
        name: "Centro Vacacional API",
        description: "It is an API for a 3-star hotel, with customer service and basic services",
        tags: ["API Rest", "Bcrypt"],
        image: "https://rubyonrails.org/assets/images/opengraph.png",
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
        tags: ["Auth", "API Requests", "Session Storage"],
        image: "https://i.ibb.co/bPYqtJ2/organizable.png",
        to: "https://github.com/emachipana/js-organizable"
      },
      {
        name: "Keepable",
        description: "Keepable is a software where you can add and remove notes",
        tags: ["Rendering", "Local Storage"],
        image: "https://i.ibb.co/Hrdp3pv/keepable.png",
        to: "https://github.com/emachipana/keepable"
      },
      {
        name: "Contactable",
        description: "Keep track of contact emails and phone numbers in your local memory (your brain) is something from the past",
        tags: ["Authentication", "API Requests", "Local Storage"],
        image: "https://camo.githubusercontent.com/52b87e629ba1c2fe1edff97bf8e04958a0c8f2585dfa2d88d1156f4e53359489/68747470733a2f2f702d767666356d6a6d2e74342e6e302e63646e2e676574636c6f75646170702e636f6d2f6974656d732f3467756c70794e762f65373038313833372d306566352d343030382d616137652d6464343631623362393962312e6a70673f736f757263653d76696577657226763d3263656465363730393866363838616564343862613630666461363063303262",
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
        tags: ["Authentication", "API Requests", "emotion"],
        image: "https://i.ibb.co/zZN9SFw/github-stats.png",
        to: "https://github.com/emachipana/github-stats"
      },
      {
        name: "Expensable Session",
        description: "This is a hands-on session form in React, where we consume the Expensable API",
        tags: ["Authentication", "API Requests"],
        image: "https://i.ibb.co/6DM8B22/session.png",
        to: "https://github.com/emachipana/expensable-session"
      },
      {
        name: "Personal Site",
        description: "This is my personal repo, where you can know a little more about me",
        tags: ["emotion", "router", "animation", "react-icons"],
        image: "https://i.ibb.co/hscTR6h/personal-site.png",
        to: "https://github.com/emachipana/personal-site"
      }
    ]
  }
];
