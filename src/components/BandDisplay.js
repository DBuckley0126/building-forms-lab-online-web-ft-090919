import React from 'react'

const BandDisplay = ({bands}) => {
  
  return (
    <ul>
      {bands.map(band => <li>{band}</li> )}
    </ul>
  )
}

export default BandDisplay