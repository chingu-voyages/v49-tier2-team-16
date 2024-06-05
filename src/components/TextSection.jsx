import React from "react";

function TextSection({ color }) {
    return (
        <div>
            <div className={`rounded-full p-6 inline-block`}
            style={{ backgroundColor: color.hex }}></div>
            <p className="flex flex-col items-start text-left">{color.hex}</p>
            <p className="flex flex-col items-start text-left">{color.name}</p>
            <p className="flex flex-col items-start text-left w-2/3 md:w-[460px]">
            {color.description}
            </p>
        </div>
    );
}

export default TextSection;