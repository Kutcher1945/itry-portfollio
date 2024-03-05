import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/HtmlWebsite.png"
          title="Modern HTML, CSS and JS Company Portfolio"
          description="This is the undeniable beauty of the classic design of frame structures, increased requirements for energy efficiency, a variety of elements and types of opening, many color options, real Swedish quality multiplied by a large amount of testing."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website with 3D house"
          description="In ITRY Data is reality. If you face it, you can understand it."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="iTry Fairy Forest Website using Paralax Technology"
          description="Welcome to the iTry Parallax Forest website, where adventure meets technology in an immersive online experience!"
        />
      </div>
    </div>
  );
};

export default Projects;
