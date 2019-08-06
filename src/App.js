import React, { Component } from 'react';
import Navbar from './Navbar';
import Form from './Form';
import './App.css';

class App extends Component{
  render() {
  return (
      <> 
        <Navbar />
        <Form />
      </>
    );
  }
}

export default App;
