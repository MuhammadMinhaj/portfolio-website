/**
 * Date:16/12/2020
 * Author: Muhammad Minhaj
 * Title: Website Navbar
 * Description: This is a Website Navbar
 * **/

//  Included Third Pertty Components Or Packages
import { useState, useEffect } from "react";
import Link from "next/link";

import { useMediaQuery, Typography, Drawer } from "@material-ui/core";
import {
  Menu as MenuIcon,
  RestaurantMenu as RestaurantMenuIcon,
} from "@material-ui/icons";
// Included Custom Packages or Components
import { SmoothScrollLink } from "./common";
import styled from "../../styles/navbar.module.css";
import data from "../data";
const { navbar } = data;

const Item = ({ item }) => {
  if (item.href.includes("#")) {
    return (
      <li className={styled.nav_item}>
        <SmoothScrollLink to={item.href.slice(1, item.href.length)}>
          {item.name}
        </SmoothScrollLink>
      </li>
    );
  } else {
    return (
      <li className={styled.nav_item}>
        <Link href={item.href}>{item.name}</Link>
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
        <Typography>Brand</Typography>
        <MenuIcon onClick={() => toggleDrawer()} />
      </div>

      {isMatchedWidth ? (
        <ul className={styled.navbar}>
          {navbar.map((obj, i) => (
            <Item item={obj} key={i} />
          ))}
        </ul>
      ) : (
        <Drawer open={isOpen} onClose={() => toggleDrawer()} anchor="right">
          {/* Mobile Menu View */}
          <div className={styled.closeIcon}>
            <RestaurantMenuIcon onClick={() => toggleDrawer()} />
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
