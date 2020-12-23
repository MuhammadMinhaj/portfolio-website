/**
 * Date:16/12/2020
 * Author: Muhammad Minhaj
 * Title: Website Navbar
 * Description: This is a Website Navbar
 * **/

//  Included Third Pertty Components Or Packages
import {
  Container,
  AppBar,
  Toolbar,
  CssBaseline,
  useScrollTrigger,
  Slide,
} from "@material-ui/core";

// Included Custom Packages or Components
import Navbar from "./Navbar";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// Start Code Here
const Header = (props) => {
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className="theme">
          <Toolbar>
            <Container>
              <Navbar />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

export default Header;
