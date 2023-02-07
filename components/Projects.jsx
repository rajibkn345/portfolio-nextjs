import Image from "next/image";
import Link from "next/link";
import React from "react";
import bazar365 from "../public/assets/projects/bazar365.png";
import pargon from "../public/assets/projects/paragon.png";
import portfolio from "../public/assets/projects/portfolio.png";
import realtor from "../public/assets/projects/realtor.png";
import prokitibilash from "../public/assets/projects/prokitibilash.png";
import faceApp from "../public/assets/projects/faceApp.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Bazar 365"
            backgroundImg={bazar365}
            projectUrl="https://www.bazar365.store/"
            tech="React | Node"
          />
          <ProjectItem
            title="Paragon Food"
            backgroundImg={pargon}
            projectUrl="https://paragon.metrodokan.com/"
            tech="React | Node"
          />
          <ProjectItem
            title="Simple Portfolio"
            backgroundImg={portfolio}
            projectUrl="https://rajibkn345.github.io/simple-portfolio/"
            tech="JavaScript"
          />
          <ProjectItem
            title="Realtor"
            backgroundImg={realtor}
            projectUrl="https://realtor.vercel.app/"
            tech="React"
          />
          <ProjectItem
            title="Prokitibilash"
            backgroundImg={prokitibilash}
            projectUrl="https://rajibkn345.github.io/prokitibilash/"
            tech="JavaScript"
          />
          <ProjectItem
            title="Face Detection App"
            backgroundImg={faceApp}
            projectUrl="https://face-detection-rajib.netlify.app/"
            tech="React | Node"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
