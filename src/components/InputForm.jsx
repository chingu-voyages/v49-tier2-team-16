import React from "react";

export default function InputForm({ handleChange, formData, hexColor }) {
  return (
    <div>
      <form>
        {/* <label htmlFor="usage">
          Describe where do you plan to use this color
        </label> */}
        <div>
          <textarea
            className="rounded-xl shadow-lg p-3"
            cols="40"
            rows="1"
            placeholder="usage"
            name="usage"
            onChange={handleChange}
            id="usage"
            value={formData.usage}
          />
        </div>
        <p>using</p>
        {hexColor}
        <p>in a</p>
        <div>
          <select
            className="shadow-lg p-3"
            name="colorScheme"
            onChange={handleChange}
            id="colorScheme"
            value={formData.colorScheme}
          >
            <option value="complimentary">complimentary</option>
            <option value="triadic">triadic</option>
            <option value="analagous">analagous</option>
          </select>
        </div>
        <p>color scheme!</p>
      </form>
    </div>
  );
}
