import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialVal,
    }
    this.startIncrease = this.startIncrease.bind(this);
    this.startDecrease = this.startDecrease.bind(this);
    this.stopIncrement = this.stopIncrement.bind(this);
  }
  startIncrease() {
    this.incrementId = setInterval(() => {
      this.setState({value: this.state.value + 1});
    }, 200);
  }
  startDecrease() {
    this.incrementId = setInterval(() => {
      this.setState({value: this.state.value - 1});
    }, 200);
  }
  stopIncrement() {
    clearInterval(this.incrementId);
  }
  render() {
    return (
      <div>
        <label>{this.props.name}
          <button 
            onMouseDown={this.startDecrease} 
            onMouseUp={this.stopIncrement} 
            type="button">-</button>
          <input type="hidden" value={this.state.value}/>
          <span>{this.state.value}</span>
          <button 
            onMouseDown={this.startIncrease} 
            onMouseUp={this.stopIncrement} 
            type="button">+</button>
        </label>
      </div>
    )
  }
}

Input.propTypes = {
  name: PropTypes.string,
  initialVal: PropTypes.number,
}

export default Input;
