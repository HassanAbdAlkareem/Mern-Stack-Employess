import React from "react";
import { AssignmentInd } from "@material-ui/icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <AssignmentInd className="icon" />
        <span className="logo">Dashboard Employees</span>
      </div>
    </div>
  );
};

export default Navbar;
