// dungf call de goi sang axios
import { call, put } from "redux-saga/effects";
// call(functionName,arguments)
import * as studentServices from "../api/studentService";
import { act_success } from "../redux/actions";
import { STUDENT_SUCCESS } from "../redux/constants/actionTypes";
//Khi lam viec voi saga phai lam viec voi cac function generator
export const STUDENT_SAGA_GET = function* () {
  try {
    let listStudent = yield call(studentServices.STUDENT_GET);
    // CHuyeenr listSTudent sang student reducer
    // -->put(action)
    yield put(act_success(STUDENT_SUCCESS, listStudent));
  } catch (error) {
    console.log("ERROR -->", error);
  }
};
export const STUDENT_SAGE_POST = function* (action) {
  try {
    yield call(studentServices.STUDENT_POST, action.payload);
    yield call(studentServices.STUDENT_GET);
  } catch (error) {
    console.log("ERROR->", error);
  }
};
