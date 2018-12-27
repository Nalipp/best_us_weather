export const addCity = (city, data) => {
  data.cityName = city;
  return {
    type: 'ADD_CITY',
    payload: data
  }
}

export const sortCities = sortedOrder => {
  return {
    type: 'SORT_CITIES',
    payload: sortedOrder
  }
}
