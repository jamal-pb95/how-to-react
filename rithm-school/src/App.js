import React, { Component } from 'react';
import './App.css';
import { FirstComponent } from './components/FirstComponent';
import { SecondComponent } from './components/SecondComponent';
import { NamedComponent } from './components/NamedComponent';
import { Tweet } from './components/Tweet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FirstComponent />
        <SecondComponent />
        <NamedComponent name={"Jamal Uddin"} />
        <Tweet name={"Md. Jamal Uddin"}/>
        <Tweet name={"Alamin Bhai"} />
        <Tweet name={"Bertho Polo"} />
      </div>
    );
  }
}

export default App;
