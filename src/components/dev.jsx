import React, { Component } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./home";
import ResumeApp from "./resumeApp";
import CustomEdit from "./customEdit";
import CustomApp from "./custom/customApp";
class Dev extends Component {
  state = {
    gender: "m",
  };
  render() {
    return (
      <Routes>
        <Route path="/start3/*" element={<CustomApp />} />
        <Route
          path="/start2/*"
          element={<ResumeApp gender={this.state.gender} />}
        />
        <Route path="/" element={<Home handleGender={this.handleGender} />} />
      </Routes>
    );
  }
  handleGender = (g) => {
    let gender = g;
    this.setState({ gender });
  };
}

export default Dev;
