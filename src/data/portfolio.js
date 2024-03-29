/**
 * Date:22/12/2020
 * Author: Muhammad Minhaj
 * Title: Portfolio Data
 * Description:  Portfolio related all data store on portfolio object to show on the portfolio section of website
 * **/

// Included helperMethods for create objects
import helperMethods from "./function";

const { createPortfolioObject } = helperMethods;
/**
 * Methods: createPortfolioObject
 * Description: createPortfolioObject will receved eleven parameters to return one object.
 * List Of Parameters:
 * 1=>Date
 * 2=>Time/Days
 * 3=>Thumbnail
 * 4=>Url
 * 5=>Source-Code
 * 6=>Type
 * 7=>Title
 * 8=>Tech/Technologies (Must be use "," for multiple technologies)
 * 9=>Client-Name
 * 10=>Industry-Name
 * 11=>Project-Description
 * Example of Parameters:
 * => createPortfolioObject('02/02/2020','7days','../srcOfThumbnail','https://demo-project.com','https://github.com/username/demo-project','Information & Technology','Web Host Bd','NextJs,ReactJs','Something','Web-Bd','something tell about project')
 * **/

let makeWebData = (n) => {
  return Array(n)
    .fill(",")
    .map((e, i) => {
      return createPortfolioObject(
        `0${i + 1}/0${i + 1}/2021`,
        `${i}days`,
        "/static/images/default-thumbnail.jpg",
        "https://muhammadminhaj.github.io",
        "https://github.com/MuhammadMinhaj",
        "Information & Technology",
        `Demo(${i + 1})`,
        "NodeJs, NestJs, NextJs, ReactJs",
        "Demo",
        "Demo",
        "This is just a demo item, not a real website or project. All projects are available on https://muhammadminhaj.github.io. Thanks"
      );
    });
};

const portfolio = [
  {
    name: "Web Apps",
    projects: [...makeWebData(6)],
  },
  {
    name: "Mobile Apps",
    projects: makeWebData(2),
  },
  {
    name: "Desktop Software",
    projects: makeWebData(3),
  },
  {
    name: "Others apps",
    projects: makeWebData(5),
  },
];

export default portfolio;
