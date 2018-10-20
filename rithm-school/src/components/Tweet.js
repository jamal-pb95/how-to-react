import React from "react";

export class Tweet extends React.Component {
  state = {
    date: "Oct 20, 2018",
    message: "Want to become faster. run fast and don't look back"
  }

  render () {
    return(
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.state.date}</p>
        <p>{this.state.message}</p> 
      </div>
    );
  }
}