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
  alertMessage: {  HANDLE_CLOSE_ALERT },
  loader: { HANDLE_OPEN_LOADER },
  skills: { INCREMENT_STEP, DECREMENT_STEP, DYNAMIC_ACTIVE_STEP, HANDLE_MODAL },
  contact: {
    HANDLE_CHANGE,
    HANDLE_FIELDS_ERROR,
    HANDLE_SUBMIT_SUCCESS,
    HANDLE_SUBMIT_FAILED,
  },
} = types;

const app = {
  alertMessage: {},
  loader: {},
  contact: {},
  skills: {},
  portfolio: {},
};

const { alertMessage, contact, skills, portfolio } = app;

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

    if (!name.value) {
      name.error = "Please provied your name";
      hasError = true;
    }
    if (!email.value) {
      email.error = "Please provied your email";
      hasError = true;
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
      email.error = "Invalid email address";
      hasError = true;
    }
    if (!subject.value) {
      subject.error = "Please provied your subject";
      hasError = true;
    }
    if (!message.value) {
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
      const res = await axios.post(
        process.env.CONTACT_SEND_MAIL_URI_POST,
        {
          name: name.value,
          email: email.value,
          subject: subject.value,
          message: message.value,
        },
        {
          headers: {
            "x-api-key": process.env.HEROKU_API_KEY,
          },
        }
      );
      dispatch({
        type: HANDLE_SUBMIT_SUCCESS,
        payload: res.data.message,
      });
    } catch (e) {
      dispatch({
        type: HANDLE_SUBMIT_FAILED,
        payload:
          e.response.status === 400
            ? e.response.data.message
            : e.response.statusText,
      });
      
    }
  };
};

// Start here to methods of Portfolio

// This methods for array filter to paginated items
portfolio.getFilterArray = (list, itemPerPage, currentPage) => {
  if (list.length <= itemPerPage) {
    return list;
  }
  return list.slice(
    itemPerPage * currentPage - itemPerPage,
    itemPerPage * currentPage
  );
};

const isFloat = (n) => Number(n) === n && n % 1 !== 0;
// This methods for get the total pages number with round future for pages number
portfolio.getTotalPageNumber = (pages) => {
  if (isFloat(pages)) {
    return parseInt(pages + 1);
  }
  return pages;
};

export default app;
