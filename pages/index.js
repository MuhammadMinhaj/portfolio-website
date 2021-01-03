/**
 * Date:15/12/2020
 * Author: Muhammad Minhaj
 * Title: Website Home Page
 * Description: This is a Home page of root path
 * **/
// Included Third Pertty Packages Or Component
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
// Included Custom Components
import { Title, Loader, AlertMessage } from "../src/components/common";
import Layout from "../src/components/Layout";
import Slider from "../src/components/Slider";
import About from "../src/components/About";
import Skills from "../src/components/Skills";
import Portfolio from "../src/components/Portfolio";
import Services from "../src/components/Services";
import Contact from "../src/components/Contact";

// Included Redux Actions from redux/actions/app directory
import app from "../redux/actions/app";
const { handleClose } = app.alertMessage;

const Home = () => {
  const {
    alertMessage: { isError, message },
    loader,
  } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  return (
    <>
      <Head>
        <title>Muhammad Minhaj || Full Stack Developer</title>
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
      </Head>

      <Loader open={loader.isLoading} message={loader.message} />
      <AlertMessage
        open={message ? true : false}
        isError={isError}
        message={message}
        handleClose={() => dispatch(handleClose())}
      />
      <Layout>
        {/* Slider */}
        <Slider />
        {/* About Me */}
        <Title id="about" element="h1" title="ABOUT" subTitle="ME" />
        <About />
        {/* My Skills */}
        <Title id="skills" element="h1" title="MY" subTitle="SKILLS" />
        <Skills />
        {/* My Portfolio */}
        <Title id="portfolio" element="h1" title="MY" subTitle="PORTFOLIO" />
        <Portfolio />
        {/* Services */}
        <Title id="services" element="h1" title="MY" subTitle="SERVICES" />
        <Services />
        {/* Contact */}
        <Title id="contact" element="h1" title="CONTACT" subTitle="ME" />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
