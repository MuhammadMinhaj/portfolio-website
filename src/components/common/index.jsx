/**
 * Date:16/12/2020
 * Author: Muhammad Minhaj
 * Title: Website Slider
 * Description: This is a Website Slider
 * **/

//  Included Third Pertty Components Or Packages
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Snackbar, CircularProgress, Fab, Grow } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

// Included Material-Icons
import { ArrowUpward as ArrowUpwardIcon } from "@material-ui/icons";

// Included Custom Packages or Components
import styled from "../../../styles/common.module.css";

export const Title = (props) => {
  return (
    <div id={props.id} className={styled.title}>
      <props.element className={styled.title1}>{props.title}</props.element>
      <props.element className={styled.title2}>{props.subTitle}</props.element>
    </div>
  );
};

// Smooth Scroll For Page Component
export const SmoothScrollLink = ({ children, to }) => (
  <Link activeClass="null" to={to} smooth={true} spy={true} duration={800}>
    {children}
  </Link>
);

// Success/Error Alert Component
export const AlertMessage = ({ open, isError, message, handleClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert severity={isError ? "error" : "success"}>{message}</Alert>
    </Snackbar>
  );
};

// Loading Component
export const Loader = ({ open, message }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
    >
      <div
        style={{
          minWidth: "130px",
          height: "40px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          background: " #323232",
          color: " #fafafa",
          borderRadius: "5px",
        }}
      >
        <CircularProgress size="30px" color="secondary" />
        <span>{message}</span>
      </div>
    </Snackbar>
  );
};

// Go To Top Page Component
export const ScrollToTop = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <Grow in={scroll > 400}>
      <div className={styled.scrollToTop}>
        <SmoothScrollLink to="__next">
          <Fab color="secondary">
            <ArrowUpwardIcon />
          </Fab>{" "}
        </SmoothScrollLink>
      </div>
    </Grow>
  );
};
