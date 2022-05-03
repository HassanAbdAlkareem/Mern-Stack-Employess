import React, { useContext } from "react";
import avatar from "../../image/employee.png";
import { Delete, Edit } from "@material-ui/icons";

import { storeAlContext } from "../../context/FunctionAlContext";
import axios from "axios";

const ListEmployees = ({ employee }) => {
  const PUBLIC_IMAGE = "http://localhost:5000/images/";
  const {
    setInfoEmployees,
    setIndex,
    setUpdateEmployee,
    setArrayEmployees,
    arrayEmployees,
    user,
  } = useContext(storeAlContext);

  const handleDeleteEmployee = async () => {
    try {
      await axios.delete(
        "http://localhost:5000/api/employees/" + employee._id,
        {
          headers: { auth: user.token },
        }
      );
      const filter = arrayEmployees.filter((e) => e._id !== employee._id);
      setArrayEmployees(filter);
    } catch (error) {}
  };

  //
  return (
    <div className=" col-md-12 col-lg-6 ">
      <div className="info">
        <div className="wrapper">
          <div className="bottom">
            <span>Name : {employee.fullName}</span>
            <span>Birthday : {employee.birthday}</span>
            <span>Job Title : {employee.jobTitle}</span>
            <span>Salary IQD : {employee.salary}</span>
            <span>Country : {employee.country}</span>
            <span>City : {employee.city}</span>
          </div>
          <div className="top">
            <img
              src={
                employee?.imageEmployee
                  ? PUBLIC_IMAGE + employee.imageEmployee
                  : avatar
              }
            />
          </div>
        </div>
        <div className="icons">
          <Edit
            className="edit"
            onClick={() => (
              setIndex(2), setInfoEmployees(employee), setUpdateEmployee(true)
            )}
          />
          <Delete className="delete" onClick={handleDeleteEmployee} />
        </div>
      </div>
    </div>
  );
};

export default ListEmployees;
