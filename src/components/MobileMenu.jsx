import NavItem from "./NavItem";

function MobileMenu({ isOpen = false }) {
  return (
    <>
      <div
        className={`absolute top-0 left-0 right-0 bg-secondary-dark opacity-50 z-10 min-h-[200vh]
                ${isOpen ? "flex" : "hidden"}`}
      ></div>
      <div
        className={`absolute top-0 right-0 w-2/5 bg-primary-white z-20 min-h-[200vh]
        ${isOpen ? "flex" : "hidden"}`}
      >
        <nav className='my-12 mx-5 space-y-5 text-base w-full'>
          <NavItem text='Home' link='/' />
          <NavItem text='Get color' link='/input' />
        </nav>
      </div>
    </>
  );
}

export default MobileMenu;
