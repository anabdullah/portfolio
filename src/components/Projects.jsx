import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import img1 from "../assets/projects/iitmweb.jpg";
import img2 from "../assets/projects/mediplus.jpg";
import img3 from "../assets/projects/periodictable.jpg";
import img4 from "../assets/projects/whatsapp.jpg";

const Projects = () => {
  return (
    <div className="w-full flex justify-center items-center -mt-10 md:-mt-6">
      <div className="conteiner flex justify-between gap-4 md:gap-0 w-full items-center flex-col-reverse md:flex-row max-w-[1200px] mb-10">
        <div className="md:text-left text-center w-full md:w-1/4 p-3 md:p-0">
          <div className="flex justify-center text-3xl font-bold md:text-left cursor-pointer">
            <IoIosArrowUp />
          </div>
          <h2 className="text-2xl font-bold mb-2">
            A complete stunning website with HTML CSS and Bootstrap
          </h2>
          <p>
            I have created this awesome project with bootstrap classes and
            components and some custom styling and smooth scroll effects for a
            Computer education or trainning center where I have worked for more
            than 2.5+ years as a trainer/faculty. You can visit this website's
            demo version by clicking the link below that is deploed on netlify.
          </p>
          <div className="flex justify-center text-3xl font-bold md:text-left cursor-pointer">
            <IoIosArrowDown />
          </div>
        </div>
        <div className="md:w-[100vmin] md:h-[56.25vmin] w-[90vw] h-[50.62vw] bg-slate-400 rounded-xl overflow-hidden border border-slate-200 shadow-sky-100">
          <img src={img4} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
