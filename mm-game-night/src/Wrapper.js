import React from "react";
import logo from "./logo.svg";
import "./Wrapper.css";
import UserDataForm from "./UserDataForm";

export default class Wrapper extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Set Up a Game Night</h1>
        </header>
        <UserDataForm />
      </div>
    );
  }
}
