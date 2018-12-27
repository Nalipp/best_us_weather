import React, { Component } from 'react';
import './App.css';
import CitiesFilter from './CitiesFilter';
import Cities from './Cities';


class App extends Component {
  render() {
    return (
      <div>
        <CitiesFilter />
        <Cities />;
      </div>
    )
  }
}

export default App;

