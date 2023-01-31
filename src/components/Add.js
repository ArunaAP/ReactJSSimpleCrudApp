import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import Employees from "./Employees";

export default function Add() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name,
      b = age;

    Employees.push({ id: uniqueId, Name: a, Age: b });
    history("/")
  };
  return (
    <div>
      <Form>
        <label>Enter name</label>
        <input
          type="text"
          placeholder="Enter name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label>Enter Age</label>
        <input
          type="number"
          placeholder="Enter Age"
          required
          onChange={(e) => setAge(e.target.value)}
        />
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
