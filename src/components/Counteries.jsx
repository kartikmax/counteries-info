import React, { useState } from 'react'
import CountryDetails from './CountryDetails'

const Counteries = () => {
    const [value,setValue]=useState()
    function hello(){
        // if (value===null)
        setValue(<CountryDetails/>)
        // else
        // setValue(<></>)
    }
  return (
    <div>
      <ul>
          <li onClick={hello}>India</li>
          <li onClick={hello}>Russia</li>
          <li onClick={hello}>China</li>
          <li onClick={hello}>Japan</li>
          <li onClick={hello}>Uae</li>
      </ul>
      {value}
    </div>
  )
}

export default Counteries
