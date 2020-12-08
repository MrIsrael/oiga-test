import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TestContext } from '../../context/TestState'

const ListResidents = (props) => {
  const { planetData, residentTitles, getResidentTitles } = useContext(TestContext)
  const { name } = props.match.params

  useEffect(() => {
    const specificPlanet = planetData.filter(planet => planet[0][1] === name)
    const residents = specificPlanet[0][9][1]
    getResidentTitles(residents)
    // eslint-disable-next-line
  }, [])

  return (
    <div className='ed-grid s-grid-1 rows-gap s-gap-05 m-gap-1 s-pxy-05 m-pxy-1 s-main-center s-cross-center'>

      <h2 className='s-center s-mb-1'>Residents in {name}:</h2>

      {residentTitles.map((resident, index) => <p className='s-center s-mb-1' key={index}>
                                                 <span>{resident}</span>
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

export default ListResidents
