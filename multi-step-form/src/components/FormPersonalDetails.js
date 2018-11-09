import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UserAppBar from './UserAppBar';


export class FormPersonalDetails extends Component {
  // Continue to next step
  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  }

  // Go back to previous step
  back = event => {
    event.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleInputChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <UserAppBar title="Enter Personal Details" />
          <TextField 
            label="Occupation"
            placeholder="Enter Your Occupation"
            onChange={handleInputChange('occupation')}
            defaultValue={values.occupation}
          />
          <br />
          <TextField 
            label="City"
            placeholder="Enter Your City"
            onChange={handleInputChange('city')}
            defaultValue={values.city}
          />
          <br />
          <TextField 
            label="Country"
            placeholder="Enter Your Country"
            onChange={handleInputChange('country')}
            defaultValue={values.country}
          />
          <br />
          <TextField 
            label="Bio"
            placeholder="Enter Your Bio"
            onChange={handleInputChange('bio')}
            defaultValue={values.bio}
            multiline
            rows="4"
          />
          <br />
          {/* Continue Button */}
          <Button 
            variant="contained" 
            color="primary" 
            style={styles.button}
            onClick={this.continue}>
            CONTINUE
          </Button>
          {/* Back Button */}
          <Button 
            variant="contained" 
            color="secondary" 
            style={styles.button}
            onClick={this.back}>
            BACK
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

export default FormPersonalDetails;
