import React, { useContext, useState } from "react";
import { LockOpen } from "@material-ui/icons";
import { storeAlContext } from "../context/FunctionAlContext";
import axios from "axios";

const Login = () => {
  const { setUser } = useContext(storeAlContext);
  const [errorLogin, setErrorLogin] = useState(false);

  const [infoUser, setInfoUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChangeUser = (e) => {
    setInfoUser({ ...infoUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth", infoUser);
      setUser(res.data);
      window.location.reload();
    } catch (error) {
      console.log(error.message);
      setErrorLogin(true);
    }
  };
  //
  return (
    <div className="login">
      <div className="wrapper">
        <div className="logo">
          <h2>Sign In </h2>
          <LockOpen className="icon" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="item">
            <label>Full Name *</label>
            <input
              name="fullName"
              type="text"
              required
              onChange={handleChangeUser}
            />
          </div>
          <div className="item">
            <label>Email *</label>
            <input
              name="email"
              required
              type="email"
              onChange={handleChangeUser}
            />
          </div>
          <div className="item">
            <label>Password *</label>
            <input
              name="password"
              type="password"
              required
              onChange={handleChangeUser}
            />
          </div>
          {errorLogin && <p className="error-login"> Something is Wrong !</p>}
          <button disabled={errorLogin} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
