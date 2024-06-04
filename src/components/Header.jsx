import React, { useState } from "react";
import Wrapper from "./Wrapper";
import MobileMenu from "./MobileMenu";
import NavItem from "./NavItem";
import Logo from "../img/logo.svg";
import Burger from "/src/img/menu-button.svg";
import Close from "/src/img/close-button.svg";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <Wrapper>
      <header className="flex justify-between items-center">
        <a href="/">
          <img className="h-10 md:h-[60px]" src={Logo} alt="Logo" />
        </a>
        <nav className="hidden md:flex space-x-6 ">
          <NavItem text="Home" />
          <NavItem text="Get color" />
        </nav>
        <button
          className="md:hidden w-5 h-5 z-30 cursor-pointer hover:drop-shadow-link"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <img src={Close} alt="Close" />
          ) : (
            <img src={Burger} alt="Main menu" />
          )}
        </button>
        <MobileMenu isOpen={isMobileMenuOpen} />
      </header>
    </Wrapper>
  );
}

export default Header;
