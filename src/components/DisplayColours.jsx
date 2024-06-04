import React from 'react'
import TextSection from './Text-Section'

function DisplayColours({ colors }) {
  return (
    <>
    <h3>Thank you for choosing Color Compass</h3>
    {colors.map(color => (
        <div key={color.hex}>
            <div className={`rounded-full p-6 inline-block`}
            style={{ backgroundColor: color.hex }}></div>
        <p>{color.hex}</p>
        <p>{color.name}</p>
    <div>
        <p>{color.description}</p>
    </div>
    </div>
        ))}
    </>
    )
}

export default DisplayColours