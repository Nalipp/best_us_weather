import React, { Component } from 'react';
import { getAllCities } from '../api/allCities';
import { addCity, sortCities } from '../actions';
import { connect } from 'react-redux';
import CitiesTable from './CitiesTable';

class Cities extends Component {
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
                <CitiesTable handleSortBy={this.handleSortBy} city={city} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
