import { useRef, useEffect } from "react";
import iro from "@jaames/iro";

export default function ColorPicker({ options, setters }) {
  const colorPickerRef = useRef(null);
  const iroRef = useRef(null);
  useEffect(() => {
    if (!iroRef.current) {
      iroRef.current = new iro.ColorPicker(colorPickerRef.current, options);
    } else {
      // If iroRef already exists, update it with new options
      iroRef.current.setOptions(options);
    }
    iroRef.current.on(["color:init", "color:change"], setters.onChangeColor);
  }, [options]);

  return (
    <>
      <div ref={colorPickerRef}></div>
    </>
  );
}
