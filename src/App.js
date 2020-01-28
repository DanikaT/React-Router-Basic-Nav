import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {  BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => (
  
  <div className="App">
    <Navigation  />
<Route exact path="/" component={Home}/>
<Route path="/contact" component={Contact}/>
<Route path="/about" component={About}/>
  </div>
);

export default App;
