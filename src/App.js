import React from "react";
import "./styles.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect to="/login" />
      </Switch>
    </>
  );
}
