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
  Instagram as InstagramIcon,
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
  createObject(FacebookIcon, "https://facebook.com/MuhammadMinhaj2"),
  createObject(GitHubIcon, "https://github.com/MuhammadMinhaj"),
  createObject(LinkedInIcon, "https://linkedin.com/in/Muhammad-Minhaj"),
  createObject(TwitterIcon, "https://twitter.com/withMinhaj"),
  createObject(InstagramIcon, "https://www.instagram.com/MuhammadMinhaj"),
];
const SocialMedia = (props) => {
  return (
    <div>
      {socialIcons.map((social, i) => (
        <IconButton key={i} color="inherit" href={social.link} target="blank">
          {<social.icon />}
        </IconButton>
      ))}
    </div>
  );
};

export default SocialMedia;
