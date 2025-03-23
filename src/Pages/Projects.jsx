import React from "react";
import Project from "../Components/Project";
import FeaturedProject from "../Components/FeaturedProject";
import { projectDetails, featuredProjectDetails, archives } from "../Details";

// import { projectDetails2 } from "../Details";

function Projects() {
  return (
    <main className="container mx-auto max-width pt-10 mb-20 ">
      <section>
        <h1 className="text-2xl text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {React.Children.toArray(
            featuredProjectDetails.map(
              ({ title, image, description, techstack, previewLink, githubLink }) => (
                <FeaturedProject
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
          {React.Children.toArray(
            projectDetails.map(
              ({ title, image, description, techstack, previewLink, githubLink }) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
        <br />
        <h2 className="text-xl text-light-heading md:text-4xl xl:text-4xl xl:leading-tight font-bold">Archives</h2>
        <details className="pt-2">
          <summary className="text-content text-xs md:text-sm font-light cursor-pointer">
          </summary>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
            {React.Children.toArray(
              archives.map(
                ({ title, image, description, techstack, previewLink, githubLink }) => (
                  <Project
                    title={title}
                    image={image}
                    description={description}
                    techstack={techstack}
                    previewLink={previewLink}
                    githubLink={githubLink}
                  />
                )
              )
            )}
          </div>
        </details>
      </section>

    </main>
  );
}

export default Projects;
