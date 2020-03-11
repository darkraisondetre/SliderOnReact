import React, { Component } from "react";
import "./style.css";
import { objUrl } from "../../../../urls";

class Screen2 extends Component {
  render() {
    let styles = {
      backgroundImage: `url(${objUrl[`url${this.props.currentImageID.currentImageID}`]})`
    };
    return (
      <div
        style={styles}
        className="col-7 col-sm-9 col-md-6 screen"
        id="imgCont"
      />
    );
  }
}

export default Screen2;
