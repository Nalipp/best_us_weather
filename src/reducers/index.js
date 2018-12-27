export const cities = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CITY':
      const cityCopy = {...state}
      cityCopy[action.payload[0]] = action.payload[1];
      return cityCopy;
    default:
      return state
  }
}
