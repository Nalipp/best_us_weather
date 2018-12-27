import React, { Component } from 'react';
import './App.css';
import { getAllCities } from '../api/allCities';
import { addCity, sortCities } from '../actions';
import { connect } from 'react-redux';

const AllCitiesTable = ({ city, handleSortBy }) => {
  return (
    <table>
      <thead>
        <tr>
          <th onClick={handleSortBy.bind(this, 'cityName')}>city</th>
          <th onClick={handleSortBy.bind(this, 'summary')}>summary</th>
          <th onClick={handleSortBy.bind(this, 'temperature')}>temperature</th>
          <th onClick={handleSortBy.bind(this, 'windSpeed')}>windSpeed</th>
          <th onClick={handleSortBy.bind(this, 'cloudCover')}>cloudCover</th>
          <th onClick={handleSortBy.bind(this, 'humidity')}>humidity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{city.cityName}</td>
          <td>{city.currently.summary}</td>
          <td>{city.currently.temperature}</td>
          <td>{city.currently.windSpeed}</td>
          <td>{city.currently.cloudCover}</td>
          <td>{city.currently.humidity}</td>
        </tr>
      </tbody>
    </table>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curSortBy: null,
    };
    this.handleSortBy = this.handleSortBy.bind(this)
  }
  handleSortBy(id) {
    let citiesCopy = this.props.allCities.slice(); 
    if (this.state.curSortBy === id) {
      citiesCopy.sort((a, b) => a.currently[id] < b.currently[id] ? -1 : 1);
      this.setState({curSortBy: null});
    } else {
      citiesCopy.sort((a, b) => a.currently[id] > b.currently[id] ? -1 : 1);
      this.setState({curSortBy: id});
    }
    this.props.sortCities(citiesCopy)
  }
  componentDidMount() {
    getAllCities(this.props.addCity);
  }
  render() {
    return (
      <div>
        <ul>
          {Object.keys(this.props.allCities).map(key => {
            let city = this.props.allCities[key];
            return (
              <div key={city.latitude}>
                <AllCitiesTable 
                  handleSortBy={this.handleSortBy}
                  city={city} />
              </div>
            )
          })}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCity: (city, data) => dispatch(addCity(city, data)),
    sortCities: (sortedOrder) => dispatch(sortCities(sortedOrder)) 
  }
}

const mapStateToProps = state => {
  return {
    allCities: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
