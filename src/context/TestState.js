import React, { createContext, useReducer } from 'react'
import axios from 'axios'
import TestReducer from './TestReducer'

// Initial state
const initialState = {
  planetData: [],
  flagDataAlreadyRetrieved: false
}

// Create Context
export const TestContext = createContext(initialState)

// Provider component
export const TestProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TestReducer, initialState)

  // Action / obtener datos de los planetas, desde la Star Wars API
  const getPlanetData = async () => {
    console.log('Getting planet data...')
    const res = await axios.get('http://swapi.dev/api/planets')
    // console.log(res.data.results)
    const arr = res.data.results.map(obj => Object.entries(obj))
    console.log(arr)
    dispatch({
      type: 'GET_PLANET_DATA',
      payload: arr,
      flag: true
    })
  }

  return (
    <TestContext.Provider 
      value={{
        planetData: state.planetData,
        flagDataAlreadyRetrieved: state.flagDataAlreadyRetrieved,
        getPlanetData
      }}
    >
      { children }
    </TestContext.Provider>
  )
}
