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

const portfolio = [
  {
    name: "Web Apps",
    projects: [
      createPortfolioObject(
        "02/02/2020",
        "7days",
        "/images/thumbnail.jpg",
        "https://demo-project.com",
        "https://github.com/username/demo-project",
        "Information & Technology",
        "Web Host Bd",
        "NextJs,ReactJs",
        "Something",
        "Web-Bd",
        "I can make API or rest API for spa applications and mobile applications and I also can connect API with your spa application or any other application to make the dynamic web application."
      ),
      createPortfolioObject(
        "02/02/2020",
        "7days",
        "/images/thumbnail.jpg",
        "https://demo-project.com",
        "https://github.com/username/demo-project",
        "Information & Technology",
        "Web Host Bd",
        "NextJs,ReactJs",
        "Something",
        "Web-Bd",
        "I can make API or rest API for spa applications and mobile applications and I also can connect API with your spa application or any other application to make the dynamic web application."
      ),
      createPortfolioObject(
        "02/02/2020",
        "7days",
        "/images/thumbnail.jpg",
        "https://demo-project.com",
        "https://github.com/username/demo-project",
        "Information & Technology",
        "Web Host Bd",
        "NextJs,ReactJs",
        "Something",
        "Web-Bd",
        "I can make API or rest API for spa applications and mobile applications and I also can connect API with your spa application or any other application to make the dynamic web application."
      ),
    ],
  },
  {
    name: "Mobile Apps",
    projects: [
      createPortfolioObject(
        "02/02/2020",
        "7days",
        "/images/thumbnail.jpg",
        "https://demo-project.com",
        "https://github.com/username/demo-project",
        "Information & Technology",
        "Mobile Host Bd",
        "NextJs,ReactJs",
        "Something",
        "Web-Bd",
        "something tell about project"
      ),
      createPortfolioObject(
        "02/02/2020",
        "7days",
        "/images/thumbnail.jpg",
        "https://demo-project.com",
        "https://github.com/username/demo-project",
        "Information & Technology",
        "Others Host Bd",
        "NextJs,ReactJs",
        "Something",
        "Web-Bd",
        "something tell about project"
      ),
    ],
  },
  {
    name: "Desktop Software",
    projects: [
      createPortfolioObject(
        "02/02/2020",
        "7days",
        "/images/thumbnail.jpg",
        "https://demo-project.com",
        "https://github.com/username/demo-project",
        "Information & Technology",
        "Desktop Host Bd",
        "NextJs,ReactJs",
        "Something",
        "Web-Bd",
        "something tell about project"
      ),
    ],
  },
  {
    name: "Others apps",
    projects: [
      createPortfolioObject(
        "02/02/2020",
        "7days",
        "/images/thumbnail.jpg",
        "https://demo-project.com",
        "https://github.com/username/demo-project",
        "Information & Technology",
        "Others Host Bd",
        "NextJs,ReactJs",
        "Something",
        "Web-Bd",
        "something tell about project"
      ),
    ],
  },
];

export default portfolio;
