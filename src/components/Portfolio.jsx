/**
 * Date:16/12/2020
 * Author: Muhammad Minhaj
 * Title: Website Slider
 * Description: This is a Website Slider
 * **/

// Included third pertty packages or components

import { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  useMediaQuery,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Chip,
} from "@material-ui/core";

// Included Material-Icons
import {
  GitHub as GitHubIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Public as PublicIcon,
} from "@material-ui/icons";

// Included custom packages or components or others...
import styled from "../../styles/portfolio.module.css";

// Included Portfolio Data
import data from "../data";

const { portfolio } = data;

const InfoText = ({ name, value, isDescription }) => (
  <div>
    <Typography variant="overline">{name}: </Typography>
    {isDescription ? (
      <Typography variant="body2" style={{ color: "#d5d5d5" }}>
        {value.length > 150 ? value.slice(0, 150) + "..." : value}
      </Typography>
    ) : (
      value
    )}
  </div>
);
InfoText.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isDescription: PropTypes.bool,
};
// Portfolio Card
const PortfolioCard = ({
  project: {
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
    description,
  },
}) => {
  const isSmallDevices = useMediaQuery("(max-width:600px)");
  return (
    <Grid item sm={4}>
      <Card className={styled.card} raised={true} elevation={7}>
        <CardActionArea href={url ? url : null} target="blank">
          {thumbnail && (
            <Image
              width={isSmallDevices ? 570 : 400}
              height={isSmallDevices ? 350 : 200}
              src={thumbnail}
            />
          )}

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>

            <InfoText name="Date" value={date} />
            <InfoText name="Client" value={client} />
            <InfoText name="Industry" value={industry} />
            <InfoText name="Type" value={type} />
            <InfoText name="Time" value={time} />
            <InfoText name="URL" value={url} />
            <InfoText
              name="Description"
              value={description}
              isDescription={true}
            />
            <br />
            <Typography variant="overline">Tech: </Typography>
            {tech &&
              tech
                .split(",")
                .map((t, i) => (
                  <Chip
                    key={i}
                    label={t}
                    variant="outlined"
                    size="small"
                    style={{ marginRight: "0.25rem", color: "#bdbdbd" }}
                  />
                ))}
          </CardContent>
        </CardActionArea>
        <CardActions
          style={{ borderTop: "1px solid #111a28", padding: "0.80rem 0.60rem" }}
        >
          <Button
            startIcon={url ? <PublicIcon /> : <VisibilityOffIcon />}
            variant="outlined"
            style={{ color: "#fff" }}
            color="secondary"
            disabled={url ? false : true}
            href={url}
            target="blank"
          >
            Live
          </Button>
          <Button
            startIcon={<GitHubIcon />}
            variant="outlined"
            style={{ color: "#fff" }}
            disabled={sourceCode ? false : true}
            href={sourceCode}
            target="blank"
          >
            Source
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
PortfolioCard.propTypes = {
  project: PropTypes.object.isRequired,
};
const Portfolio = () => {
  const [value, setValue] = useState(0);
  const isMobileDevice = useMediaQuery("(max-width:576px)");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section className={styled.portfolio}>
      <Tabs
        variant={isMobileDevice ? "scrollable" : "fullWidth"}
        value={value}
        onChange={handleChange}
        aria-label="Portfolio tabs"
        className={styled.tabs}
        scrollButtons="on"
      >
        {portfolio.map(({ name }, i) => (
          <Tab label={name} key={i} />
        ))}
      </Tabs>

      <Box py={3}>
        <Grid container spacing={3}>
          {portfolio[value].projects &&
            portfolio[value].projects.map((project, i) => (
              <PortfolioCard project={project} key={i} />
            ))}
        </Grid>
      </Box>

      <div style={{ textAlign: "center" }}>
        <Button color="secondary" variant="outlined" size="large">
          See More
        </Button>
      </div>
    </section>
  );
};

export default Portfolio;
