import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    tailwind,
    node,
    express,
    firebase,
    typescript,
    flask,
    java,
    python,
    postgres,
    arduino,
    flutter,
    cplus,
    vscode,
    git,
    mongo,
    android,
    angular,
    github,
    mysql,
    npm,
    figma,
    csharp,
    c,
    unity,
    aws,
    next,
    swift,
    azure,
    heroku,
    reactnative,

  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section>
        <h2 className="text-2xl text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
            Frameworks
        </h2>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">

        <img src={react} title="React" alt="" style={{ filter: 'hue-rotate(180deg)' }} />
        <img src={angular} title="Angular" alt="" />
        <img src={flask} title="Flask" alt="" />
        <img src={node} title="Node.js" alt="" />
        <img src={express} title="Express.js" alt="" />
        <img src={next} title="Next.js" alt="" />
      </section>
      <section>
        <h2 className="text-2xl text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
            Full-Stack Development
        </h2>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={python} title="Python" alt="" />
        <img src={java} title="Java" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={typescript} title="TypeScript" alt="" />
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
        <img src={c} title="C" alt="" />
        <img src={cplus} title="C++" alt="" />
        <img src={csharp} title="C#" alt="" />
        <img src={unity} title="Unity" alt="" />
      </section>

      <section>
        <h2 className="text-2xl pt-10 text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
          Cloud Computing and Databases
        </h2>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={mongo} title="mongodb" alt="" />
        <img src={postgres} title="PostgreSQL" alt="" />
        <img src={mysql} title="MySQL" alt="" />
        <img src={firebase} title="Firebase" alt="" />
        <img src={aws} title="AWS" alt="" />
        <img src={azure} title="Azure" alt="" />
        <img src={heroku} title="Heroku" alt="" />
      </section>
      <section>
        <h2 className="text-2xl pt-10 text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
          Mobile App Development
        </h2>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={android} title="Android" alt="" />
        <img src={flutter} title="Flutter" alt="" />
        <img src={swift} title="Swift" alt="" />
        <img src={reactnative} title="React Native" alt="" />  
      </section>
      <section>
        <h2 className="text-2xl pt-10 text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
          Tools
        </h2>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={arduino} title="Arduino" alt="" />
      </section>
    </main>
  );
}

export default Technologies;
