import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import Employees from "./Employees";

function Edit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  let history = useNavigate();

  var index = Employees.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = Employees[index];
    a.Name = name;
    a.Age = age;
    history("/");
  };

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setId(localStorage.getItem("Id"));
  }, []);

  return (
    <div>
      <Form>
        <label>Enter name</label>
        <input
          type="text"
          placeholder="Enter name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Enter Age</label>
        <input
          value={age}
          type="number"
          placeholder="Enter Age"
          required
          onChange={(e) => setAge(e.target.value)}
        />
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Edit;
