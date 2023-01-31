import React, { Fragment } from "react";
import { Button, Container, Table } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css"
import Employees from "./Employees";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let history = useNavigate();
  const handleDelete = (id) => {
    var index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);

    Employees.splice(index, 1);

    history("/");
  };

  const handleEdit = (id, name, age)=>{
    localStorage.setItem('Name', name);
    localStorage.setItem('Age', age);
    localStorage.setItem('Id', id);
  }

  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <Table align="center" width={"80%"} border={"1px solid black"}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((item) => {
                  return (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Age}</td>
                      <td>
                        <Link to={`/edit`}>
                          <Button onClick={() => handleEdit(item.id, item.Name, item.Age)}>EDIT</Button>
                        </Link>
                        &nbsp;
                        <Button onClick={() => handleDelete(item.id)}>
                          DELETE
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : "No data available"}
          </tbody>
        </Table>
        <br></br>
        <Link to={`/create`}>
            <Button>Create</Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Home;
