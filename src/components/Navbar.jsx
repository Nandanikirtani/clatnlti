import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-blue-500 text-3xl font-bold">
          CLATNLTI
        </div>

        <ul className="hidden lg:flex gap-10 text-sm font-medium">
          <li><a href="#home" className="hover:text-blue-500 text-lg font-normal">Home</a></li>
          <li><a href="#courses" className="hover:text-blue-500 text-lg font-normal">Courses</a></li>
          <li><a href="#crash" className="hover:text-blue-500 text-lg font-normal">Crash Course</a></li>
          <li><a href="#demo" className="hover:text-blue-500 text-lg font-normal">Demo Classes</a></li>
          <li><a href="#testimonials" className="hover:text-blue-500 text-lg font-normal">Testimonials</a></li>
        </ul>

        <button className="hidden lg:block bg-blue-500 text-white rounded-2xl px-4 py-2 hover:bg-blue-600 transition">
          Book Free Demo
        </button>

        <div className="lg:hidden text-3xl cursor-pointer text-blue-600" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <ul className="flex flex-col gap-4 text-sm font-medium text-left">
            <li><a href="#home" className="hover:text-blue-500 text-lg font-normal">Home</a></li>
            <li><a href="#courses" className="hover:text-blue-500 text-lg font-normal">Courses</a></li>
            <li><a href="#crash" className="hover:text-blue-500 text-lg font-normal">Crash Course</a></li>
            <li><a href="#demo" className="hover:text-blue-500 text-lg font-normal">Demo Classes</a></li>
            <li><a href="#testimonials" className="hover:text-blue-500 text-lg font-normal">Testimonials</a></li>
          </ul>

          <button className="w-full bg-blue-500 text-white rounded-2xl px-4 py-2 mt-4 hover:bg-blue-600 transition">
            Book Free Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
