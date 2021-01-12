/**
 * Date:22/12/2020
 * Author: Muhammad Minhaj
 * Title: Skills Data
 * Description: Skills related all data store on skills object to show on the skills section of website
 * **/

import helperMethods from "./function";
const { createSkillsObject } = helperMethods;

/**
 * Methods: createSkillsObject
 * Description: createSkillsObject will receved five parameters to return one object.
 * List Of Parameters:
 * 1=>Title
 * 2=>Progress
 * 3=>Src/Source Of Images
 * 4=>Url
 * 5=>Text
 * Example of Parameters: createNavbarObject('Demo title','99%','./source','Technologies link','About Technologies')
 * **/

const skills = {
  webAndapps: [
    createSkillsObject(
      "Node Js",
      "85%",
      "/static/icons/nodejs1.svg",
      "https://nodejs.org",
      "Node js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.Node js is designed to build scalable network applications as well as for real-time Web applications, real-time communication programs and browser games."
    ),
    createSkillsObject(
      "Express Js",
      "90%",
      "/static/icons/expressjs.svg",
      "https://expressjs.com",
      "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
    ),

    createSkillsObject(
      "React Js",
      "85%",
      "/static/icons/react-native.svg",
      "https://reactjs.org",
      "React is a JavaScript library for building user interfaces or UI components.React can be used as a base in the development of single-page or mobile applications."
    ),
    createSkillsObject(
      "React Native",
      "85%",
      "/static/icons/react-native1.svg",
      "https://reactnative.dev/",
      "React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.Use a little—or a lot. You can use React Native today in your existing Android and iOS projects or you can create a whole new app from scratch."
    ),
    createSkillsObject(
      "Next Js",
      "80%",
      "/static/icons/nextjs.svg",
      "https://nextjs.org/",
      "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed."
    ),
    createSkillsObject(
      "Redux",
      "80%",
      "/static/icons/redux.svg",
      "https://redux.js.org",
      "Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger."
    ),
    createSkillsObject(
      "MongoDB",
      "80%",
      "/static/icons/mongodb.svg",
      "https://www.mongodb.com",
      "MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.MongoDB is a document database, which means it stores data in JSON-like documents. We believe this is the most natural way to think about data, and is much more expressive and powerful than the traditional row/column model."
    ),
    createSkillsObject(
      "Material UI",
      "85%",
      "/static/icons/material-ui.svg",
      "https://material-ui.com",
      "Material-UI is a open source react framework.It\n's use React components for faster and easier web development."
    ),
    createSkillsObject(
      "Bootstrap",
      "95%",
      "/static/icons/bootstrap.svg",
      "https://getbootstrap.com",
      "Bootstrap is a CSS freamework for Quickly design and customize responsive mobile-first sites, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."
    ),
  ],
  programming: [
    createSkillsObject(
      "Javascript",
      "85%",
      "/static/icons/javascript.svg",
      "https://javascript.info",
      "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display /static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc."
    ),
    createSkillsObject(
      "Python",
      "45%",
      "/static/icons/python.svg",
      "https://www.python.org",
      "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.Python simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse."
    ),
   
  ],
  tools: [
    createSkillsObject(
      "Git",
      "80%",
      "/static/icons/git.svg",
      "https://git-scm.com/",
      "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency."
    ),
    createSkillsObject(
      "Github",
      "95%",
      "/static/icons/github.svg",
      "https://github.com/",
      "GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere."
    ),
    createSkillsObject(
      "Figma",
      "90%",
      "/static/icons/figma.svg",
      "https://www.figma.com/",
      "Build better products as a team. Design, prototype, and gather feedback all in one place with Figma."
    ),
  ],
};

export default skills;
