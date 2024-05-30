import React from "react";

export default function InputForm({ handleChange, colorScheme, usage }) {
  return (
    <div>
      <form>
        <div>
          <div style={{ fontFamily: "Sigmar One, sans-serif" }}>
            <h4 id="begin-search">Choose your color scheme</h4>
          </div>
          <div>
            <select
              name="colorScheme"
              onChange={handleChange}
              id="colorScheme"
              value={colorScheme}
            >
              <option value="complimentary">complimentary</option>
              <option value="triadic">triadic</option>
              <option value="analagous">analagous</option>
            </select>
          </div>
        </div>

        <label
          htmlFor="usage"
          style={{ fontFamily: "Ramla, sans-serif", fontWeight: "400" }}
        >
          <div className="">Describe where do you plan to use this color</div>
        </label>
        <div>
          <textarea
            className="rounded-xl shadow-lg"
            cols="40"
            rows="4"
            placeholder="usage"
            name="usage"
            onChange={handleChange}
            id="usage"
            value={usage}
          />
        </div>
      </form>
    </div>
  );
}
