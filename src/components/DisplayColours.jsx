import React from 'react'

function DisplayColours() {
    const colorScheme => {
[
    {
      "name": "Complementary Blue",
      "hex": "#00f",
      "description": "A bright, electric blue that provides a striking contrast to the fiery red."
    },
    {
      "name": "Analogous Green",
      "hex": "#34c759",
      "description": "A muted, earthy green that creates a harmonious balance with the bold red."
    },
    {
      "name": "Triadic Yellow",
      "hex": "#ffff00",
      "description": "A vibrant, sunny yellow that provides a playful contrast to the intense red."
    },
    {
      "name": "Split-Complementary Purple",
      "hex": "#800080",
      "description": "A rich, jewel-toned purple that adds depth and sophistication to the color scheme."
    }
  ]
}
console.log(colorScheme)
    
    return (
    <>
    <div class="bg-blue-300 border-blue-600 rounded-full">
        <p>Hex: </p>
        <p>Name: </p>
    </div>
    <div>
        <p>Description: </p>
    </div>
    <div class="bg-green-300 border-green-600 rounded-full">
        <p>Hex: </p>
        <p>Name: </p>
    </div>
    <div>
        <p>Description: </p>
    </div>
    <div class="bg-purple-300 border-purple-600 rounded-full">
        <p>Hex: </p>
        <p>Name: </p>
    </div>
    <div>
        <p>Description: </p>
    </div>
    <div class="bg-yellow-300 border-yellow-600 rounded-full">
        <p>Hex: </p>
        <p>Name: </p>
    </div>
    <div>
        <p>Description: </p>
    </div>
    </>
    )
}

export default DisplayColours