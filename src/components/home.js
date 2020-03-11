import React from "react";
import logo from "../logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 

function Home(){
      return (
      <div className="main">
        <div className="title title_mb">Hello, visiter!</div>
        <img src={logo} className="logo" alt="React logo"/>
        <Link to="/slider1" className="button">
          Go to slider
        </Link>
      </div>
    );  
  }

  export default Home;