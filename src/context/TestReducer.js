const TestReducer = (state, action) => {
  switch (action.type) {
    case 'GET_PLANET_DATA':
      return {
        ...state,
        planetData: action.payload,
        flagDataAlreadyRetrieved: action.flag
      }

    // case 'GET_USER':
    //   return {
    //     ...state,
    //     userInfo: { ...state.userInfo, ...{ avatarUrl: action.payload.avatar_url, name: action.payload.name,
    //                                         location: action.payload.location, userLoaded: true } }
    //   }

    default:
      return state
  }
}

export default TestReducer
