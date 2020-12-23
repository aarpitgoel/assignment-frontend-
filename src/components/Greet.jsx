import React from "react";
import "../styles.css";
import authService from "./authService";

export default function Greet() {
  //console.log(username);
  let username = authService.getUserName();
  return <div className="greeting">Hey, {username}</div>;
}
