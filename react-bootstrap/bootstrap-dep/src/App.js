import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App pt-5">
        <div className="container pt-5">
          <button className="btn btn-primary">Click Me!</button>
        </div>
      </div>
    );
  }
}

export default App;
