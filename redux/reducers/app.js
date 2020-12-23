/**
 * Date: 15-12-2020
 * Author: Muhammad Minhaj
 * Title: App Reducer
 * Description: This is a app reducer for manage app state.
 * **/
// Included Custom Packages
import types from "../types";
const {
  alertMessage: { HANDLE_OPEN_ALERT, HANDLE_CLOSE_ALERT },
  loader: { HANDLE_OPEN_LOADER, HANDLE_STOP_LOADER },
  skills: { INCREMENT_STEP, DECREMENT_STEP, DYNAMIC_ACTIVE_STEP, HANDLE_MODAL },
  contact: { HANDLE_CHANGE, HANDLE_FIELDS_ERROR },
} = types;

const initValues = { value: "", error: "" };
const alertInitValues = {
  isError: false,
  message: "",
};
const loaderInitValues = {
  isLoading: false,
  message: "",
};
const initState = {
  alertMessage: alertInitValues,
  loader: loaderInitValues,
  skills: {
    activeStep: 3,
    steps: ["Tools", "Programming", "Web & Apps", "All"],
    isOpenModal: false,
    index: null,
  },
  contact: {
    name: initValues,
    email: initValues,
    subject: initValues,
    message: initValues,
  },
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    // Start here to AlertMessage state control
    case HANDLE_OPEN_ALERT:
      state = {
        ...state,
        alertMessage: {
          ...state.alertMessage,
          message: action.payload.message,
          isError: action.payload.isError,
        },
      };
      return state;
    case HANDLE_CLOSE_ALERT:
      state = {
        ...state,
        alertMessage: alertInitValues,
      };
      return state;
    // Start here to Loader state control
    case HANDLE_OPEN_LOADER:
      state = {
        ...state,
        loader: {
          isLoading: true,
          message: action.payload,
        },
      };
      return state;
    case HANDLE_STOP_LOADER:
      state = {
        ...state,
        loader: loaderInitValues,
      };
      return state;
    // Start here to Skills
    case INCREMENT_STEP:
      state = {
        ...state,
        skills: {
          ...state.skills,
          activeStep: state.skills.activeStep + 1,
        },
      };
      return state;
    case DECREMENT_STEP:
      state = {
        ...state,
        skills: {
          ...state.skills,
          activeStep: state.skills.activeStep - 1,
        },
      };
      return state;
    case DYNAMIC_ACTIVE_STEP:
      state = {
        ...state,
        skills: {
          ...state.skills,
          activeStep: action.payload,
        },
      };
      return state;
    case HANDLE_MODAL:
      state = {
        ...state,
        skills: {
          ...state.skills,
          isOpenModal: !state.skills.isOpenModal,
          index: action.payload,
        },
      };
      return state;
    // Start here to Contact
    case HANDLE_CHANGE:
      state = {
        ...state,
        contact: {
          ...state.contact,
          [action.payload.name]: {
            value: action.payload.value,
            error: "",
          },
        },
      };
      return state;
    case HANDLE_FIELDS_ERROR:
      state = {
        ...state,
        contact: {
          ...state.contact,
          ...action.payload,
        },
      };
      return state;
    default:
      return state;
  }
};

export default reducer;
