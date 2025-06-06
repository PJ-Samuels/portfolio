import React from "react";

function FeaturedProject({ title, image, description, techstack, previewLink, githubLink }) {
  return (
    // <article className="rounded-xl mt-10 overflow-hidden shadow-2xl shadow-slate-400 dark:shadow-slate-900 flex flex-col w-full md:w-2/3 lg:w-1/2 mx-auto">
    <article className="rounded-xl overflow-hidden shadow-xl flex flex-col min-h-[450px] p-6">

      <img src={image} alt="" loading="lazy" style={{ maxHeight: "400px", width: "100%" }} />
      <div className="bg-dark-card p-6 flex flex-col h-full">
        <h1 className="text-light-heading font-bold text-2xl">{title}</h1>
        <p className="text-content pt-6 font-light flex-grow text-lg">{description}</p>

        <div className="mt-auto">
          <h3 className="text-light-heading font-medium pt-6 text-lg">
            Tech Stack : <span className="font-light text-base">{techstack}</span>
          </h3>
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center">
              {/* Uncomment to enable Live Preview */}
              {/* <a href={previewLink} target="_blank" rel="noreferrer noopener" className="underline pl-2 font-light text-white text-lg">
                Live Preview
              </a> */}
            </div>
            <div className="flex items-center">
              <svg
                className="fill-light-heading fill-dark-heading inline-block min-w-fit"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.1726 18.8173 16.8976 17.5414 18.1197 15.8395C19.3418 14.1375 19.9994 12.0952 20 10C20 4.475 15.525 0 10 0Z"
                />
              </svg>
              <a href={githubLink} target="_blank" rel="noreferrer noopener" className="underline pl-2 font-light text-white text-lg">
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default FeaturedProject;
