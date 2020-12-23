/**
 * Date:22/12/2020
 * Author: Muhammad Minhaj
 * Title: Navbar data
 * Description:  Navbar related all data store on navbar object to show on the navbar section of website
 * **/
import helperMethods from "./function";
const { createNavbarObject } = helperMethods;

/**
 * Methods: createNavbarObject
 * Description: createNavbarObject will receved tow parameters to return one object.
 * List Of Parameters:
 * 1=>Name
 * 2=>Href
 * Example of Parameters: createNavbarObject('Demo','/demo or #demo')
 * **/

const navbar = [
  createNavbarObject("Home", "/"),
  createNavbarObject("About", "#about"),
  createNavbarObject("Skills", "#skills"),
  createNavbarObject("Services", "#services"),
  createNavbarObject("Contact", "#contact"),
  createNavbarObject("Blog", "/blog"),
];

export default navbar;
