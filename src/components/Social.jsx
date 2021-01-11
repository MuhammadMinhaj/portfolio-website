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
  Instagram as InstagramIcon,
} from "@material-ui/icons";
// Included Custom Packages or Components

function createObject(icon, link) {
  return {
    icon: icon,
    link: link,
  };
}
const socialIcons = [
  createObject(FacebookIcon, "https://facebook.com/dev.mdminhaj"),
  createObject(GitHubIcon, "https://github.com/dev-mdminhaj"),
  createObject(LinkedInIcon, "https://linkedin.com/in/dev-mdminhaj"),
  createObject(TwitterIcon, "https://twitter.com/dev_mdminhaj"),
  createObject(InstagramIcon, "https://www.instagram.com/dev_mdminhaj"),
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
