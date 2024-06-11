import React, { useState } from 'react';
import './InputForm.css';

import { calculateScheme } from '../utils/colorSchemes';

export default function InputForm({ hexColor }) {
  const [colorScheme, setColorScheme] = useState([]);
  const [formData, setFormData] = useState({ usage: '' });

  const handleSchemeChange = (schemeType) => {
    const schemeColors = calculateScheme(schemeType, hexColor);
    setColorScheme([...schemeColors]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form>
        <div className='scheme-container bg-primary-color space-y-2.5 my-3 py-2.5'>
          <div className='flex justify-center mx-2.5 gap-x-0.5 scheme-buttons-container'>
            {/* Scheme buttons */}
            <button
              style={{ width: '130px' }}
              className='rounded-full border-white border-2 scheme-button'
              onClick={(e) => {
                e.preventDefault();
                handleSchemeChange('Analogous');
              }}
            >
              Analogous
            </button>
            <button
              style={{ width: '130px' }}
              className='rounded-full border-white border-2 scheme-button'
              onClick={(e) => {
                e.preventDefault();
                handleSchemeChange('Complementary');
              }}
            >
              Triadic
            </button>
            <button
              style={{ width: '150px' }}
              className='rounded-full border-white border-2 scheme-button'
              onClick={(e) => {
                e.preventDefault();
                handleSchemeChange('Triadic');
              }}
            >
              Complementary
            </button>
          </div>
          <div className='colors-display flex justify-center mx-2.5 scheme-hexCodes-container'>
            {/* Display calculated color scheme */}
            {colorScheme.map((color, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: color,
                  borderRadius: '10px',
                  color: '#FFF',
                  padding: '0.01 2rem',
                  margin: '0 1rem',
                }}
              >
                {color}
              </div>
            ))}
          </div>
        </div>
        <div>
          <textarea
            className='rounded-xl shadow-lg p-3'
            cols='40'
            rows='1'
            placeholder='Describe where do you plan to use this color'
            name='usage'
            onChange={handleChange}
            id='usage'
            value={formData.usage}
          />
        </div>
      </form>
    </div>
  );
}
