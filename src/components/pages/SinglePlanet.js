import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TestContext } from '../../context/TestState'

import ShowDetails from '../layout/ShowDetails'
import { PlanetImages } from '../../functions/PlanetImages'

const SinglePlanet = (props) => {
  const { planetData } = useContext(TestContext)
  const { name } = props.match.params

  const planetPic = PlanetImages(name)
  const specificPlanet = planetData.filter(planet => planet[0][1] === name)
  const planetInfo = [ planetPic, name, specificPlanet[0][1][1], specificPlanet[0][2][1], specificPlanet[0][3][1], specificPlanet[0][4][1], 
                       specificPlanet[0][5][1], specificPlanet[0][6][1], specificPlanet[0][7][1], specificPlanet[0][8][1] ]

  return (
    <div className='ed-grid s-grid-7 rows-gap s-gap-05 m-gap-1 s-pxy-05 m-pxy-1 s-main-center s-cross-center'>

      <div className='s-cols-7 s-center cursor-pointer'>
        <h2 className='s-mb-0'>{name}</h2>
      </div>

      <ShowDetails planetInfo={planetInfo} />
    
      <button className='t-button s-x-1 s-cols-7 s-pxy-1 m-px-2'>
        <span><Link to='/' style={linkStyle}>Back to planet grid</Link></span>
      </button>

    </div>
  )
}

// Link styles
const linkStyle = {
  textDecoration: 'none'
}

export default SinglePlanet
