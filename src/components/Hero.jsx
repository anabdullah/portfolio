import React from "react";
import Button from "./Button";
import portrait from '../assets/portrait.jpg'

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center py-5 pt-20">
      <div className="container px-3 md:px-0 max-w-[1200px] flex justify-between items-center flex-col-reverse md:flex-row">
        <div className=" max-w-[400px] flex flex-col items-center md:items-start">
          <h1 className="font-extrabold text-center md:text-left text-6xl md:text-8xl my-5">Abdullah <br /> Nasim <br /> Akram</h1>
          <div className="mt-5">
          <Button value={"Contact me"} />
          </div>
        </div>
        <div className="md:w-1/4 w-[90vw] md:h-68vh h-[60vh] rounded-3xl flex justify-center items-center bg-slate-300 overflow-hidden border-[0.5px] border-slate-300">
          <img src={portrait} className=' scale-110'/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
