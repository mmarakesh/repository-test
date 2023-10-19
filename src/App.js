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

function App() {
  return <Router>
<nav>
  <Link to="/about">About</Link>
  <Link to="/home">Home</Link>
  <Link to="/shop">Shop</Link>
</nav>

<Routes>
  <Route path="/about" element={<About/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/shop" element={<Shop/>}/>
</Routes>
</Router>
}



export default App;
