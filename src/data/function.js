/**
 * Date:22/12/2020
 * Author: Muhammad Minhaj
 * Title: Function
 * Description: Created a lot of function for create objectional data to make a objects
 * **/

const helperMethodsObject = {};
/**
 * Methods: createNavbarObject
 * Description: createNavbarObject will receved tow parameters to return one object.
 * List Of Parameters:
 * 1=>Name
 * 2=>Href
 * Example of Parameters: createNavbarObject('Demo','/demo or #demo')
 * **/
helperMethodsObject.createNavbarObject = (name, href) => ({ name, href });

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

helperMethodsObject.createSkillsObject = (title, progress, src, url, text) => ({
  title,
  progress,
  src,
  url,
  text,
});

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

helperMethodsObject.createPortfolioObject = (
  date,
  time,
  thumbnail,
  url,
  sourceCode,
  type,
  title,
  tech,
  client,
  industry,
  description
) => ({
  date,
  time,
  thumbnail,
  url,
  sourceCode,
  type,
  title,
  tech,
  client: client ? client : "N/A",
  industry: industry ? industry : "N/A",
  description: description ? description : "N/A",
});

export default helperMethodsObject;
