import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    country: '',
    bio: ''
  };

  // Proceed to next page
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  // Go back to previews page
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  // Handle fields change
  handleInputChange = input => event => {
    this.setState({[input]: event.target.value});
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, country, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, country, bio };

    switch(step) {
      case 1:
        return (
          <FormUserDetails 
            nextStep={this.nextStep}
            handleInputChange={this.handleInputChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleInputChange={this.handleInputChange}
            values={values}
          />
        );

      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );

      case 4:
        return <Success />

      default:
        return <h1>Data Not Found</h1>;
    }
  }
}

export default UserForm;
