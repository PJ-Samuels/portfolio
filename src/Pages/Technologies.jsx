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
    postman,
    reactnative,
    graphql,
    intellij,
    sourcetree,
    bitbucket
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

        <a href="https://react.dev/"><img src={react} title="React" alt="" /></a>
        <a href="https://angular.dev/"><img src={angular} title="Angular" alt="" /></a>
        <a href="https://nodejs.org/en"><img src={node} title="Node.js" alt="" /></a>
        <a href="https://flask.palletsprojects.com/en/stable/"><img src={flask} title="Flask" alt="" style={{ filter: "invert(100%) sepia(100%) saturate(0%) hue-rotate(180deg)" }} /></a>
        <a href="https://expressjs.com/"><img src={express} title="Express.js" alt="" style={{ filter: "invert(100%) sepia(100%) saturate(0%) hue-rotate(180deg)" }} /></a>
        <a href="https://nextjs.org/"><img src={next} title="Next.js" alt="" style={{ filter: "invert(100%) sepia(100%) saturate(0%) hue-rotate(180deg)" }} /></a>
      </section>
      <section>
        <h2 className="text-2xl text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
          Full-Stack Development
        </h2>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <a href="https://www.python.org/"><img src={python} title="Python" alt="" /></a>
        <a href="https://www.java.com/en/"><img src={java} title="Java" alt="" /></a>
        <a href="https://www.javascript.com/"><img src={js} title="JavaScript" alt="" /></a>
        <a href="https://www.typescriptlang.org/"><img src={typescript} title="TypeScript" alt="" /></a>
        <a href="https://www.w3schools.com/html/"><img src={html} title="html" alt="" /></a>
        <a href="https://www.w3schools.com/css/"><img src={css} title="CSS" alt="" /></a>
        <a href="https://tailwindcss.com/"><img src={tailwind} title="Tailwind CSS" alt="" /></a>
        <a href="https://www.w3schools.com/c/"><img src={c} title="C" alt="" /></a>
        <a href="https://www.w3schools.com/cpp/"><img src={cplus} title="C++" alt="" /></a>
        <a href="https://learn.microsoft.com/en-us/dotnet/csharp/"><img src={csharp} title="C#" alt="" /></a>
        <a href="https://unity.com/"><img src={unity} title="Unity" alt="" /></a>
      </section>

      <section>
        <h2 className="text-2xl pt-10 text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
          Cloud Computing and Databases
        </h2>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <a href="https://www.postgresql.org/"><img src={postgres} title="PostgreSQL" alt="" /></a>
        <a href="https://firebase.google.com/"><img src={firebase} title="Firebase" alt="" /></a>
        <a href="https://aws.amazon.com/free/"><img src={aws} title="AWS" alt="" /></a>
        <a href="https://www.mongodb.com/"><img src={mongo} title="mongodb" alt="" /></a>
        <a href="https://www.mysql.com/"><img src={mysql} title="MySQL" alt="" /></a>
        <a href="https://graphql.org/"><img src={graphql} title="GraphQL" alt="" /></a>
        <a href="https://azure.microsoft.com/en-us/"><img src={azure} title="Azure" alt="" /></a>
        <a href="https://www.heroku.com/"><img src={heroku} title="Heroku" alt="" /></a>
        <a href="https://www.postman.com/"><img src={postman} title="Postman" alt="" /></a>
      </section>
      <section>
        <h2 className="text-2xl pt-10 text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
          Mobile App Development
        </h2>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
      <a href="https://reactnative.dev/"><img src={reactnative} title="React Native" alt="" /></a>
      <a href="https://developer.android.com/"><img src={android} title="Android" alt="" /></a>
      <a href="https://flutter.dev/"> <img src={flutter} title="Flutter" alt="" /></a>
      <a href="https://www.swift.org/"><img src={swift} title="Swift" alt="" /></a>
      </section>
      <section>
        <h2 className="text-2xl pt-10 text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
          Tools
        </h2>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
      <a href="https://code.visualstudio.com/"><img src={vscode} title="Visual Studio Code" alt="" /></a>
      <a href="https://git-scm.com/"><img src={git} title="Git" alt="Git" /></a>
      <a href="https://github.com/"><img src={github} title="Github" alt="Github" style={{ filter: "invert(100%) sepia(100%) saturate(0%) hue-rotate(180deg)" }}/></a>
      <a href="https://www.figma.com/"><img src={figma} title="Figma" alt="Figma" /></a>
      <a href="https://www.npmjs.com/"><img src={npm} title="NPM" alt="NPM" /></a>
      <a href="https://www.arduino.cc/"><img src={arduino} title="Arduino" alt="" /></a>
      <a href="https://bitbucket.org/product/"><img src={bitbucket} title="bitbucket" alt="" /></a>
      <a href="https://www.jetbrains.com/idea/"><img src={intellij} title="intellij" alt="" /></a>
      <a href="https://www.sourcetreeapp.com/"><img src={sourcetree} title="sourcetree" alt="" /></a>
      </section>
    </main>
  );
}

export default Technologies;
