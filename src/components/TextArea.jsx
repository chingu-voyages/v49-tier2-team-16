import { Link } from "react-router-dom";

function TextArea({ handleClick, handleChange, formData, usageEmpty }) {
  return (
    <div className='flex flex-col space-y-2 py-20 mb-8 lg:bg-transparent'>
      <h1 className='font-caption text-5xl md:text-7xl sticky -mt-28 text-brand-red'>
        Title
      </h1>

      <p className='px-7 pt-7 py-3 w-3/4 mx-auto my-auto'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        mattis tortor ut tortor cursus, ac maximus tortor.
      </p>
      <div className='pb-9'>
        <p className='text-brand-green'>HEX: #b19cd9</p>
        <p className='text-brand-green'>RGB: rgb(177, 156, 217)</p>
        <p className='text-brand-green'>HSL: hsl(261, 45%, 73%)</p>
      </div>
      <label
        className='block text-base font-semibold mb-1 w-2/3 mx-auto'
        htmlFor='usage'
      >
        Describe where do you plan to use this color?
      </label>
      <textarea
        id='usage'
        name='usage'
        className='w-2/3 max-h-48 px-3 py-2 resize-none overflow-y-auto border border-primary-white rounded-[20px] shadow-shape focus:outline-none mx-auto bg-primary-color'
        rows='4'
        onChange={handleChange}
        value={formData.usage}
        required
      />
      {usageEmpty && <p className='text-brand-red'>Cannot be empty! </p>}
      <Link
        to='/result'
        onClick={handleClick}
        className='py-3 px-7 bg-transparent text-brand-green border border-brand-green rounded-full hover:bg-primary-color hover:text-brand-red hover:border-brand-red hover:shadow-shape mx-auto transition-all duration-500'
      >
        Get Recommendations
      </Link>
    </div>
  );
}

export default TextArea;
