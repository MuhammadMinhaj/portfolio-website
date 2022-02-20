/**
 * Date:16/12/2020
 * Author: Muhammad Minhaj
 * Title: Website Slider
 * Description: This is a Website Slider
 * **/

//  Included Third Pertty Components Or Packages
import { Button, Typography } from "@material-ui/core";
// Included Custom Packages or Components
import styled from "../../styles/slider.module.css";
import { SmoothScrollLink } from "./common";
import SocialMedia from "./Social";

const Slider = () => {
  return (
    <section>
      <div className={styled.slider}>
        <span
          style={{
            lineHeight: "2",
            display: "block",
            fontSize: "1.17em",
            fontWeight: "600",
          }}
        >
          Hey there!
        </span>
        <span className={styled.title1}>I'm</span>

        <h1 className={styled.title2}>Muhammad Minhaj</h1>
        <Typography color="secondary" variant="h5" component="h2">
          Full-Stack Web & Mobile Applications Developer
        </Typography>
        <Typography variant="overline" component="h3">
          Web Developer & Apps Developer & Programmer
        </Typography>
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
          href="https://muhammadminhaj.github.io"
          target="_blank"
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
