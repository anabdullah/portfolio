import React from "react";
import image1 from '../assets/tools/photoshop.jpg';
import image2 from '../assets/tools/canva.jpg';
import image3 from '../assets/tools/express.jpg';
import image4 from '../assets/tools/illustrator.jpg';
import image5 from '../assets/tools/ms-office.jpg';
import image6 from '../assets/tools/web_technology.jpg';
import image7 from '../assets/tools/ai_tools.jpg';

const Tools = () => {
  return (
    <div className="w-full py-1 bg-white flex justify-center items-center -mt-5 md:mt-0">
      <div className="container px-3 md:px-0 max-w-[1200px] py-1">
        <div className="flex justify-center items-center">
          <img draggable='false' src={image1} className=" w-[23vmin] md:w-[20vmin] rounded-full border-slate-400 border-2" />
          <img draggable='false' src={image2} className=" w-[23vmin] md:w-[20vmin] rounded-full border-slate-400 border-2" />
          <img draggable='false' src={image3} className=" w-[23vmin] md:w-[20vmin] rounded-full border-slate-400 border-2" />
          <img draggable='false' src={image4} className=" w-[23vmin] md:w-[20vmin] rounded-full border-slate-400 border-2" />
        </div>
        <div className="flex justify-center items-center -mt-10 md:-mt-14">
          <img draggable='false' src={image5} className=" w-[23vmin] md:w-[20vmin] rounded-full border-slate-400 border-2" />
          <img draggable='false' src={image6} className=" w-[23vmin] md:w-[20vmin] rounded-full border-slate-400 border-2" />
          <img draggable='false' src={image7} className=" w-[23vmin] md:w-[20vmin] rounded-full border-slate-400 border-2" />
        </div>
      </div>
    </div>
  );
};

export default Tools;
