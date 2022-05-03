import AllEmployees from "../pages/showEmployees/Employees";
import AddEmployee from "../pages/add-edit-employee/Add-Edit-Employee";
import { storeAlContext } from "../context/FunctionAlContext";
import { useContext } from "react";

const RightBar = () => {
  const { index } = useContext(storeAlContext);

  return (
    <div className="right-bar">
      {index === 1 ? <AllEmployees /> : index === 2 ? <AddEmployee /> : ""}
    </div>
  );
};

export default RightBar;
