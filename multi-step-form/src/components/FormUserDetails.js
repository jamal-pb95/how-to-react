import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UserAppBar from './UserAppBar';


export class FormUserDetails extends Component {
  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values, handleInputChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <UserAppBar title="Enter User Details" />
          <TextField 
            label="First Name"
            placeholder="Enter Your First Name"
            onChange={handleInputChange('firstName')}
            defaultValue={values.firstName}
          />
          <br />
          <TextField 
            label="Last Name"
            placeholder="Enter Your Last Name"
            onChange={handleInputChange('lastName')}
            defaultValue={values.lastName}
          />
          <br />
          <TextField 
            label="Email"
            placeholder="Enter Your Email"
            onChange={handleInputChange('email')}
            defaultValue={values.email}
          />
          <br />
          <Button 
            variant="contained" 
            color="primary" 
            style={styles.button}
            onClick={this.continue}>
            CONTINUE
          </Button>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
