export default function InputForm({ hexColor }) {
  return (
    <div className='w-full max-w-[434px] rounded-[20px] bg-primary-color space-y-2.5 my-3 py-2.5 shadow-shape'>
      <div className='flex flex-wrap justify-center mx-2.5 gap-0.5'>
        <div>
          <button className='w-[130px] h-10 bg-transparent rounded-full border-white border-2 hover:shadow-shape hover:border-brand-green hover:text-brand-green transition-all duration-500'>
            Analogue
          </button>
        </div>
        <div>
          <button className='w-[130px] h-10 bg-transparent rounded-full border-white border-2 hover:shadow-shape hover:border-brand-green hover:text-brand-green transition-all duration-500'>
            Triadic
          </button>
        </div>
        <div>
          <button className='w-[150px] h-10 bg-transparent rounded-full border-white border-2 hover:shadow-shape hover:border-brand-green hover:text-brand-green transition-all duration-500'>
            Complimentary
          </button>
        </div>
      </div>
      <div className='flex justify-center mx-2.5 text-primary-white'>
        <div
          style={{ background: "#31D7BE", borderRadius: "40px 0 0 40px" }}
          className='flex justify-center items-center w-[140px] h-10 border-white border-2 hex-codes'
        >
          {hexColor}
        </div>
        <div
          style={{ background: "#BE31D7" }}
          className='flex justify-center items-center w-[140px] h-10 border-white border-2  hex-codes'
        >
          {hexColor}
        </div>
        <div
          style={{ background: "#D7BE31", borderRadius: " 0 40px 40px 0" }}
          className='flex justify-center items-center w-[140px] h-10 border-white border-2 hex-codes'
        >
          {hexColor}
        </div>
      </div>
    </div>
  );
}
