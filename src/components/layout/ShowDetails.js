import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ShowDetails = ({ planetInfo: [ planetPic, name, rotation_period, orbital_period, diameter, 
                                     climate, gravity, terrain, surface_water, population ] }) => {

  return (
    <Fragment>

      <div className='s-cols-3 s-ratio-2-2 img-container'>
        <img src={planetPic} alt={name} />
      </div>

      <div className='s-cols-4 s-left planet-info'>
        <p className='s-mb-0'><strong>Rotation Period:</strong> {parseInt(rotation_period).toLocaleString('es-CO')}</p>
        <p className='s-mb-0'><strong>Orbital Period:</strong> {parseInt(orbital_period).toLocaleString('es-CO')}</p>
        <p className='s-mb-0'><strong>Diameter:</strong> {parseInt(diameter).toLocaleString('es-CO')}</p>
        <p className='s-mb-0'><strong>Climate:</strong> {climate}</p>
        <p className='s-mb-0'><strong>Gravity:</strong> {gravity}</p>
        <p className='s-mb-0'><strong>Terrain:</strong> {terrain}</p>
        <p className='s-mb-0'><strong>Surface Water:</strong> {surface_water}</p>
        <p className='s-mb-0'><strong>Population:</strong> {population !== 'unknown' ? parseInt(population).toLocaleString("es-CO") : 'unknown'}</p>
      </div>

    </Fragment>
  )
}

// Prop Types
ShowDetails.propTypes = {
  planetInfo: PropTypes.array.isRequired
}

export default ShowDetails
