import * as actionTypes from "../constants/actionTypes";
const initialState = [];
const students = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STUDENT_SUCCESS:
      state = [...action.payload];
      return state;
    case actionTypes.CREATE_STUDENT:
      //THem moi sinh vien
      state = [...state, action.payload];
      return state;

    default:
      break;
  }
  return state;
};
export default students;
