import { Link } from "react-router-dom";

function ScrollButton() {
  return (
    <div className='flex justify-center space-x-16 overflow-hidden'>
      <Link
        to='/'
        className='absolute bottom-12 w-4 h-4 bg-primary-white border border-brand-green border-opacity-40 rounded-full shadow-scroll-button transition-all duration-300 hover:bg-primary-color hover:border-brand-red hover:border-opacity-40'
      ></Link>
      <Link
        to='/input'
        className='absolute bottom-12 w-4 h-4 bg-primary-white border border-brand-green border-opacity-40 rounded-full shadow-scroll-button transition-all duration-300 hover:bg-primary-color hover:border-brand-red hover:border-opacity-40'
      ></Link>
    </div>
  );
}
export default ScrollButton;
