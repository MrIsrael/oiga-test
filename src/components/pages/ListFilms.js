import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TestContext } from '../../context/TestState'

const ListFilms = (props) => {
  const { planetData, filmTitles, getFilmTitles } = useContext(TestContext)
  const { name } = props.match.params

  useEffect(() => {
    const specificPlanet = planetData.filter(planet => planet[0][1] === name)
    const films = specificPlanet[0][10][1]
    getFilmTitles(films)
    // eslint-disable-next-line
  }, [])

  return (
    <div className='ed-grid s-grid-1 rows-gap s-gap-05 m-gap-1 s-pxy-05 m-pxy-1 s-main-center s-cross-center'>

      <h2 className='s-center s-mb-1'>Films where {name} appears:</h2>

      {filmTitles.map((film, index) => <p className='s-center s-mb-1' key={index}>
                                         <span>{film}</span>
                                       </p>
                     )}        

      <button className='t-button s-pxy-1 m-px-2'>
        <span><Link to='/' style={linkStyle}>Back to planet grid</Link></span>
      </button>

    </div>
  )
}

// Link styles
const linkStyle = {
  textDecoration: 'none'
}

export default ListFilms
