import React, { Component } from 'react';
import Navbar from './Navbar';
import Form from './Form';
import PageContent from './PageContent';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';

class App extends Component{
  render() {
  return (
    <ThemeProvider>
      <PageContent> 
        <Navbar />
        <Form />
      </PageContent>
     </ThemeProvider> 
    );
  }
}

export default App;
