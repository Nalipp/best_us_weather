import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
const key = process.env.REACT_APP_WEATHER_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCities: {}
    }
  }
  componentDidMount() {
    axios.get(`/forecast/${key}/40.6635,-73.9387?exclude=minutely,hourly`).then(res => {
      let newState = {...this.state.allCities}
      newState.new_york = res.data;
      this.setState({allCities: newState}, () => {
        console.log(this.state);
      });
    }) 

    axios.get(`/forecast/${key}/41.8376,-87.6818?exclude=minutely,hourly`).then(res => {
      let newState = {...this.state.allCities}
      newState.chicago = res.data;
      this.setState({allCities: newState}, () => {
        console.log(this.state);
      });
    }) 

    axios.get(`/forecast/${key}/34.0194,-118.4108?exclude=minutely,hourly`).then(res => {
      let newState = {...this.state.allCities}
      newState.los_angeles = res.data;
      this.setState({allCities: newState}, () => {
        console.log(this.state);
      });
    }) 

    axios.get(`/forecast/${key}/29.7866,-95.3909?exclude=minutely,hourly`).then(res => {
      let newState = {...this.state.allCities}
      newState.houston = res.data;
      this.setState({allCities: newState}, () => {
        console.log(this.state);
      });
    }) 

    axios.get(`/forecast/${key}/33.5722,-112.0901?exclude=minutely,hourly`).then(res => {
      let newState = {...this.state.allCities}
      newState.phoenix = res.data;
      this.setState({allCities: newState}, () => {
        console.log(this.state);
      });
    }) 


  }
  render() {
    return (
      <div>
        {JSON.stringify(this.state.allCities.new_york)}
      </div>
    );
  }
}

export default App;
