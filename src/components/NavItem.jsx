import { Link } from "react-router-dom";

function NavItem({ text = "", link = "#" }) {
  return (
    <div className='flex space-x-14 cursor-pointer'>
      <Link
        to={link}
        className=' text-md md:text-lg text-brand-green hover:text-brand-red
        hover:drop-shadow-link transition-all
        duration-500'
      >
        {text}
      </Link>
    </div>
  );
}

export default NavItem;
