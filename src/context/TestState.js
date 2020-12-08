import React, { createContext, useReducer } from 'react'
import axios from 'axios'
import TestReducer from './TestReducer'

// Initial state
const initialState = {
  planetData: [],
  filmTitles: [],
  residentTitles: [],
  flagDataAlreadyRetrieved: false
}

// Create Context
export const TestContext = createContext(initialState)

// Provider component
export const TestProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TestReducer, initialState)

  // Action / get planet data from Star Wars API
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

  // Action / get film list from Star Wars API, where the planet appears
  const getFilmTitles = async (filmsArr) => {
    let filmNames = []
    console.log('Getting films data...')
    for (let i = 0; i < filmsArr.length; i++) {
      const res = await axios.get(filmsArr[i])
      filmNames.push(res.data.title)
    }
    dispatch({
      type: 'GET_FILM_TITLES',
      payload: filmNames
    })
  }

  // Action / get resident list from Star Wars API, inhabitants of the planet
  const getResidentTitles = async (residentsArr) => {
    let residentNames = []
    console.log('Getting residents data...')
    for (let i = 0; i < residentsArr.length; i++) {
      const res = await axios.get(residentsArr[i])
      residentNames.push(res.data.name)
    }
    dispatch({
      type: 'GET_RESIDENT_NAMES',
      payload: residentNames
    })
  }

  return (
    <TestContext.Provider 
      value={{
        planetData: state.planetData,
        filmTitles: state.filmTitles,
        residentTitles: state.residentTitles,
        flagDataAlreadyRetrieved: state.flagDataAlreadyRetrieved,
        getPlanetData,
        getFilmTitles,
        getResidentTitles
      }}
    >
      { children }
    </TestContext.Provider>
  )
}
