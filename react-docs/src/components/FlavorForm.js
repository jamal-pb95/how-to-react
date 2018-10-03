import React from "react";

class FlavorForm extends React.Component {
  state = {
    value: 'coconut'
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit = event => {
    alert("Your favorit flavor is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form action="#" onSubmit={this.handleSubmit}>
        <label htmlFor="sel">
          Pick your favorite flavor:
          <select name="sel" id="sel" onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
            <option value="jackfruit">Jackfruit</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FlavorForm;