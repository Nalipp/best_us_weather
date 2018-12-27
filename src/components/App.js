import React, { Component } from 'react';
import './App.css';
// import getAllCities from '../api/allCities';

import axios from 'axios';
import { addCity } from '../actions';
import { connect } from 'react-redux';
const key = process.env.REACT_APP_WEATHER_API_KEY;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCities: {}
    }
  }

  componentDidMount() {
    axios.get(`/forecast/${key}/40.6635,-73.9387?exclude=minutely,hourly`)
      .then(city => this.props.addCity('new_york', city.data))
    axios.get(`/forecast/${key}/41.8376,-87.6818?exclude=minutely,hourly`)
      .then(city => this.props.addCity('chicago', city.data))
    axios.get(`/forecast/${key}/34.0194,-118.4108?exclude=minutely,hourly`)
      .then(city => this.props.addCity('los_angles', city.data))
    axios.get(`/forecast/${key}/29.7866,-95.3909?exclude=minutely,hourly`)
      .then(city => this.props.addCity('houston', city.data))
    axios.get(`/forecast/${key}/33.5722,-112.0901?exclude=minutely,hourly`)
      .then(city => this.props.addCity('phoenix', city.data))
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
