/**
 * Date: 15/12/2020
 * Author: Muhammad Minhaj
 * Title: The Root Of Application
 * Description: This is a root of this application
 * **/

// Included Third Pertty Packages
import App from "next/app";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
// Included CSS Global Style Sheet
import "../styles/globals.css";
// Included Custom Packages
import store from "../redux/store";

class Application extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

const makeStore = () => store;

const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(Application);
