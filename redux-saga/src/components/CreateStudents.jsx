import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { act_create_student } from "../redux/actions";
import { useNavigate } from "react-router-dom";
export default function CreateStudents() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");
  const [age, setAge] = useState("");
  const handleCreateStudent = () => {
    dispatch(act_create_student({ studentId, studentName, age }));
    navigate("/");
  };
  return (
    <>
      <h1>CreateStudents</h1>
      <label htmlFor='studentId'>Student ID</label>
      <input
        type='text'
        name='studentId'
        id='studentId'
        onChange={(e) => setStudentId(e.target.value)}
      />
      <br />
      <label htmlFor='studentName'>Student Name</label>
      <input
        type='text'
        name='studentName'
        id='studentName'
        onChange={(e) => setStudentName(e.target.value)}
      />
      <br />
      <label htmlFor='age'>AGE</label>
      <input
        type='text'
        name='age'
        id='age'
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <button onClick={handleCreateStudent}>Create</button>
    </>
  );
}
