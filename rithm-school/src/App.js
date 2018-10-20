import React, { Component } from 'react';
import './App.css';
import { FirstComponent } from './components/FirstComponent';
import { SecondComponent } from './components/SecondComponent';
import { NamedComponent } from './components/NamedComponent';
import { Tweet } from './components/Tweet';
import { Person } from './components/Person';

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
        <Person name={"Jamal Uddin"} age={23} />
        <Person name={"Fahim the React Guru"} age={20} />
      </div>
    );
  }
}

export default App;
