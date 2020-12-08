import React, { Fragment, useContext, useEffect } from 'react'
import { TestContext } from '../../context/TestState'

import PlanetDetails from '../layout/PlanetDetails'
import ModalForm from '../layout/ModalForm'

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
          <h4 className='s-cols-1 m-cols-2 lg-cols-3 s-mt-3 s-mb-0'>(click on planet name to see details)</h4>
          <button className='t-button s-cols-1 m-cols-2 lg-cols-3 s-80 m-60 lg-30 s-to-center s-mt-3 lg-mt-2 s-mb-0 s-pxy-1'
                  onClick={() => { document.getElementById('modal').style.display = 'block' }}>
            Open Modal
          </button>
          <div id='modal' className='modal'> <ModalForm /> </div>
          {planetData.map((planet, index) => <PlanetDetails planet={planet} key={index} />)}        
        </div>

      </Fragment>
    )
  }

  return null
}

export default Planets
