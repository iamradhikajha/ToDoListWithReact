import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-purple-700 text-white py-3">
      <div className="logo">
        <span className="font-bold text-2xl mx-5 text-white">meTask</span>
      </div>
      <ul className="flex gap-7 text-xl  mx-9">
        <a className="cursor-pointer hover:font-bold transition-all duration-200">
          Home
        </a>
        <a
          className="cursor-pointer hover:font-bold transition-all duration-200"
          href="/tasks"
        >
          Your Tasks
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
