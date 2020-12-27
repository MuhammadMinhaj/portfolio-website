/**
 * Date:16/12/2020
 * Author: Muhammad Minhaj
 * Title: Website Slider
 * Description: This is a Website Slider
 * **/

//  Included Third Pertty Components Or Packages
import Image from "next/image";
import { Grid, Typography, Button } from "@material-ui/core";
// Included Custom Packages or Components
import { SmoothScrollLink } from "./common";
import styled from "../../styles/about.module.css";
import data from "../data";

const { imgSource, text } = data.about;

const Slider = () => {
  return (
    <section className={styled.about__section}>
      <Grid container>
        <Grid item sm={6}>
          <div className={styled.about__img_wrapper}>
            <Image
              src={imgSource}
              alt="Picture of the author"
              width={350}
              height={380}
              loading="eager"
              quality={100}
              className={styled.about__img}
            />
          </div>
        </Grid>
        <Grid item sm={6}>
          <div className={styled.about__text}>
            <Typography paragraph>{text}</Typography>

            <div className={styled.button__wrapper}></div>
            <Button
              color="secondary"
              variant="contained"
              style={{ marginRight: "0.5rem" }}
              size="large"
            >
              Get Resume
            </Button>
            <SmoothScrollLink to="skills">
              <Button size="large" color="secondary" variant="outlined">
                My Skill
              </Button>
            </SmoothScrollLink>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};
export default Slider;
