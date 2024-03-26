import React from "react";
import { RiMenu3Line } from "react-icons/ri";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <nav className="w-full py-3 md:py-5 bg-white flex justify-center items-center border-b border-gray-200">
        <div className="container px-3 md:px-0 max-w-[1200px] flex justify-between items-center">
          <h3 className="font-bold text-2xl">Portfolio</h3>
          <div className="hidden md:flex w-1/3 justify-between items-center">
            <ul className="flex gap-6 items-center list-none">
              <li className="cursor-pointer">About me</li>
              <li className="cursor-pointer">Projects</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
            <Button value={"Get my CV"} />
          </div>
          <div className="block md:hidden">
            <RiMenu3Line />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
