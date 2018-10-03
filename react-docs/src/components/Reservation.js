import React from "react";

class Reservation extends React.Component {
  state = {
    isGoing: true,
    numberOfGuests: 2
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form action="#">
        <label>
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br/>
        <label>
          Number of guests:
          <input 
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

export default Reservation;