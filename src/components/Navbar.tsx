"use client"
import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri"; // Optional close icon for the menu

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const navigation = [
    { title: "Home", href: "/" },
    { title: "About me", href: "/about" },
    { title: "Contact Us", href: "/contact" },
    // { title: "Studio", href: "/studio" },
  ];

  // Toggle the menu open and close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-white/70 h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full">
        <Logo title="Bloggers" className="text-black" />
        <div className="hidden md:inline-flex items-center gap-7 text-gray-900 hover:text-black duration-200">
          {navigation.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className="text-sm uppercase font-semibold relative group overflow-hidden"
            >
              {item?.title}
              <span className="w-full h-[1px] bg-blue-700 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <RiCloseLine className="text-2xl" /> // Close icon
          ) : (
            <FiMenu className="text-2xl" /> // Open icon
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black text-white p-4 shadow-md z-50">
          <div className="flex flex-col items-center">
            {navigation.map((item) => (
              <Link
                key={item?.title}
                href={item?.href}
                className="text-sm uppercase font-semibold mb-4"
                onClick={toggleMenu} // Close the menu on item click
              >
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
