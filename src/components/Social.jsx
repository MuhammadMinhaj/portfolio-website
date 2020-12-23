/**
 * Date:16/12/2020
 * Author: Muhammad Minhaj
 * Title: Website Slider
 * Description: This is a Website Slider
 * **/

//  Included Third Pertty Components Or Packages
import { IconButton } from "@material-ui/core";
import {
  Facebook as FacebookIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
} from "@material-ui/icons";
// Included Custom Packages or Components

function createObject(icon, link) {
  return {
    icon: icon,
    link: link,
  };
}
const socialIcons = [
  createObject(FacebookIcon, "https://facebook.com/"),
  createObject(GitHubIcon, "https://github.com/"),
  createObject(LinkedInIcon, "https://linkedin.com/"),
  createObject(TwitterIcon, "https://twitter.com/"),
];
const SocialMedia = (props) => {
  return (
    <div>
      {socialIcons.map((social, i) => (
        <IconButton key={i} color="inherit" href={social.link}>
          {<social.icon />}
        </IconButton>
      ))}
    </div>
  );
};

export default SocialMedia;
