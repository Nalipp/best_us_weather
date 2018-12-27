export const addCity = (city, data) => {
  return {
    type: 'ADD_CITY',
    payload: [city, data]
  }
}
