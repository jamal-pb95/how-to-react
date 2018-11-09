import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import UserAppBar from './UserAppBar';


export class Confirm extends Component {
  // Continue to next step
  continue = event => {
    event.preventDefault();
    // Set your server address here
    this.props.nextStep();
  }

  // Go back to previous step
  back = event => {
    event.preventDefault();
    this.props.prevStep();
  }

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, country, bio }
    } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <UserAppBar title="Confirm Your Details" />
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={ firstName } />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={ lastName } />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={ email } />
            </ListItem>
            <ListItem>
              <ListItemText primary="Occupation" secondary={ occupation } />
            </ListItem>
            <ListItem>
              <ListItemText primary="City" secondary={ city } />
            </ListItem>
            <ListItem>
              <ListItemText primary="Country" secondary={ country } />
            </ListItem>
            <ListItem>
              <ListItemText primary="Bio" secondary={ bio } />
            </ListItem>
          </List>
          <Divider />
          {/* Confirm & Continue Button */}
          <Button 
            variant="contained" 
            color="primary" 
            style={styles.button}
            onClick={this.continue}>
            CONFIRM & CONTINUE
          </Button>
          {/* Go Back to Previous Step */}
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

export default Confirm;
