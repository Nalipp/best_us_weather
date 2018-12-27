import axios from 'axios';
const key = process.env.REACT_APP_WEATHER_API_KEY;

export const getAllCities = addCity => {
  axios.get(`/forecast/${key}/40.6635,-73.9387?exclude=minutely,hourly`)
    .then(city => addCity('new_york', city.data))
  axios.get(`/forecast/${key}/41.8376,-87.6818?exclude=minutely,hourly`)
    .then(city => addCity('chicago', city.data))
  axios.get(`/forecast/${key}/34.0194,-118.4108?exclude=minutely,hourly`)
    .then(city => addCity('los_angles', city.data))
  axios.get(`/forecast/${key}/29.7866,-95.3909?exclude=minutely,hourly`)
    .then(city => addCity('houston', city.data))
  axios.get(`/forecast/${key}/33.5722,-112.0901?exclude=minutely,hourly`)
    .then(city => addCity('phoenix', city.data))
}
