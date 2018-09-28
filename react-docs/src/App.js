import React, { Component } from 'react';
import './App.css';
import { Comment } from './components/Comment';
import Clock from './components/Clock';
import { Toggle } from './components/Toggle';
import NumberList from './components/NumberList';
import Forms from './components/Forms';

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
      <div className="left-aligned">
        <NumberList />
        <Forms />
      </div>
    </div>
  )
}

export default App;
