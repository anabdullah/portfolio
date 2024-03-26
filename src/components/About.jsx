import React from "react";

const About = () => {
  return (
    <div className=" w-full flex justify-center items-center -mt-10">
      <div className="container max-w-[1200px] py-3 px-2 md:px-0 flex flex-col justify-center items-center">
        <div className="w-[85%] md:w-[75%] py-8 rounded-xl overflow-hidden bg-[#AECEFC]"></div>
        <div className="w-[90%] md:w-[80%] py-8 rounded-xl overflow-hidden bg-[#85B5F9] -mt-12 md:-mt-10"></div>
        <div className="w-[95%] md:w-[85%] rounded-xl overflow-hidden bg-[#4D84FF] -mt-12 md:-mt-10 md:p-5 p-3 text-white text-xs md:text-base">
          Hello there! I'm Abdullah Nasim Akram, and I'm passionate about
          technology, creativity, and continuous learning. My journey in the
          tech world began with coding simple websites and has since evolved
          into a deep love for problem-solving and innovation. I'm constantly
          exploring the latest trends in web development, experimenting with new
          programming languages, and staying up-to-date with emerging
          technologies like AI and blockchain. Besides my technical skills, I'm
          also an enthusiastic advocate for design and creativity. I believe
          that a seamless blend of technology and artistry is the key to
          creating truly remarkable digital experiences. When I'm not immersed
          in lines of code or brainstorming creative solutions, you can find me
          enjoying a good book or exploring nature. I'm also a firm believer in
          giving back to the community and have actively volunteered in various
          tech education initiatives. I'm excited about the future of technology
          and its potential to shape a better world. If you share my passion for
          innovation, creativity, and making a positive impact, let's connect
          and embark on this exciting journey together! Feel free to reach out
          to me at{" "}
          <a
          className=" underline"
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRCXCFnPrKLHtJMTQZSfpDgwpHKgqSCzVWbtHmRVGMSTQGGWwFNXPjBGRfWvJvRrNDlmxB"
            target="_blank"
          >
            anabdullah985@gmail.com
          </a>{" "}
          or connect with me on linkedin.
        </div>
      </div>
    </div>
  );
};

export default About;
