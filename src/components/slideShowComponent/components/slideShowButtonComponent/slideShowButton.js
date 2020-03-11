import React from "react";
import "./style.css";

function SlideShowButton(props) {
    return (
      <div className="slideShowButton">
        <i onClick={props.handleClick} className={`fas fa-arrow-circle-${props.dir}`} />
      </div>
    );
}

export default SlideShowButton;
