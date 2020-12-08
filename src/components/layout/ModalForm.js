import React, { Fragment, useState } from 'react'
import { RandomMessages } from '../../functions/RandomMessages'

const ModalForm = () => {
  const [randomMessageOn, setRandomMessageOn] = useState(false)
  const [message, setMessage] = useState('')

  function submitForm(e) {
    e.preventDefault()
    setMessage( RandomMessages( Math.ceil(Math.random() * 5) ) )
    console.log('Form submitted!')
    setRandomMessageOn(true)
    setTimeout(() => { 
      document.getElementById('modal').style.display = 'none' 
      setRandomMessageOn(false)
    }, 2500)
  }

  if (!randomMessageOn) {
    return (
      <Fragment>

        <div className='modal-content s-pxy-1 m-pxy-2 s-80'>
          
          <div className='s-right'>
            <i className='far fa-window-close cursor-pointer' onClick={() => { document.getElementById('modal').style.display = 'none' }}></i>
          </div>

          <p>Enter planet data:</p>

          <form className='m-60 s-to-center ed-grid s-grid-1 m-grid-2 rows-gap s-gap-1 m-gap-2 s-pxy-1 s-main-center s-cross-center' 
                onSubmit={(e) => { submitForm(e) }}>
            <label htmlFor='pname'>Planet name:</label>
            <input type='text' id='pname' name='pname' placeholder='Enter planet name here' required />
            <label htmlFor='rperiod'>Rotation period:</label>
            <input type='number' id='rperiod' name='rperiod' placeholder='Enter a number here' required />
            <label htmlFor='operiod'>Orbital period:</label>
            <input type='number' id='operiod' name='operiod' placeholder='Enter a number here' required />
            <label htmlFor='diameter'>Diameter:</label>
            <input type='number' id='diameter' name='diameter' placeholder='Enter a number here' required />
            <label htmlFor='climate'>Climate:</label>
            <input type='text' id='climate' name='climate' placeholder='Enter climate description here' required />
            <label htmlFor='gravity'>Gravity:</label>
            <input type='text' id='gravity' name='gravity' placeholder='Enter gravity value here' required />
            <label htmlFor='terrain'>Terrain:</label>
            <select name='terrain' id='terrain' required>
              <option value='desert'>Desert</option>
              <option value='grasslands'>Grasslands</option>
              <option value='mountains'>Mountains</option>
              <option value='jungle'>Jungle</option>
              <option value='rainforest'>Rainforest</option>
              <option value='tundra'>Tundra</option>
              <option value='swamp'>Swamp</option>
              <option value='ice caves'>Ice caves</option>
              <option value='cityscapes'>Cityscapes</option>
              <option value='lakes'>Lakes</option>
              <option value='ocean'>Ocean</option>
              <option value='gas giant'>Gas giant</option>
            </select>
            <label htmlFor='swater'>Surface water:</label>
            <input type='number' id='swater' name='swater' placeholder='Enter a number here' required />
            <input className='m-cols-2 s-pxy-1' type='submit' value='Submit' />
          </form>

        </div>

      </Fragment>
    )
  }

  if (randomMessageOn) {
    return (
      <Fragment>
        <div className='modal-content s-pxy-1 m-pxy-2 s-80'>
          <p>{message}</p>
        </div>
      </Fragment>
    )
  }

  return null
}

export default ModalForm
