import React from 'react'
import Wrapper from './Wrapper'
import TextSection from './TextSection'

function DisplayColours({ colors }) {
  return (
    <>
    <section className="bg-[url('/src/img/main-section-bg.jpg')] bg-cover bg-center w-full h-screen border-y border-secondary-color">
        <Wrapper>
            <div className="relative h-screen flex flex-col md:flex-row justify-center items-center">
                <div className="md:grow text-sm md:text-base flex flex-col items-center space-y-1 text-center text-primary-dark">
                    <h3 className="flex flex-col items-center text-left w-2/3 md:w-[460px]">
                        Thank you for choosing Color Compass.
                    </h3>
                    {colors.map(color => (
                    <TextSection key={color.hex} color={color} />
                    ))}
                    <div className={`rounded-full p-6 inline-block`}
                    style={{ backgroundColor: color.hex }}></div>
                </div>
            </div>  
            </Wrapper>
        </section>
    </>
    )
}

export default DisplayColours