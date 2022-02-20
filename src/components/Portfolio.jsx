/**
 * Date:16/12/2020
 * Author: Muhammad Minhaj
 * Title: Website Slider
 * Description: This is a Website Slider
 * **/

// Included third pertty packages or components
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Grow,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
// Included Material-Icons
import {
  GitHub as GitHubIcon,
  Public as PublicIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@material-ui/icons";
import { Pagination } from "@material-ui/lab";
// import Image from "next/image";
import PropTypes from "prop-types";
import { useState } from "react";
// Add redux actions
import app from "../../redux/actions/app";
// Included custom packages or components or others...
import styled from "../../styles/portfolio.module.css";
// Included Portfolio Data
import data from "../data";

const { getFilterArray, getTotalPageNumber } = app.portfolio;
const { portfolio } = data;

const InfoText = ({ name, value, isDescription }) => (
  <div>
    <Typography variant="overline">{name}: </Typography>
    {isDescription ? (
      <Typography variant="body2" style={{ color: "#d5d5d5" }}>
        {value.length > 200 ? value.slice(0, 200) + "..." : value}
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
const getPath = (path) =>
  process.env.NODE_ENV === "production"
    ? `${process.env.REPO_PATH_NAME}/${path}`
    : path;
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
  // const isSmallDevices = useMediaQuery("(max-width:600px)");
  return (
    <Grid item sm={4} style={{ width: "100%" }}>
      <Grow in>
        <Card className={styled.card} raised={true} elevation={7}>
          <CardActionArea href={url ? url : null} target="blank">
            {thumbnail && (
              <CardMedia
                className={styled.cardMedia}
                image={getPath(thumbnail)}
                title="Muhammad Minhaj || Portfolio Demo"
              />
            )}
            {/* {thumbnail && (
              <Image
                width={isSmallDevices ? 570 : 400}
                height={isSmallDevices ? 350 : 200}
                src={thumbnail}
              />
            )} */}

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
                      className={styled.chip}
                    />
                  ))}
            </CardContent>
          </CardActionArea>
          <CardActions className={styled.cardActions}>
            <Button
              startIcon={url ? <PublicIcon /> : <VisibilityOffIcon />}
              variant="outlined"
              color="secondary"
              disabled={url ? false : true}
              href={url}
              target="blank"
              className={styled.btn}
            >
              Live
            </Button>
            <Button
              startIcon={<GitHubIcon />}
              variant="outlined"
              disabled={sourceCode ? false : true}
              href={sourceCode}
              target="blank"
              className={styled.btn}
            >
              Source
            </Button>
          </CardActions>
        </Card>
      </Grow>
    </Grid>
  );
};
PortfolioCard.propTypes = {
  project: PropTypes.object.isRequired,
};

const Portfolio = () => {
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(1);
  const isMobileDevice = useMediaQuery("(max-width:576px)");
  const projects = portfolio[value].projects;
  const itemPerPage = 6;

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
    setPage(1);
  };
  const handleChangePaginate = (event, page) => {
    setPage(page);
  };

  return (
    <section id="portfolio" className={styled.portfolio}>
      <Tabs
        variant={isMobileDevice ? "scrollable" : "fullWidth"}
        value={value}
        onChange={handleChangeTabs}
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
          {projects &&
            getFilterArray(projects, itemPerPage, page).map((project, i) => (
              <PortfolioCard project={project} key={i} />
            ))}
        </Grid>
      </Box>

      <div className={styled.pagination}>
        {projects.length > itemPerPage && (
          <Pagination
            page={page}
            count={getTotalPageNumber(projects.length / itemPerPage)}
            onChange={handleChangePaginate}
            siblingCount={0}
            size={isMobileDevice ? "medium" : "large"}
            color="secondary"
            shape="rounded"
            variant="outlined"
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
