import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./contact";
import Experience from "./experience";
import Education from "./educaion";
import Skills from "./skills";
import AboutMe from "./aboutMe";

class Question extends Component {
  state = {};
  constructor() {
    super();
  }
  render() {
    return (
      <Routes>
        <Route path="/" element={<Contact pushInfo={this.props.pushInfo} />} />
        <Route
          path="/aboutMe"
          element={<AboutMe pushAboutMe={this.props.pushAboutMe} />}
        />
        <Route
          path="/experience"
          element={
            <Experience
              pushExperience={this.props.pushExperience}
              pushExperience2={this.props.pushExperience2}
            />
          }
        />
        <Route
          path="/Education"
          element={<Education onsubmitED={this.props.onsubmitED} />}
        />
        <Route
          path="/skills"
          element={
            <Skills
              pushSkills={this.props.pushSkills}
              pushSkills2={this.props.pushSkills2}
              pushSkills3={this.props.pushSkills3}
              downlod={this.props.downlod}
            />
          }
        />
      </Routes>
    );
  }
}

export default Question;
