import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
  render() {
    const characters = [
      {
        'name': 'Jamal Uddin',
        'job': 'Front End React Developer'
      },
      {
        'name': 'Sajal Datta',
        'job': 'ASP.NET Developer'
      },
      {
        'name': 'Kazi Riad',
        'job': 'Web Developer'
      },
      {
        'name': 'Masum Billah',
        'job': 'DevOps Engineer'
      },
      {
        'name': 'Alamgir Hossain',
        'job': 'Network Engineer'
      },
      {
        'name': 'Mizan Bhai',
        'job': 'Database Engineer'
      }
    ];
    
    return(
      <div className="App">
        <div className="container">
          <h1>Employee Dashboard</h1>
          <Table characterData={characters}/>
        </div>
      </div>
    );
  }
}

export default App;