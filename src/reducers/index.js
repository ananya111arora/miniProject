import { combineReducers } from "redux";
import auth from './auth';
import dataReducer from "./data";
import checkoutReducer from "./checkout";


export const reducers = combineReducers({ auth, dataReducer, checkoutReducer });