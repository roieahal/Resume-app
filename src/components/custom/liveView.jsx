import React, { Component } from "react";
import "./customStyle.css";

class LiveView extends Component {
  state = {};

  styleC = {};
  styleD = {};
  styleE = {};
  styleF = {};
  styleG = {};
  styleDIV = {};

  render() {
    let chosenGender = this.props.gender;
    let genderTamplatestyleA1 = "styleA1-" + chosenGender;
    let genderTamplateobjectiveStyling = "objectiveStyling-" + chosenGender;
    let genderTamplatestyleDivEducaion = "styleDivEducaion-" + chosenGender;
    let genderTamplatestyleDivExperience = "styleDivExperience-" + chosenGender;
    let genderTamplateskillsContainer = "skillsContainer-" + chosenGender;
    let genderTamplatestyleB1 = "styleB1-" + chosenGender;
    let genderTamplatestyleB12 = "styleB12-" + chosenGender;

    return (
      <React.Fragment>
        <div className="styleA">
          <div className={genderTamplatestyleA1}>
            <p className="FullName">{this.props.contact.FullName}</p>
            <p className="styleLastPosition">
              {this.props.contact.lastPosition}
            </p>
          </div>

          <div className="styleA2">
            <p className="styleP">{this.props.contact.email}</p>
            <p className="styleP">{this.props.contact.phoneNumber}</p>
            <p className="styleP">{this.props.contact.erea}</p>
            <p className="styleP">{this.props.contact.linkdin}</p>
            <p className="styleP">{this.props.contact.git}</p>
          </div>

          <div className={genderTamplateobjectiveStyling}>
            <p className={genderTamplatestyleB1}> Objective</p>
          </div>
          <div
            style={{
              borderBottom: "1px dotted lightskyblue",
            }}
          >
            <p className="styleB2">{this.props.aboutme}</p>
          </div>
          <div className={genderTamplatestyleDivEducaion}>
            <p className={genderTamplatestyleB12}>Education</p>
            {this.props.education.map((ed, index) => (
              <div key={index + 1}>
                <div className="styleC1">
                  <p className="styleP1" key={index + 1}>
                    {ed.nameOfSchoole}
                  </p>

                  <p className="styleP2" key={index + 2}>
                    {ed.years}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="styleDivEducaion1">
            {this.props.education.map((ed, index) => (
              <div key={index + 1}>
                <div className="styleC2">
                  <p className="styleP3" key={index + 3}>
                    {ed.achivments}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div id="women" className={genderTamplatestyleDivExperience}>
            <p className={genderTamplatestyleB12}>Experience</p>
            {this.props.experience.map((expi, index) => (
              <div className="styleD1">
                <p className="styleP" key={index + 2}>
                  {expi.place}
                </p>
                <p style={{ marginBottom: "0.5rem" }} key={index + 4}>
                  {expi.time}
                </p>
              </div>
            ))}
          </div>
          <div className="styleDivExperience1">
            {this.props.experience.map((expi, index) => (
              <div className="styleD2" key={index + 4}>
                <p className="styleLittelExpi" key={index + 1}>
                  {expi.job}
                </p>

                <p className="styleLittelExpi" key={index + 3}>
                  {expi.role}
                </p>

                <p className="styleP" key={index + 5}>
                  {expi.achievements}
                </p>
              </div>
            ))}
          </div>
          <div className={genderTamplateskillsContainer}>
            <p className={genderTamplatestyleB12}>Skills</p>
            <div className="styleE2">
              {this.props.languages.map((code, index) => {
                console.log(code + "mapping code");
                return (
                  <ul>
                    {code.map((val) => (
                      <li>{val}</li>
                    ))}
                  </ul>
                );
              })}

              <div>
                <ul>
                  {this.props.languages2.map((code, index) => (
                    <div key={index}>
                      <div>
                        <li className="styleP" key={index}>
                          {code}
                        </li>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="styleE2">
              <ul>
                {this.props.languages3.map((code, index) => (
                  <div key={index}>
                    <div>
                      <li className="styleP" key={index}>
                        {code}
                      </li>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LiveView;

//!=========================================================MEN STYLE==================================================================================
