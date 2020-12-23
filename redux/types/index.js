/**
 * Date: 15/12/2020
 * Author: Muhammad Minhaj
 * Title: Application Types
 * Description: The Types For Hold Reducers And Actions Matching
 * **/

//  Types Object
const types = {
  alertMessage: {},
  loader: {},
  skills: {},
  contact: {},
};

const { alertMessage, loader, skills, contact } = types;

// Start here to types of AlertMessage
alertMessage.HANDLE_OPEN_ALERT = "HANDLE_OPEN_ALERT";
alertMessage.HANDLE_CLOSE_ALERT = "HANDLE_CLOSE_ALERT";
// Start here to types of Loader
loader.HANDLE_OPEN_LOADER = "HANDLE_OPEN_LOADER";
loader.HANDLE_STOP_LOADER = "HANDLE_STOP_LOADER";
// Start here to types of Skills
skills.INCREMENT_STEP = "INCREMENT_STEP";
skills.DECREMENT_STEP = "DECREMENT_STEP";
skills.DYNAMIC_ACTIVE_STEP = "DYNAMIC_ACTIVE_STEP";
skills.HANDLE_MODAL = "HANDLE_MODAL";

// Start here to types of Contact
contact.HANDLE_CHANGE = "HANDLE_CHANGE";
contact.HANDLE_FIELDS_ERROR = "HANDLE_FIELDS_ERROR";
export default types;
