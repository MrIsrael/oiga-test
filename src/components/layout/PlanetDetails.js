import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { PlanetImages } from '../../functions/PlanetImages'

const PlanetDetails = ({ planet: [ name, rotation_period, orbital_period, diameter, climate, 
                                   gravity, terrain, surface_water, population, residents, films ] }) => {

  const planetPic = PlanetImages(name[1])

  return (
    <div className='ed-grid s-grid-7 rows-gap s-gap-05 m-gap-1 s-pxy-05 m-pxy-1 s-main-center s-cross-center'>

      <div className='s-cols-7'>
        <h2 className='s-mb-0'>{name[1]}</h2>
      </div>
    
      <div className='s-cols-3 s-ratio-2-2 img-container'>
        <img src={planetPic} alt={name[1]} />
      </div>

      <div className='s-cols-4 s-left'>
        <p className='s-mb-0'><strong>Rotation Period:</strong> {rotation_period[1]}</p>
        <p className='s-mb-0'><strong>Orbital Period:</strong> {orbital_period[1]}</p>
        <p className='s-mb-0'><strong>Diameter:</strong> {diameter[1]}</p>
        <p className='s-mb-0'><strong>Climate:</strong> {climate[1]}</p>
        <p className='s-mb-0'><strong>Gravity:</strong> {gravity[1]}</p>
        <p className='s-mb-0'><strong>Terrain:</strong> {terrain[1]}</p>
        <p className='s-mb-0'><strong>Surface Water:</strong> {surface_water[1]}</p>
        <p className='s-mb-0'><strong>Population:</strong> {population[1]}</p>
      </div>

      <button className='t-button s-x-2 s-cols-2 s-pxy-1 m-px-2' onClick={() => { console.log(films[1]) }}>
        {films[1].length > 0 && <span>Check {films[1].length} {films[1].length > 1 ? 'Films' : 'Film'}</span>}
        {films[1].length === 0 && <span>No films</span>}
      </button>

      <button className='t-button s-x-5 s-cols-2 s-pxy-1 m-px-2' onClick={() => { console.log(residents[1]) }}>
        {residents[1].length > 0 && <span>Check {residents[1].length} {residents[1].length > 1 ? 'Residents' : 'Resident'}</span>}
        {residents[1].length === 0 && <span>No Residents</span>}
      </button>

    </div>
  )
}

PlanetDetails.propTypes = {
  planet: PropTypes.array.isRequired
}

export default PlanetDetails
