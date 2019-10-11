import React from "react";
import Header from "./components/header";
import RegisterForm from "./components/register";
import LoginForm from "./components/login";
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

 function App() {
  return (
    <Router>
      <div className= "main">
      	<Header/>
        <Switch>
          <Route exact path="/">
            <RegisterForm />
          </Route>
          <Route path="/login">
            <LoginForm/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;

