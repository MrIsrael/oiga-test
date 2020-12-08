import React, { Fragment, useContext, useEffect } from 'react'
import { TestContext } from '../../context/TestState'

import PlanetDetails from '../layout/PlanetDetails'

const Planets = () => {
  const { planetData, flagDataAlreadyRetrieved, getPlanetData } = useContext(TestContext)

  useEffect(() => {
    document.body.scrollTop = 0                // For Safari
    document.documentElement.scrollTop = 0     // For Chrome, Firefox, IE and Opera
    getPlanetData()
    // eslint-disable-next-line
  }, [])

  if (flagDataAlreadyRetrieved) {
    return (
      <Fragment>

        <div className='s-95 m-90 s-center s-to-center s-border s-radius default-margin ed-grid
                        s-grid-1 m-grid-2 lg-grid-3 rows-gap s-gap-3 m-gap-4 s-pxy-1 s-mb-4
                        s-main-center s-cross-center'>
          <h1 className='s-cols-1 m-cols-2 lg-cols-3 s-mb-0'>Star Wars Planets</h1>
          {planetData.map((planet, index) => <PlanetDetails planet={planet} key={index} />)}        
        </div>

      </Fragment>
    )
  }

  return null
}

export default Planets
