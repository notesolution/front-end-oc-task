import React, { Component } from 'react';
import logo from './logo.svg';
import data from 'data/countries';
import './App.css';

// Icons
// https://feathericons.com/
// https://github.com/carmelopullara/react-feather

import { Check, X } from 'react-feather';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <p>
          <Check width="24" height="24" stroke="#43d6a9"/>
          <X width="24" height="24" stroke="#ff6976"/>
        </p>

        {data.map((el) => (
          <p key={`${el.country}${el.capital}`}>
            {el.country} - {el.capital}
          </p>
        ))}
      </div>
    );
  }
}

export default App;
