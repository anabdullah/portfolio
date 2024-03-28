import React, { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Button from "./Button";
import img1 from "../assets/projects/iitmweb.jpg";
import img2 from "../assets/projects/mediplus.jpg";
import img3 from "../assets/projects/whatsapp.jpg";
import img4 from "../assets/projects/periodictable.jpg";

let pData = [
  {
    heading: `A complete stunning website with HTML CSS and Bootstrap`,
    content: `I have created this awesome project with bootstrap classes and
  components and some custom styling and smooth scroll effects for a
  Computer education or trainning center where I have worked for more
  than 2.5+ years as a trainer/faculty. You can visit this website's
  demo version by clicking the link below that is deploed on netlify.`,
  'url':`https://iitmnalbari.netlify.app/`
  },
  {
    heading: `An experiment with css styling and responsiveness`,
    content: `This modern stylish minimalist website UI is desined by me to make an experiment with css
  stylings, hover effects, minor animations, gorgeous footer. Also this website is made to be
  responsive for most of the mobile devices without any css library. Click the button below to
  view it. I'm pretty sure, you'll definitely love it.`,
  'url':`https://nasimmediplus.netlify.app/`
  },
  {
    heading: `Bare minimum clone of WhatsApp mobile version UI`,
    content: `In this project I tried to clone the bare minimum UI of WhatsApp. with some click events I made the different screens appear with a basic custom CSS animation. It is only for mobile devices. Off course I need to spend more time on this project to make it further smooth and add some cool functionalities like the actual official WhatsApp. Howewver, I want you to view my work.`,
    'url':`https://ana-whatsapp.netlify.app/`
  },
  {
    heading: `Working with javaScript array object and JSON data`,
    content: `This awesome projectis built with no libraries or frameworks which has the list of all periodic
  table elements and their properties like atomic mass etc. and a brief description, I had fun
  working with json, array and object data and performing some actions on them.
  I have deployed it on netlify for you, so that you can visit them by clicking the button below.`,
  'url':`https://periodictable-ana.netlify.app/`
  },
];
const Projects = () => {
  useEffect(() => {
    let imgcount = 0;
    const images = [img1, img2, img3, img4];
    let UpBtn = document.querySelector(".UpIcon");
    let DownBtn = document.querySelector(".DownIcon");
    let worktitle = document.querySelector(".worktitle");
    let paragraph = document.querySelector(".paragraph");
    let ImgElement = document.querySelector(".project_image_view");
    let downloadBtn = document.querySelector('.download_btn');

    // clicking the up arrow btn
    UpBtn.onclick = () => {
      if (imgcount == 3) {
        imgcount = 0;
        ImgElement.setAttribute("src", images[0]);
        worktitle.textContent = pData[0].heading;
        paragraph.textContent = pData[0].content;
        return;
      } else {
        imgcount++;
      }
      ImgElement.setAttribute("src", images[imgcount]);
      worktitle.textContent = pData[imgcount].heading;
      paragraph.textContent = pData[imgcount].content;

      console.log(imgcount);
    };

    // clicking the down arrow btn
    DownBtn.onclick = () => {
      if (imgcount == 0) {
        imgcount = 3;
        ImgElement.setAttribute("src", images[3]);
        worktitle.textContent = pData[3].heading;
        paragraph.textContent = pData[3].content;
        return;
      } else {
        imgcount--;
      }
      ImgElement.setAttribute("src", images[imgcount]);
      worktitle.textContent = pData[imgcount].heading;
      paragraph.textContent = pData[imgcount].content;

      console.log(imgcount);
    };
    downloadBtn.onclick=()=>{
      if(imgcount==0){
        window.open(pData[0].url,'_blank');
        return;
      }
      window.open(pData[imgcount].url,'_blank'); 
    }
  });

  return (
    <div className="w-full flex justify-center items-center -mt-10 md:-mt-6">
      <div className="conteiner flex justify-between gap-4 md:gap-0 w-full items-center flex-col-reverse md:flex-row max-w-[1200px] mb-10">
        <div className="md:text-left text-center w-full md:w-1/4 p-3 md:p-0">
          <div className="UpIcon flex justify-center text-3xl font-bold md:text-left cursor-pointer">
            <IoIosArrowUp />
          </div>
          <h2 className="worktitle text-2xl font-bold mb-2">
            {pData[0].heading}
          </h2>
          <p className="paragraph text-justify">{pData[0].content}</p>
          <div className="my-3 md:text-center download_btn">
            <Button value={"Open in new tab"} />
          </div>
          <div className="DownIcon flex justify-center text-3xl font-bold md:text-left cursor-pointer">
            <IoIosArrowDown />
          </div>
        </div>
        <div className="md:w-[100vmin] md:h-[56.25vmin] w-[90vw] h-[50.62vw] bg-slate-400 rounded-xl overflow-hidden border border-slate-200 shadow-sky-100">
          <img className="inview project_image_view ease-in" src={img1} draggable='false' />
        </div>
      </div>
    </div>
  );
};

export default Projects;
