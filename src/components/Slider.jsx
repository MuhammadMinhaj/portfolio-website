/**
 * Date:16/12/2020
 * Author: Muhammad Minhaj
 * Title: Website Slider
 * Description: This is a Website Slider
 * **/

//  Included Third Pertty Components Or Packages
import { Typography, Button } from "@material-ui/core";

// Included Custom Packages or Components
import styled from "../../styles/slider.module.css";
import { SmoothScrollLink } from "./common";
import SocialMedia from "./Social";
const Slider = () => {
  return (
    <section>
      <div className={styled.slider}>
        <h3 style={{lineHeight:'2'}}>Hey there!</h3>
        <h1 className={styled.title1}>I'm</h1>

        <h1 className={styled.title2}>Md. Minhaj</h1>
        <Typography color="secondary" variant="h5">
          A Full Stack Developer
        </Typography>
        <Typography variant="overline">
          Web Designer & Web Developer & Programmer
        </Typography>
        <br />
        <br />
        <Typography variant="h6" color="secondary">
          Follow Me
        </Typography>
        <SocialMedia />
        <br />
        <Button
          variant="contained"
          color="secondary"
          style={{ marginRight: "0.5rem" }}
          size="large"
        >
          Get Resum
        </Button>
        <SmoothScrollLink to="about">
          <Button variant="outlined" color="secondary" size="large">
            About Me
          </Button>
        </SmoothScrollLink>
      </div>
    </section>
  );
};
export default Slider;
