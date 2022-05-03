import React, { useContext } from "react";
import ContainerHome from "../components/ContainerHome";
import Login from "../pages/Login";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { storeAlContext } from "../context/FunctionAlContext";

//
function App() {
  const { user } = useContext(storeAlContext);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <ContainerHome /> : <Redirect to="/auth" />}
          </Route>
          <Route path="/auth">{user ? <Redirect to="/" /> : <Login />}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
