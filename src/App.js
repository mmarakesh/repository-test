import React from 'react';
import {
BrowserRouter as Router,
Routes,
Route,
Link
} from "react-router-dom";
import Shop from './Shop';
import About from './About';
import Home from './Home';
import './App.css';
import Picture from './Picture';

function App() {

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Picture/>
      <button className="double-border-button">Button</button>
    </div>
  );
}

export default App;
