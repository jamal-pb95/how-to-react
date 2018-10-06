import React from "react";

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  state = {temperature: ''};

  handleChange = event => {
    this.setState({
      temperature: event.target.value
    });
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input
          value={temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

export default TemperatureInput;

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);

  if(Number.isNaN(input)) {
    return '';
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;

  return rounded.toString();
}