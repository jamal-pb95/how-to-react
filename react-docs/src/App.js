import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './PriceList';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
};


function App() {
  return (
    <div className="App">
      <FilterableProductTable />
    </div>
  )
}

export default App;
