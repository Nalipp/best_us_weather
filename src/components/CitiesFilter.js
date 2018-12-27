import React, { Component } from 'react';
import Input from './Input';

class CitiesFilter extends Component {
  render() {
    return (
      <form>
        <Input name="max temp" initialVal={80}/>
        <Input name="min temp" initialVal={65}/>
        <Input name="max wind" initialVal={10}/>
        <Input name="max cloud cover" initialVal={20}/>
        <Input name="max humidity" initialVal={100}/>
      </form>
    )
  }
}

export default CitiesFilter;
