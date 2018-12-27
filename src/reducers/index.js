export const cities = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CITY':
      const cityCopy = [...state, action.payload]
      return cityCopy;
    case 'SORT_CITIES':
      return action.payload
    default:
      return state
  }
}
