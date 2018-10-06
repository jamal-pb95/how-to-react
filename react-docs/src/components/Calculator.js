import React from "react";
import { BoilingVerdict } from "./BoilingVerdict";

class Calculator extends React.Component {
  state = {
    temperature: ''
  };

  handleChange = event => {
    this.setState({
      temperature: event.target.value
    });
  }

  render() {
    const temperature = this.state.temperature;

    return (
      <fieldset>
        <legend>Enter temperature in celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange}
        />
        <BoilingVerdict
          celsius={parseFloat(temperature)}
        />
      </fieldset>
    );
  }
}

export default Calculator;