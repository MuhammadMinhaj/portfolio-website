/**
 * Date:15/12/2020
 * Author: Muhammad Minhaj
 * Title: Redux Store
 * Description: Redux store create for state management of the hold application
 * **/

//  Included Thrid Pertty Packages
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";

// Included Custom Packages
import rootReducer from "./reducers";

// Use Middlewares
const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
