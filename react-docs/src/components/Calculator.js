import React from "react";

// Scale
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

// Convert to Celsius
const toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * 5 / 9;
}

// Convert to Fahrenheit
const toFahrenheit = (celsius) => {
  return (celsius * 9 / 5) + 32;
}

// Converter method
const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);

  if(Number.isNaN(input)) {
    return '';
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;

  return rounded.toString();
}

// Boiler method
const BoilingVerdict = (props) => {
  return props.celsius >= 100 ? 
    <p>The water would boil.</p> :
    <p>The water would not boil.</p>;
}



class TemperatureInput extends React.Component {

  handleChange = event => {
    this.props.onTemperatureChange(event.target.value)
  }

  render() {
    const temperature = this.props.temperature;
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

class Calculator extends React.Component {
  state = {
    temperature: '',
    scale: 'c'
  };
  handleCelsiusChange = temperature => {
    this.setState({
      scale: 'c', temperature
    });
  }

  handleFahrenheitChange = temperature => {
    this.setState({
      scale: 'f', temperature
    });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />

        <BoilingVerdict
          celsius={parseFloat(celsius)}
        />
      </div>
    );
  }
}

export default Calculator;