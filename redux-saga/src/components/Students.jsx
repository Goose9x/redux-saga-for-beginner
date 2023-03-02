import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { act_get_student } from "../redux/actions";
import * as actionTypes from "../redux/constants/actionTypes";
export default function Students() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listStudent = useSelector((state) => state.students);
  useEffect(() => {
    dispatch(act_get_student(actionTypes.GET_STUDENT));
  }, []);
  let elementListStudent = listStudent.map((e) => (
    <tr key={e.studentId}>
      <td>{e.studentId}</td>
      <td>{e.studentName}</td>
      <td>{e.age}</td>
      <td></td>
    </tr>
  ));
  return (
    <div>
      <h1>List: Students</h1>
      <table style={{ margin: "auto" }}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>{elementListStudent}</tbody>
      </table>
      <button onClick={() => navigate("/studentForm")}>
        Create New Students
      </button>
    </div>
  );
}
