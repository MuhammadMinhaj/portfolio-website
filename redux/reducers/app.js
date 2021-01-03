/**
 * Date: 15-12-2020
 * Author: Muhammad Minhaj
 * Title: App Reducer
 * Description: This is a app reducer for manage app state.
 * **/
// Included Custom Packages
import types from "../types";
const {
  alertMessage: { HANDLE_CLOSE_ALERT },
  loader: { HANDLE_OPEN_LOADER },
  skills: { INCREMENT_STEP, DECREMENT_STEP, DYNAMIC_ACTIVE_STEP, HANDLE_MODAL },
  contact: {
    HANDLE_CHANGE,
    HANDLE_FIELDS_ERROR,
    HANDLE_SUBMIT_SUCCESS,
    HANDLE_SUBMIT_FAILED,
  },
} = types;

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
    name: { value: "", error: "" },
    email: { value: "", error: "" },
    subject: { value: "", error: "" },
    message: { value: "", error: "" },
  },
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    // Start here to AlertMessage state control
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

    case HANDLE_SUBMIT_SUCCESS:
      state = {
        ...state,
        loader: loaderInitValues,
        alertMessage: {
          message: action.payload,
          isError: false,
        },
        contact: {
          name: { value: "", error: "" },
          email: { value: "", error: "" },
          subject: { value: "", error: "" },
          message: { value: "", error: "" },
        },
      };
      return state;
    case HANDLE_SUBMIT_FAILED:
      state = {
        ...state,
        loader: loaderInitValues,
        alertMessage: {
          message: action.payload,
          isError: true,
        },
      };
      return state;
    default:
      return state;
  }
};

export default reducer;
