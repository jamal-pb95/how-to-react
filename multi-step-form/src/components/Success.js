import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import UserAppBar from './UserAppBar';

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <UserAppBar title="Success" />
          <h1>Thank You For Your Submission</h1>
          <p>You will get an email for further instructions.</p>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Success;
