import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {

  const [clock, setClock] = useState()

  useEffect( () => {
    setInterval( () => {
      const date = new Date();
      setClock( date.toLocaleTimeString( 'en-US', { hour: 'numeric', minute: "numeric", second: "numeric", hour12: true } ) );

    }, 1000 );
  }, [] );

  return (
    <div className='container'>
      <div className="digital-clock">
        <h1>{clock}</h1>
      </div>
    </div>
  )
}

export default App
