import React from "react";
import Button from "./Button";
import portrait from "../assets/portrait.jpg";

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center py-5 pt-20">
      <div className="container px-3 md:px-0 max-w-[1200px] flex justify-between items-center flex-col-reverse md:flex-row">
        <div className=" max-w-[400px] flex flex-col items-center md:items-start">
          <h1 className="font-extrabold text-center md:text-left text-6xl md:text-8xl my-5">
            Abdullah <br /> Nasim <br /> Akram
          </h1>
          <div className="mt-5">
            <Button value={"Contact me"} />
          </div>
        </div>
        <div className=" w-[65vmin] md:w-[50vmin] h-[65vmin] md:h-[50vmin] relative rounded-full flex justify-center items-center bg-slate-200  mr-2 -ml-3 mb-10 md:mb-0">
          <img
            src={portrait}
            className="w-[65vmin] md:w-[50vmin] h-[65vmin] md:h-[50vmin] object-cover absolute top-1 left-1 rounded-full ml-3 mt-3 border-[0.5px] border-blue-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
