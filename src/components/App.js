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
              <table key={data.latitude}>
                <thead>
                  <tr>
                    <th>city</th>
                    <th>summary</th>
                    <th>temperature</th>
                    <th>windSpeed</th>
                    <th>cloudCover</th>
                    <th>humidity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{city}</td>
                    <td>{data.currently.summary}</td>
                    <td>{data.currently.temperature}</td>
                    <td>{data.currently.windSpeed}</td>
                    <td>{data.currently.cloudCover}</td>
                    <td>{data.currently.humidity}</td>
                  </tr>
                </tbody>
              </table>
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
