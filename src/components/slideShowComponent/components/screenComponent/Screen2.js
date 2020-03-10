import React, { Component } from "react";
import "./style.css";

class Screen2 extends Component {
  render() {

// const kitten1 = require('./resources/images/kitten_1.jpg');
// const kitten2 = require('./resources/images/kitten_2.jpg');
// const kitten3 = require('./resources/images/kitten_3.jpg');

//   fetch(kitten1, kitten2, kitten3)
//   .then(response=>{
//     console.log(response);
//     return response.blob();
//   })
//   .then(blob=>{
//     console.log(blob);
//     document.getElementById('my-img').src=URL.createObjectURL(blob);
//   })


    let selectedImage = require(`./resources/images/kitten_${
      this.props.currentImageID.currentImageID
    }.jpg`);

    let styles = {
        backgroundImage: 'url(' + selectedImage + ')',
    }

    return <div style={styles} className="col-7 col-sm-9 col-md-6 screen"/>;
  }
}

export default Screen2;  