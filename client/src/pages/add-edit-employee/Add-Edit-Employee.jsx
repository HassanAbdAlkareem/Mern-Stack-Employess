import React, { useContext, useState } from "react";
import { storeAlContext } from "../../context/FunctionAlContext";
import inputs from "./Inputs";
import axios from "axios";

const AddEmployee = () => {
  const [errorAddEmployee, setErrorAddEmployee] = useState(false);
  const [pending, setPending] = useState(false);

  const {
    handleChangeEmployees,
    infoEmployees,
    setInfoEmployees,
    user,
    updateEmployee,
    setUpdateEmployee,
    setIndex,
    setArrayEmployees,
  } = useContext(storeAlContext);
  const Inputs = inputs();

  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("fullName", infoEmployees.fullName);
    data.append("salary", infoEmployees.salary);
    data.append("birthday", infoEmployees.birthday);
    data.append("jobTitle", infoEmployees.jobTitle);
    data.append("country", infoEmployees.country);
    data.append("city", infoEmployees.city);
    data.append("imageEmployee", infoEmployees.imageEmployee);
    try {
      setPending(true);
      if (updateEmployee) {
        await axios.put(
          "http://localhost:5000/api/employees/" + infoEmployees._id,
          data,
          {
            headers: { auth: user.token },
          }
        );
        window.location.reload();
        //
      } else {
        const res = await axios.post(
          "http://localhost:5000/api/employees",
          data,
          {
            headers: { auth: user.token },
          }
        );
        res.data && setArrayEmployees((prev) => [...prev, res.data].reverse());
        setInfoEmployees({});
        setIndex(1);
      }
      //
    } catch (error) {
      console.log(error.message);
      setErrorAddEmployee(true);
    }
  };

  //
  return (
    <div className="page">
      {updateEmployee && <h3 className="update-user">Update Employee ...</h3>}

      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        {Inputs.map((data, index) => (
          <div className="item" key={index}>
            <label>{data.label}</label>
            <input
              onChange={
                data.type === "file"
                  ? data.handleChangeImage
                  : handleChangeEmployees
              }
              required={data.required}
              placeholder={data.placeholder}
              name={data.name}
              value={data.value}
              type={data.type}
            />
          </div>
        ))}
        <div style={{ width: "100%", margin: "0 auto" }}>
          <p className="note">
            Note : this mark <b>*</b> means that the field is required
          </p>

          <button
            disabled={errorAddEmployee || pending}
            type="submit"
            className="submit"
          >
            {errorAddEmployee
              ? "Error .. try again"
              : updateEmployee
              ? "Update Employee"
              : "Create Employee"}
          </button>
          {updateEmployee && (
            <button
              onClick={() => (
                setInfoEmployees({}), setUpdateEmployee(false), setIndex(1)
              )}
              className="submit cansel"
            >
              Cansel Update
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
