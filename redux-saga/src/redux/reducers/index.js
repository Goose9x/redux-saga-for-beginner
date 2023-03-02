import { combineReducers } from "redux";
import students from "./students";
import users from "./users";
export const rootReducers = combineReducers({ students, users });
