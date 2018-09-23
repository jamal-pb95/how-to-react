import React, { Component } from 'react';
import './App.css';
import { Comment } from './components/Comment';
import Clock from './components/Clock';
import { Toggle } from './components/Toggle';

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
      <Comment
        text={comment.text}
        author={comment.author}
      />
      <Clock />
      <Toggle />
    </div>
  )
}

export default App;
