import React, { Component } from 'react';
import './App.css';
import { getAllCities } from '../api/allCities';
import { addCity } from '../actions';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCities: {}
    }
  }

  componentDidMount() {
    const { addCity } = this.props;
    getAllCities(addCity);
  }
  render() {
    return (
      <div>
        <ul>
          {Object.keys(this.props.allCities).map(city => {
            let data = this.props.allCities[city];
            return (
              <li key={data.latitude}>
                {city}
                {data.currently.summary}
                {data.currently.temperature}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCity: (city, data) => dispatch(addCity(city, data))
  }
}

const mapStateToProps = state => {
  return {
    allCities: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
