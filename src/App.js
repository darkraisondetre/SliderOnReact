import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import SlideShow from './components/slideShowComponent/SlideShow';
import SlideShowOther from './components/slideShowComponent/SlideShowOther';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}  from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <div className="wrapper">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/slider1">
              <SlideShow/>
            </Route>
            <Route path="/slider2">
              <SlideShowOther/>
            </Route>
          </Switch>
        </div>
        </Router>
      </div>
    );
  }
}

function Home() {
  return (
    <div className="main">
       <div className='title title_mb' >
        Hello, visiter!
      </div>
      <img src={logo} className="logo" />
      <Link to="/slider1" className="button">Go to slider</Link>
    </div>
  );
}

export default App;