import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import ShowDetails from './ShowDetails'
import { PlanetImages } from '../../functions/PlanetImages'

const PlanetDetails = ({ planet: [ name, rotation_period, orbital_period, diameter, climate, 
                                   gravity, terrain, surface_water, population, residents, films ] }) => {

  const planetPic = PlanetImages(name[1])
  const planetInfo = [ planetPic, name[1], rotation_period[1], orbital_period[1], diameter[1], 
                       climate[1], gravity[1], terrain[1], surface_water[1], population[1] ]

  return (
    <div className='ed-grid s-grid-7 rows-gap s-gap-05 m-gap-1 s-pxy-05 m-pxy-1 s-main-center s-cross-center'>

      <div className='s-cols-7 cursor-pointer'>
        <h2 className='s-mb-0'><Link to={`/details/${name[1]}`} style={linkStyle1}>{name[1]}</Link></h2>
      </div>

      <ShowDetails planetInfo={planetInfo} />
    
      <button className={films[1].length > 0 ? 't-button s-x-2 s-cols-2 s-pxy-1 m-px-2' : 'hidden'} onClick={() => { console.log(films[1]) }}>
        <span><Link to={`/films/${name[1]}`} style={linkStyle2}>Check {films[1].length} {films[1].length > 1 ? 'Films' : 'Film'}</Link></span>
      </button>

      <button className={residents[1].length > 0 ? 't-button s-x-5 s-cols-2 s-pxy-1 m-px-2' : 'hidden'} onClick={() => { console.log(residents[1]) }}>
        <span><Link to={`/residents/${name[1]}`} style={linkStyle2}>Check {residents[1].length} {residents[1].length > 1 ? 'Residents' : 'Resident'}</Link></span>
      </button>

    </div>
  )
}

// Prop Types
PlanetDetails.propTypes = {
  planet: PropTypes.array.isRequired
}

// Link styles
const linkStyle1 = {
  textDecoration: 'none',
  color: 'rgb(210, 210, 210)'
}

const linkStyle2 = {
  textDecoration: 'none'
}

export default PlanetDetails
