/**
 * Date:16/12/2020
 * Author: Muhammad Minhaj
 * Title:  Actions For Hold App
 * Description: This actions for hold app and write common functionalities
 * **/

//  Included Third Pertty Components Or Packages
import axios from "axios";
// Included Custom Packages
import types from "../types";

const {
  alertMessage: { HANDLE_OPEN_ALERT, HANDLE_CLOSE_ALERT },
  loader: { HANDLE_OPEN_LOADER, HANDLE_STOP_LOADER },
  skills: { INCREMENT_STEP, DECREMENT_STEP, DYNAMIC_ACTIVE_STEP, HANDLE_MODAL },
  contact: { HANDLE_CHANGE, HANDLE_FIELDS_ERROR },
} = types;

const app = {
  alertMessage: {},
  loader: {},
  contact: {},
  skills: {},
};

const { alertMessage, contact, skills } = app;

// Start here to functions of Header...
app.handleNavAnimationBar = () => {
  let circuler = document.getElementById("navCirculer");
  let count = 0;
  setInterval(() => {
    count++;
    circuler.childNodes.forEach((span, ind) => {
      if (circuler.childNodes.length + 1 === count) {
        count = 1;
      }
      if (ind + 1 === count) {
        // span.style.background = "#ffc107";
        span.style.background = "#f50057";
        span.style.transform = "scale(1.2)";
        span.style.transition = "all 0.75s";
      } else {
        span.style.transform = "scale(1)";
        span.style.transition = "all 0.75s";
        span.style.background = "none";
      }
    });
  }, 1000);
};

// Start here to functions of AlertMessage
alertMessage.handleClose = () => {
  return (dispatch) => {
    dispatch({
      type: HANDLE_CLOSE_ALERT,
    });
  };
};
// Start here to functions of Skills...
skills.stepHandleClick = (type) => {
  return (dispatch) => {
    if (type === "increment") {
      dispatch({
        type: INCREMENT_STEP,
      });
    } else if (type === "decrement") {
      dispatch({
        type: DECREMENT_STEP,
      });
    } else {
      dispatch({
        type: DYNAMIC_ACTIVE_STEP,
        payload: type,
      });
    }
  };
};
skills.handleModal = (index) => {
  return (dispatch) => {
    dispatch({
      type: HANDLE_MODAL,
      payload: index,
    });
  };
};

// Start here to functions of Contact...
contact.handleChange = (e) => {
  e.persist();
  return (dispatch) => {
    dispatch({
      type: HANDLE_CHANGE,
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };
};
contact.handleSubmit = (e) => {
  e.preventDefault();
  return async (dispatch, getState) => {
    let contact = getState().app.contact;

    let { name, email, subject, message } = contact;

    let hasError = false;
    if (name.value.length === 0) {
      name.error = "Please provied your name";
      hasError = true;
    }
    if (email.value.length === 0) {
      email.error = "Please provied your email";
      hasError = true;
    }
    if (subject.value.length === 0) {
      subject.error = "Please provied your subject";
      hasError = true;
    }
    if (message.value.length === 0) {
      message.error = "Please provied your message";
      hasError = true;
    }
    if (hasError) {
      return dispatch({
        type: HANDLE_FIELDS_ERROR,
        payload: contact,
      });
    }
    dispatch({
      type: HANDLE_OPEN_LOADER,
      payload: "Sending...",
    });
    try {
      const res = await axios.post("https://test/api/contact");
      dispatch({
        type: HANDLE_STOP_LOADER,
      });
      dispatch({
        type: HANDLE_OPEN_ALERT,
        payload: {
          isError: false,
          message: res.data.message,
        },
      });
    } catch (e) {
      dispatch({
        type: HANDLE_STOP_LOADER,
      });
      dispatch({
        type: HANDLE_OPEN_ALERT,
        payload: {
          isError: true,
          message: e.message,
        },
      });
    }
  };
};
export default app;
