import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hi, I am Roman Khan Rajib.I am a professional Result-driven full
            stack developer. Ability to learn and implement new technologies
            quickly to improve productivity and accelerate productive time. I
            care about reusability, coding convention, and software
            architectural facts.
          </p>
          <p className="py-2 text-gray-600">
            I offer cost-effective solutions for organizations and people who
            are looking for professional web development. I'm enthusiastic with
            regard to a clean plan and I give straightforward answers for
            handling complex necessities. I'm continually examining new
            innovations and suggesting them when they bode well. Consumer
            satisfaction alongside on-time delivery is my main concern. So don’t
            hesitate to get in touch with me.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
