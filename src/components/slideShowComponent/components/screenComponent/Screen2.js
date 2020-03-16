import React, { Component } from "react";
import "./style.css";
import { objUrl } from "../../../../urls";

class Screen2 extends Component {
  styles = () => {
    return {
      backgroundImage: `url(${
        objUrl[`url${this.props.currentImageID.currentImageID}`]
      })`
    };
  };
  render() {
    return (
      <div
        style={this.styles()}
        className="col-7 col-sm-9 col-md-6 screen"
        id="imgCont"
      />
    );
  }
}

export default Screen2;
