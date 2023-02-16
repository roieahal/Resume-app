import React, { Component } from "react";
import "../homeStyle.css";
import "boxicons";

import HomeNav from "./homeNav";
import HomeBody from "./homeBody";
import HomeFooter from "./homeFooter";

class Home extends Component {
  state = {
    bodyTamplate: "photoWrap",
    costumTamplate: "costumHidden",
    img2Style: "image2",
    img2women: "im",
  };
  render() {
    return (
      <React.Fragment>
        <div className="conteiner">
          <HomeNav handleGender={this.props.handleGender} />
          <HomeBody
            handleGender={this.props.handleGender}
            tamplate={this.state.bodyTamplate}
            openCostum={this.openCostum}
            openHiddden={this.state.costumTamplate}
            img2Style={this.state.img2Style}
          />
          <HomeFooter />
        </div>
      </React.Fragment>
    );
  }
  openCostum = (s, sHidden, img2hidden) => {
    let costumImgUp = sHidden;
    let imgHideen = s;
    let img2fade = img2hidden;
    this.setState({
      costumTamplate: costumImgUp,
      bodyTamplate: imgHideen,
      img2Style: img2fade,
    });
  };
}

export default Home;
