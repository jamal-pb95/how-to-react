import React from "react";

export class Person extends React.Component {

  render () {
    return (
      <div>  
        <p>Learn some information about this person:</p>
        <p>This is {this.props.name} and he is {this.props.age} years old.</p>
        {this.props.age >= 21 ? (
            <h3>have a drink!</h3>
          ) : (
            <h3>you must be 21</h3>
        )}
      </div>
    );
  }
}