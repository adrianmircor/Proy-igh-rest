import { combineReducers } from "redux";

import employeeReducer from './employeeReducer';
import busesReducer from './busReducer';
import makerReducer from './makerReducer';

export default combineReducers({
  //Pueden haber varios Reducer... poryectoReducer, tareaReducer, etc
  //1er Reducer
  employeeReducer,
  busesReducer,
  makerReducer
});