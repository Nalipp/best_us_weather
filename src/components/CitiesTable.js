import React from 'react';
import PropTypes from 'prop-types';

const CitiesTable = ({ city, handleSortBy }) => {
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

CitiesTable.propTypes = {
  city: PropTypes.object,
  handleSortBy: PropTypes.func,
};

export default CitiesTable;

