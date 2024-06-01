import React from 'react'

function DisplayColours({ colors }) {
  return (
    <>
    {colors.map(color => (
        <div key={color.hex}>
            <div className={`bg-${color.hex.slice(1)}-300 rounded-full p-6 inline-block`}
            style={{ backgroundColor: color.hex }}></div>
        <div className={`bg-${color.hex.slice(1)}-300 rounded-full inline-block ml-4 p-4`}>
        <p>Hex: {color.hex}z</p>
        <p>Name: {color.name}</p>
    <div>
        <p>Description: {color.description}</p>
    </div>
    </div>
    </div>
        ))}
    </>
    )   
}

export default DisplayColours