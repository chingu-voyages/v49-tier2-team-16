import React from 'react'
import Wrapper from './Wrapper'
import TextSection from './TextSection'

function DisplayColours({ colors, prompt }) {
  return (
    <>
    <section className="bg-[url('/src/img/results-section-bg.png')] bg-cover bg-center w-full h-screen border-y border-secondary-color">
        <Wrapper>
            <div className="relative h-screen flex flex-col md:flex-row justify-center items-center">
                <div className="md:grow text-sm md:text-base flex flex-col items-center space-y-1 text-center text-primary-dark">
                    <h3 className="flex flex-col items-start text-left w-2/3 md:w-[460px]">
                        Thank you for choosing Color Compass.
                    </h3>
                    <p><strong>{prompt}</strong></p>
                    {colors.map(color => (
                    <TextSection key={color.hex} color={color} />
                    ))}
                </div>
            </div>  
            </Wrapper>
        </section>
    </>
    )
}

export default DisplayColours