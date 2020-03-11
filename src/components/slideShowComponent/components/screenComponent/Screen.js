import React, { Component } from "react";
import "./style.css";
import picPath from "../../../../picStore";

class Screen extends Component {
  render() {
    let selectedImage =
      picPath[`src${this.props.currentImageID.currentImageID}`];
    return (
      <div className="col-7 col-sm-9 col-md-6 screen" id="imgCont">
        <img src={selectedImage} className="imgSlider2" alt="Kitten" />
      </div>
    );
  }
}

export default Screen;
