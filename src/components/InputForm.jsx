import "./InputForm.css";

export default function InputForm({ handleChange, formData, hexColor }) {
  return (
    <div>
      <form>
        <div className="scheme-container bg-primary-color space-y-2.5 my-3 py-2.5">
          <div className="flex justify-center mx-2.5 gap-x-0.5 scheme-buttons-container">
            <div>
              <button
                style={{ width: "130px" }}
                className="rounded-full border-white border-2 scheme-button"
              >
                Analogue
              </button>
            </div>
            <div>
              <button
                style={{ width: "130px" }}
                className="rounded-full border-white border-2 scheme-button"
              >
                Triadic
              </button>
            </div>
            <div>
              <button
                style={{ width: "150px" }}
                className="rounded-full border-white border-2 scheme-button"
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
      </form>
    </div>
  );
}
