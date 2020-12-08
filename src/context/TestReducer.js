const TestReducer = (state, action) => {
  switch (action.type) {
    case 'GET_PLANET_DATA':
      return {
        ...state,
        planetData: action.payload,
        flagDataAlreadyRetrieved: action.flag
      }
    case 'GET_FILM_TITLES':
      return {
        ...state,
        filmTitles: action.payload
      }
    case 'GET_RESIDENT_NAMES':
      return {
        ...state,
        residentTitles: action.payload
      }
    default:
      return state
  }
}

export default TestReducer
