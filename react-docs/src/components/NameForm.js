import React from "react";

class NameForm extends React.Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({
      value: event.target.value.toUpperCase()
    });
  }

  handleSubmit = event => {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}