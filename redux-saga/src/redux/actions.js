import * as actionTypes from "./constants/actionTypes";
export const act_create_student = (newStudents) => {
  console.log(newStudents);
  return {
    type: actionTypes.CREATE_STUDENT,
    payload: newStudents,
  };
};
export const act_get_student = () => {
  return {
    type: actionTypes.GET_STUDENT,
  };
};
// action xu ly cac truong hop muon chuyen data tu saga sang reducer
export const act_success = (actionType, data) => {
  return {
    type: actionType,
    payload: data,
  };
};
