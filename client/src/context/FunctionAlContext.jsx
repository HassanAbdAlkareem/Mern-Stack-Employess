import axios from "axios";
import React, { useEffect, useState, createContext } from "react";

//
export const storeAlContext = createContext();

const FunctionAlContext = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [index, setIndex] = useState(1);

  // state Employee
  const [updateEmployee, setUpdateEmployee] = useState(false);
  const [arrayEmployees, setArrayEmployees] = useState([]);
  const [errorGetEmployees, setErrorGetEmployees] = useState(false);
  const [pending, setPending] = useState(false);

  const [infoEmployees, setInfoEmployees] = useState({
    fullName: "",
    salary: "",
    birthday: "",
    imageEmployee: "",
    jobTitle: "",
    country: "",
    city: "",
  });

  // get All Employee from databas
  useEffect(() => {
    const getEmployees = async () => {
      setPending(true);
      try {
        const res = await axios.get("http://localhost:5000/api/employees", {
          headers: { auth: user.token },
        });
        res.data && setArrayEmployees(res.data);
        setPending(false);
      } catch (error) {
        setErrorGetEmployees(true);
        console.log(error.message);
      }
    };
    getEmployees();
  }, [setArrayEmployees]);

  // set User to localStorage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // change information emplyee
  const handleChangeEmployees = (e) => {
    setInfoEmployees({
      ...infoEmployees,
      [e.target.name]: e.target.value,
    });
  };

  // push state
  return (
    <storeAlContext.Provider
      value={{
        user,
        setUser,
        index,
        setIndex,
        updateEmployee,
        setUpdateEmployee,
        infoEmployees,
        setInfoEmployees,
        arrayEmployees,
        setArrayEmployees,
        errorGetEmployees,
        setErrorGetEmployees,
        pending,
        setPending,
        handleChangeEmployees,
      }}
    >
      {children}
    </storeAlContext.Provider>
  );
};

export default FunctionAlContext;
