import React, { Component } from "react";
import LiveView from "./liveView";
import Question from "./question";
import jsPDF from "jspdf";
import "../App.css";
import Home from "./home";
import Footer from "./footer";
class ResumeApp extends Component {
  state = {
    contact: [
      {
        FullName: "",
        lastPosition: "",
        email: "",
        phoneNumber: "",
        erea: "",
        linkdin: "",
        git: "",
      },
    ],
    aboutme: "",
    experience: [
      {
        job: "",
        place: "",
        role: "",
        time: "",
        achievements: "",
      },
    ],
    languages: [],
    languages2: [],
    languages3: [],
    education: [
      {
        years: "",
        nameOfSchoole: "",
        achivments: "",
      },
    ],
    I: 0,
    Iskill: 0,
    Iskill2: 0,
    Iskill3: 0,
    Ieducation: 0,
    gTamplate: "m",
  };
  styleB = {
    position: "fixed",
    top: "3vh",
    left: "55vw",
    width: "42vw",
    height: "87vh",
    border: "2px solid  rgb(83, 79, 79)",
    paddingLeft: "2.5%",
    paddingRight: "2.5%",
    backgroundColor: "white",
  };
  styleC = {
    position: "fixed",
    top: "3vh",
    left: "6vw",
    width: "45vw",
    height: "87%",
    overflow: "auto",
    border: "2px solid rgb(83, 79, 79)",
    backgroundColor: "white",
  };
  footerStyle = {
    position: "fixed",
    top: "89.5vh",
    width: "100%",
    marginLeft: "0px",
    height: "69px",
  };

  render() {
    return (
      <div>
        <div style={this.styleB}>
          <Question
            pushInfo={this.pushInfo}
            pushExperience={this.pushExperience}
            pushExperience2={this.pushExperience2}
            onsubmitED={this.onsubmitED}
            pushSkills={this.pushSkills}
            pushSkills2={this.pushSkills2}
            pushSkills3={this.pushSkills3}
            pushAboutMe={this.pushAboutMe}
            downlod={this.downlod}
          />
        </div>
        <div id="page" style={this.styleC}>
          <LiveView
            contact={this.state.contact}
            experience={this.state.experience}
            I={this.state.I}
            education={this.state.education}
            languages={this.state.languages}
            languages2={this.state.languages2}
            languages3={this.state.languages3}
            aboutme={this.state.aboutme}
            Iskill={this.state.Iskill}
            men={this.state.men}
            gender={this.props.gender}
          />
        </div>
        <div style={this.footerStyle}>
          <Footer />
        </div>
      </div>
    );
  }

  downlod = () => {
    document.getElementById("page").style.height = "22.3cm";
    document.getElementById("page").style.width = "16cm";
    document.getElementById("page").style.top = "0";
    document.getElementById("page").style.left = "0";

    const doc = new jsPDF("portrait", "pt", "a4");
    doc.html(document.querySelector("#page")).then(() => {
      doc.save("doc.pdf");
    });
    setTimeout(() => {
      document.location.reload();
    }, 3000);
  };

  pushAboutMe = (event, values) => {
    console.log(values);
    event.preventDefault();

    this.state.aboutme = values.piska;
    console.log(this.state.aboutme);
    this.setState({ aboutme: this.state.aboutme });
  };
  pushSkills3 = (event, values) => {
    console.log(values);
    event.preventDefault();
    if (this.state.Iskill3 < 14) {
      this.state.languages3.push(values.languages3);
      console.log(this.state.languages3);
      this.setState({ languages3: this.state.languages3 });
      this.state.Iskill3++;
      this.setState({ Iskill3: this.state.Iskill3 });
    }
  };
  pushSkills2 = (event, values) => {
    event.preventDefault();
    if (this.state.languages2.length < 3) {
      console.log(values);
      event.target.reset();
      this.state.languages2.push(values.languages2);
      console.log(this.state.languages2);
      this.setState({ languages2: this.state.languages2 });
    }
  };

  pushSkills = (event, values) => {
    console.log(values);
    event.preventDefault();
    if (this.state.Iskill2 < 1) {
      this.state.languages.push(values.languages);
      console.log(this.state.languages);
      this.setState({ languages: this.state.languages });
      this.state.Iskill2++;
      this.setState({ Iskill2: this.state.Iskill2 });
    }
  };

  onsubmitED = (event, values) => {
    event.preventDefault();
    if (this.state.Ieducation < 3) {
      console.log(values);
      this.state.education.push(values);
      console.log(this.state.education);
      this.setState({ education: this.state.education });
      this.state.Ieducation++;
      this.setState({ Ieducation: this.state.Ieducation });
    }
  };

  pushExperience2 = (ev, values) => {
    ev.preventDefault();
    if (this.state.I < 3) {
      this.state.experience.push({ ...values });
      this.setState({ experience: this.state.experience });
      console.log(this.state.experience);
      this.state.I++;
      this.setState({ I: this.state.I });
    }
  };
  pushExperience = (ev, values) => {
    ev.preventDefault();
    ev.target.reset();
    console.log(values);
    this.state.experience.push({ ...values });
    this.setState({ experience: this.state.experience });
    console.log(this.state.experience);
  };

  pushInfo = (event, values) => {
    event.preventDefault();
    console.log(values);
    const contact = values;
    this.state.contact = contact;
    this.setState({ contact });
  };
}

export default ResumeApp;
