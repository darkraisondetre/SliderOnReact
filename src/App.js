import React, { Component } from "react";
import "./App.css";
import SlideShow from "./components/slideShowComponent/SlideShow";
import SlideShowOther from "./components/slideShowComponent/SlideShowOther";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Home from './components/home' 

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
                <SlideShow />
              </Route>
              <Route path="/slider2">
                <SlideShowOther />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
