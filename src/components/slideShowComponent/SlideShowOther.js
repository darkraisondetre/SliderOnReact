import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { nextImage, prevImage } from "../../actions/slideShowActions";

import "./style.css";

import SlideShowButton from "./components/slideShowButtonComponent/slideShowButton";
import Screen2 from "./components/screenComponent/Screen2";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class SlideShowOther extends Component {
  render() {
    let currentImageID = this.props.currentImageID;
    return (
      <div className="slideShowContainer">
        <div className="title">This is Slider 2</div>
        <div className="topOfSlider">
          <SlideShowButton
            handleClick={() =>
              this.props.prevImage(currentImageID.currentImageID)
            }
            dir={"left"}
          />
          <Screen2 currentImageID={currentImageID} />
          <SlideShowButton
            handleClick={() =>
              this.props.nextImage(currentImageID.currentImageID)
            }
            dir={"right"}
          />
        </div>
        <div className="btnContainer">
          <Link to="/slider1" className="button">
            To Slider 1
          </Link>
          <Link to="/" className="button">
            Go to Main Page
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentImageID: state.currentImageID
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { nextImage: nextImage, prevImage: prevImage },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(SlideShowOther);
