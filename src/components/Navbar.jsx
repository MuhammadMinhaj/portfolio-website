/**
 * Date:16/12/2020
 * Author: Muhammad Minhaj
 * Title: Website Navbar
 * Description: This is a Website Navbar
 * **/

//  Included Third Pertty Components Or Packages
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  useMediaQuery,
  Typography,
  Drawer,
  IconButton,
  Fab,
  Grow,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  RestaurantMenu as RestaurantMenuIcon,
} from "@material-ui/icons";
// Included Custom Packages or Components
import { SmoothScrollLink, Logo } from "./common";
import styled from "../../styles/navbar.module.css";
import data from "../data";
const { navbar } = data;

const ItemContent = ({ name }) => {
  const isMatchedWidth = useMediaQuery("(min-width:800px)");
  const isMobileDevice = useMediaQuery("(min-width:576px)");
  return (
    <Grow in>
      <Fab
        color="inherit"
        variant="extended"
        style={{ background: "var(--front)" }}
        size={!isMatchedWidth ? (!isMobileDevice ? "large" : "small") : "large"}
        className={styled.nav_button}
      >
        {name}
      </Fab>
    </Grow>
  );
};

const Item = ({ item }) => {
  if (item.href.includes("#")) {
    return (
      <li className={styled.nav_item}>
        <SmoothScrollLink
          to={item.href.slice(1, item.href.length)}
          hideHash={item.href === "#__next" ? true : false}
        >
          <ItemContent name={item.name} />
        </SmoothScrollLink>
      </li>
    );
  } else if (item.name.toLowerCase() === "blog") {
    return (
      <li className={styled.nav_item}>
        <a href={item.href} target="blank">
          <div>
            <ItemContent name={item.name} />
          </div>
        </a>
      </li>
    );
  } else {
    return (
      <li className={styled.nav_item}>
        <Link href={item.href}>
          <div>
            <ItemContent name={item.name} />
          </div>
        </Link>
      </li>
    );
  }
};

// Start Here To Code
const Navbar = (props) => {
  const isMatchedWidth = useMediaQuery("(min-width:576px)");
  const [isOpen, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [clearance, setClearance] = useState(null);
  useEffect(() => {
    setClearance(
      setInterval(() => {
        if (count === 9) {
          setCount(0);
        } else {
          setCount(count + 1);
        }
      }, 1000)
    );
    return () => clearInterval(clearance);
  }, [count]);
  const toggleDrawer = () => {
    setOpen(!isOpen);
  };
  return (
    <nav>
      <div className={styled.mobileMenu}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.15rem 0rem",
          }}
        >
          <Logo />
          <Typography variant="h5" style={{ marginLeft: "0.75rem" }}>
            Md. Minhaj
          </Typography>
        </div>
        <IconButton onClick={() => toggleDrawer()} color="inherit">
          <MenuIcon />
        </IconButton>
      </div>

      {isMatchedWidth ? (
        <div className={styled.navContainer}>
          <div className={styled.brand}>
            <Logo />
          </div>
          <ul className={styled.navbar}>
            {navbar.map((obj, i) => (
              <Item item={obj} key={i} />
            ))}
          </ul>
        </div>
      ) : (
        <Drawer open={isOpen} onClose={() => toggleDrawer()} anchor="right">
          {/* Mobile Menu View */}
          <div className={styled.closeIcon}>
            <IconButton onClick={() => toggleDrawer()} color="inherit">
              <RestaurantMenuIcon />
            </IconButton>
          </div>
          <ul className={styled.navbar}>
            {navbar.map((obj, i) => (
              <Item item={obj} key={i} />
            ))}
          </ul>
        </Drawer>
      )}

      <div id="navCirculer" className={styled.navCirculer}>
        {[...new Array(10)].map((e, i) => (
          <span
            key={i}
            className={count === i ? styled.activeCircle : styled.hideCircle}
          ></span>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
