/**
 * Date:16/12/2020
 * Author: Muhammad Minhaj
 * Title: Website Layout
 * Description: This is a Layout for hold application
 * **/

//  Included Third Pertty Components Or Packages
import { Container } from "@material-ui/core";
import { ProgressBar } from "scrolling-based-progressbar";
// Included Custom Packages or Components
import { ScrollToTop } from "./common";

import Header from "./Header";
import Footer from "./Footer";
// Start Code Here
const WebLayout = (props) => {
  return (
    <>
      {/* Scroll To Progress On The Top Bar */}
      <ProgressBar height="2px" color="#f50057" />
      {/* Header Section */}
      <Header />
      {/* Content Section */}
      <main>
        <Container>{props.children}</Container>
      </main>
      {/* Footer Section */}
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default WebLayout;
