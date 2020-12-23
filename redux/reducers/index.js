/**
 * Date: 15/12/2020
 * Author: Muhammad Minhaj
 * Title: Root Reducer
 * Description: This is a root reducer for combine hold reducers from  the reducers directory
 * **/

//  Included Third Pertty Packages
import { combineReducers } from "redux";

// Included Custom Reducers From reducers directory
import appReducer from "./app";

const reducers = {};

reducers.app = appReducer;

export default combineReducers(reducers);
