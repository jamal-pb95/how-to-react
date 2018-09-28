import React from "react";

class Forms extends React.Component {
  state = {
    value: '',
    essay: 'Please write your essay here...'
  };

  handleValueChange = event => {
    this.setState({
      value: event.target.value
    });
  }

  handleEssayChange = event => {
    this.setState({
      essay: event.target.value
    });
  }

  handleSubmit = event => {
    alert(`
      Subject: ${this.state.value}
      Essay: ${this.state.essay}
    `);
    event.preventDefault();
  }

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text" 
            id="name" 
            value={this.state.value} 
            onChange={this.handleValueChange}
          />
        </label>
        <label htmlFor="essay">
          <textarea
           name="essay"
           id="essay"
           cols="30"
           rows="10"
           onChange={this.handleEssayChange}
           value={this.state.essay} 
          ></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Forms;