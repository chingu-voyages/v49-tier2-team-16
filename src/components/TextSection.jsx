import React from "react";
import Wrapper from "./Wrapper";

function TextSection() {
    return (
        <section className="bg-[url('/src/img/main-section-bg.jpg')] bg-cover bg-center w-full h-screen border-y border-secondary-color">
            <Wrapper>
                <div className="relative h-screen flex flex-col md:flex-row justify-center items-center">
                    <div className="md:grow text-sm md:text-base flex flex-col items-center space-y-1 text-center text-primary-dark">
                        <p className="w-2/3 md:w-[460px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus mattis tortor ut tortor cursus, ac maximus tortor.
                        </p>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default TextSection;