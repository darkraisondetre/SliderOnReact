import React, { Component } from "react";
import "./style.css";
import picPath from "../../../../picStore";

class Screen extends Component {
  selectedImage = () => {
    return (picPath[`src${this.props.currentImageID.currentImageID}`])
  }
  render() {
    return (
      <div className="col-7 col-sm-9 col-md-6 screen" id="imgCont">
        <img src={this.selectedImage()} className="imgSlider2" alt="Kitten" />
      </div>
    );
  }
}

export default Screen;
