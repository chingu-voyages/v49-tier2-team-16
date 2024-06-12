import ResultsSection from "./ResultsSection";
import { Link } from "react-router-dom";

function TextArea({ handleClick, handleChange, formData }) {
  return (
    <div className='flex flex-col space-y-2 py-20 bg-white'>
      <h1 className='text-4xl font-bold sticky -mt-32 text-orange-500'>
        Title
      </h1>

      <p className='text-gray-600 p-10 w-3/4 mx-auto my-auto pb-4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        mattis tortor ut tortor cursus, ac maximus tortor.
      </p>

      <p className='text-green-600'>HEX: #b19cd9</p>
      <p className='text-green-600'>RGB: rgb(177, 156, 217)</p>
      <p className='text-green-600'>HSL: hsl(261, 45%, 73%)</p>

      <label
        className='block text-gray-700 text-base font-bold mb-1 w-2/3 mx-auto pt-5'
        htmlFor='description'
      >
        Describe where do you plan to use this color?
      </label>
      <textarea
        id='description'
        className='w-2/3  max-h-48  text-gray-700 border rounded-lg focus:outline-none mx-auto bg-primary-color'
        rows='4'
        onChange={handleChange}
        value={formData.usage}
      />

      <Link
        to='/result'
        onClick={handleClick}
        className='w-2/5 py-3 px-5 bg-white text-brand-green border border-green-500 rounded-full hover:bg-brand-green hover:text-white mx-auto'
      >
        Get Recommendations
      </Link>
    </div>
  );
}

export default TextArea;
