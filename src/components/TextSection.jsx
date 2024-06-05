import React from "react";

function TextSection({ color }) {
    return (
        <div>
        <p className="flex flex-col items-center text-left">{color.hex}</p>
        <p className="flex flex-col items-center text-left">{color.name}</p>
        <p className="flex flex-col items-center text-left w-2/3 md:w-[460px]">
        {color.description}
        </p>
        </div>
    );
}

export default TextSection;