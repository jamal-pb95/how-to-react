import React, { Component } from 'react';

class DogItem extends Component {
  deleteDog(name) {
    this.props.onDelete(name);
  }

  render() {
    return (
      <ul className="Dog">
        <img 
          src={this.props.dog.image} 
          href={this.props.dog.image} 
          width="100" 
          height="100" 
          alt="" />
        <br />
        <strong>
          {this.props.dog.name}</strong>: 
          {this.props.dog.breed} 
          <a href="https://dogs.com" onClick={this.deleteDog.bind(this, this.props.dog.name)}>X</a>
        <br />
      </ul>
    );
  }
}

export default DogItem;