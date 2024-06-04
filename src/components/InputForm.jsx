import React from "react";
import "./InputForm.css";

export default function InputForm({ handleChange, formData, hexColor }) {
  return (
    <div>
      <form>
        <div className="scheme-container space-y-2.5 my-3 py-2.5">
          <div className="flex justify-center mx-2.5 gap-x-0.5 scheme-buttons-container">
            <div>
              <button
                style={{ width: "130px" }}
                className="rounded-full border-white scheme-button"
              >
                Analogue
              </button>
            </div>
            <div>
              <button
                style={{ width: "130px" }}
                className="rounded-full border-white scheme-button"
              >
                Triadic
              </button>
            </div>
            <div>
              <button
                style={{ width: "150px" }}
                className="rounded-full border-white scheme-button"
              >
                Complimentary
              </button>
            </div>
          </div>
          <div className="shadow-pink-50 flex justify-center mx-2.5 scheme-hexCodes-container">
            <div
              style={{ background: "#31D7BE", borderRadius: "40px 0 0 40px" }}
              className="flex justify-center items-center border-white border-2 hex-codes"
            >
              {hexColor}
            </div>
            <div
              style={{ background: "#BE31D7" }}
              className="flex justify-center items-center border-white border-2  hex-codes"
            >
              {hexColor}
            </div>
            <div
              style={{ background: "#D7BE31", borderRadius: " 0 40px 40px 0" }}
              className="flex justify-center items-center border-white border-2 hex-codes"
            >
              {hexColor}
            </div>
          </div>
        </div>

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
