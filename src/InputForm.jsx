import React from "react";

export default function InputForm({ handleChange, formData }) {
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
              value={formData.colorScheme}
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
          Describe where do you plan to use this color
        </label>
        <div>
          <textarea
            cols="40"
            rows="4"
            placeholder="usage"
            name="usage"
            onChange={handleChange}
            id="usage"
            value={formData.usage}
          />
        </div>
      </form>
    </div>
  );
}
