import React, { Component } from 'react';
import Header from './components/Header'
import './App.css';
import Footer from './components/Footer'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header name='hello react' />
         <Main />
         <Footer />
      </div>
    );
  }
}

export default App;
