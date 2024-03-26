import React from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { PiGithubLogoFill } from "react-icons/pi";
import { TiSocialFacebook } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="w-full py-1 flex justify-center items-center -mt-5 md:mt-0 bg-slate-950 text-white">
      <div className="container px-3 md:px-0 max-w-[1200px] gap-2 py-5 flex flex-col md:flex-row justify-center items-center">
        <div className=" w-full md:w-1/2">
          <h1 className="font-bold text-4xl mb-3">Your thoughts</h1>
          <textarea
            className="w-2/3 resize-none mt-3 p-3"
            placeholder="Create a connection..."
          ></textarea>
        </div>
        <div className=" w-full md:w-1/2 h-[inherit] md:border-l md:border-slate-100 pl-2">
          <h1 className="font-bold text-4xl mb-3 md:text-center">Social Links</h1>
          <div className="flex gap-3 w-full md:justify-center md:items-center mt-6 mb-1">
            <div className="w-[6vmin] h-[6vmin] rounded-full bg-slate-100 text-slate-950 flex justify-center items-center text-3xl">
            <TiSocialFacebook />
            </div>
            <div className="w-[6vmin] h-[6vmin] rounded-full bg-slate-100 text-slate-950 flex justify-center items-center text-3xl">
            <TiSocialLinkedin />
            </div>
            <div className="w-[6vmin] h-[6vmin] rounded-full bg-slate-100 text-slate-950 flex justify-center items-center text-3xl">
            <PiGithubLogoFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
