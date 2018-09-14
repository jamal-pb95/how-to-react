import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
  state = {
    characters: [
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
    ]
  };

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  }

  render() {
    const { characters } = this.state;

    return(
      <div className="container">
        <h1>Employee Dashboard</h1>
        <Table 
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
      </div>
    );
  }
}

export default App;