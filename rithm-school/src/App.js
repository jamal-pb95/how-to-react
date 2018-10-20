import React, { Component } from 'react';
import './App.css';
import { FirstComponent } from './components/FirstComponent';
import { SecondComponent } from './components/SecondComponent';
import { NamedComponent } from './components/NamedComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FirstComponent />
        <SecondComponent />
        <NamedComponent name={"Jamal Uddin"} />
      </div>
    );
  }
}

export default App;
