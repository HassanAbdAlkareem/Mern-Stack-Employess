import React, { useContext } from "react";
import { Edit, Add, Info } from "@material-ui/icons";
import { storeAlContext } from "../context/FunctionAlContext";

const LeftBar = () => {
  const { index, setIndex, user, updateEmployee, setUser } =
    useContext(storeAlContext);
  return (
    <div className="left-bar">
      <div className="parent-user">
        <p className="username">- Welcome {user.data.fullName.slice(0, 8)}..</p>
      </div>
      <span className="person">PERSONAL</span>
      <ul>
        <li onClick={() => setIndex(1)} className={index === 1 ? "active" : ""}>
          <Info className="icon" />
          Info Employees
        </li>
        <li onClick={() => setIndex(2)} className={index === 2 ? "active" : ""}>
          {updateEmployee ? (
            <Edit className="icon" />
          ) : (
            <Add className="icon" />
          )}
          {updateEmployee ? "Edit Employee" : " Add Employee"}
        </li>
        <li onClick={() => setIndex(3)} className={index === 3 ? "active" : ""}>
          <Info className="icon" />
          Logout
        </li>
      </ul>
      {index === 3 && (
        <button className="logout" onClick={() => setUser(null)}>
          Click To logout{" "}
        </button>
      )}
    </div>
  );
};

export default LeftBar;
