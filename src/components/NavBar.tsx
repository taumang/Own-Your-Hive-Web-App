import React from 'react';

interface NavbarProps {
  onButtonClick: () => void;
}

const Navbar = ({ onButtonClick }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <button
          className="mr-4 p-2 bg-gray-700 hover:bg-gray-600 text-white"
          onClick={onButtonClick}
        >
          Toggle Sidebar
        </button>
        <div className="flex space-x-4">
          <a href="#link1" className="text-white hover:underline">
            Link 1
          </a>
          <a href="#link2" className="text-white hover:underline">
            Link 2
          </a>
        </div>
      </div>
      <h1 className="text-xl font-bold">Title</h1>
    </nav>
  );
};

export default Navbar;