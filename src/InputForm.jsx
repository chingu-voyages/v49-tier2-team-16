import React from "react";

export default function InputForm({ handleChange, formData }) {
  return (
    <div>
      <form className="container mt-4 text-white">
        <div className="row">
          <div
            className="col-7"
            style={{ fontFamily: "Sigmar One, sans-serif" }}
          >
            <h4 id="begin-search">Choose your color scheme</h4>
          </div>
          <div className="col-5">
            <select
              name="colorScheme"
              onChange={handleChange}
              id="colorScheme"
              className="form-select"
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
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
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
