import React, { useEffect, useState } from 'react'
import Counteries from './Counteries'

const Continents = () => {
    const [value,setValue]=useState('')
    function hello(){
        setValue(<Counteries/>)    
    }
    useEffect(()=>{

    },[value])
     return (
    <div>
      <ul>
          <li onClick={hello}>Asia</li>
          <li onClick={hello}>Africa</li>
          <li onClick={hello}>Europe</li>
          <li onClick={hello}>North America</li>
          <li onClick={hello}>South America</li>
      </ul>
        {/* <cd /> */}
        {value}
    
    </div>
  )
}

export default Continents
