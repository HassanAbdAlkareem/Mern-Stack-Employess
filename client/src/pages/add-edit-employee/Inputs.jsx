import { useContext } from "react";
import { storeAlContext } from "../../context/FunctionAlContext";

const Inputs = () => {
  const { infoEmployees, setInfoEmployees } = useContext(storeAlContext);

  const arrayInputs = [
    {
      label: "Full Name *",
      placeholder: "Example / Hassan abd alkaeem",
      name: "fullName",
      type: "text",
      required: "required",
      value: infoEmployees.fullName,
    },
    {
      label: "Birthday",
      name: "birthday",
      type: "date",
      value: infoEmployees.birthday,
    },
    {
      label: "Job Title *",
      name: "jobTitle",
      placeholder: "Example / Web Development",
      type: "text",
      value: infoEmployees.jobTitle,
    },
    {
      label: "Salary IQD*",
      placeholder: "Example / 900,000 IQD",
      name: "salary",
      type: "text",
      value: infoEmployees.salary,
    },
    {
      label: "Country *",
      placeholder: "Example / Iraq",
      name: "country",
      type: "text",
      value: infoEmployees.country,
    },
    {
      label: "City *",
      placeholder: "Example / Baghdad",
      name: "city",
      type: "text",
      value: infoEmployees.city,
    },
    {
      label: "Image *",
      type: "file",
      name: "image",
      handleChangeImage: (e) =>
        setInfoEmployees({
          ...infoEmployees,
          imageEmployee: e.target.files[0],
        }),
    },
  ];

  return arrayInputs;
};

export default Inputs;
