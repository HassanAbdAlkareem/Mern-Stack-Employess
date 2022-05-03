import React, { useContext } from "react";
import ListEmployees from "./ListEmployees";
import { storeAlContext } from "../../context/FunctionAlContext";

//
const AllEmployees = () => {
  const { arrayEmployees, errorGetEmployees, pending } =
    useContext(storeAlContext);

  return (
    <div className="page">
      {pending ? (
        <p className="show-effect">Loading ...</p>
      ) : errorGetEmployees ? (
        <p className="show-effect">Something is Error </p>
      ) : arrayEmployees.length === 0 ? (
        <p className="show-effect">There are no Employees yet ..</p>
      ) : (
        <div className="employee">
          <div className="row">
            {arrayEmployees.map((employee) => (
              <ListEmployees key={employee._id} employee={employee} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllEmployees;
