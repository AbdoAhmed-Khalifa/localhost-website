'use client';
import Logo from './Logo';
import ListItems from './ListItems';
import User from './User';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="p-2 py-4 bg-[#fafafa] sticky z-10 top-0 left-0 right-0">
      <div className="mx-5 md:mx-10 lg:mx-20 flex flex-row justify-between items-center">
        <Logo />

        <button
          className="md:hidden flex items-center text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={25} className="cursor-pointer" />
          ) : (
            <Menu size={25} className="cursor-pointer" />
          )}
        </button>

        <div className="hidden md:flex gap-6 items-center ">
          <ListItems direction="flex-row" />
        </div>
        <div className="hidden md:flex gap-6 items-center ">
          <User />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full  bg-[#fafafa] shadow-md flex flex-col gap-4 p-4 z-20">
          <ListItems direction="flex-col" />
          <div className="flex justify-end">
            <User />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
