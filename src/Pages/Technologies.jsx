import React from "react";
import { techStackDetails as t } from "../Details";

// Dark logos get flipped to white so they show up on the dark background.
const WHITE = "invert(100%) sepia(100%) saturate(0%) hue-rotate(180deg)";

const sections = [
  {
    title: "Frameworks",
    items: [
      { name: "React", icon: t.react, href: "https://react.dev/" },
      { name: "Angular", icon: t.angular, href: "https://angular.dev/" },
      { name: "Node.js", icon: t.node, href: "https://nodejs.org/en", filter: "brightness(1.8) saturate(1.3)" },
      { name: "Flask", icon: t.flask, href: "https://flask.palletsprojects.com/en/stable/", filter: WHITE },
      { name: "Express.js", icon: t.express, href: "https://expressjs.com/", filter: WHITE },
      { name: "Next.js", icon: t.next, href: "https://nextjs.org/", filter: WHITE },
    ],
  },
  {
    title: "Full-Stack Development",
    items: [
      { name: "Python", icon: t.python, href: "https://www.python.org/" },
      { name: "Java", icon: t.java, href: "https://www.java.com/en/" },
      { name: "JavaScript", icon: t.js, href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", icon: t.typescript, href: "https://www.typescriptlang.org/" },
      { name: "HTML", icon: t.html, href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS", icon: t.css, href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "Tailwind CSS", icon: t.tailwind, href: "https://tailwindcss.com/" },
      { name: "C", icon: t.c, href: "https://en.cppreference.com/w/c" },
      { name: "C++", icon: t.cplus, href: "https://isocpp.org/" },
      { name: "C#", icon: t.csharp, href: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
      { name: "Unity", icon: t.unity, href: "https://unity.com/", filter: WHITE },
      { name: "Spring", icon: t.spring, href: "https://spring.io/" },
      { name: "Selenium", icon: t.selenium, href: "https://www.selenium.dev/" },
    ],
  },
  {
    title: "Cloud Computing and Databases",
    items: [
      { name: "PostgreSQL", icon: t.postgres, href: "https://www.postgresql.org/" },
      { name: "Firebase", icon: t.firebase, href: "https://firebase.google.com/" },
      { name: "AWS", icon: t.aws, href: "https://aws.amazon.com/" },
      { name: "MongoDB", icon: t.mongo, href: "https://www.mongodb.com/" },
      { name: "MySQL", icon: t.mysql, href: "https://www.mysql.com/" },
      { name: "GraphQL", icon: t.graphql, href: "https://graphql.org/" },
      { name: "Azure", icon: t.azure, href: "https://azure.microsoft.com/en-us/" },
      { name: "Heroku", icon: t.heroku, href: "https://www.heroku.com/" },
      { name: "Postman", icon: t.postman, href: "https://www.postman.com/" },
    ],
  },
  {
    title: "Mobile App Development",
    items: [
      { name: "React Native", icon: t.reactnative, href: "https://reactnative.dev/" },
      { name: "Android", icon: t.android, href: "https://developer.android.com/" },
      { name: "Flutter", icon: t.flutter, href: "https://flutter.dev/" },
      { name: "Swift", icon: t.swift, href: "https://www.swift.org/" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "VS Code", icon: t.vscode, href: "https://code.visualstudio.com/" },
      { name: "Git", icon: t.git, href: "https://git-scm.com/" },
      { name: "GitHub", icon: t.github, href: "https://github.com/", filter: WHITE },
      { name: "Figma", icon: t.figma, href: "https://www.figma.com/" },
      { name: "npm", icon: t.npm, href: "https://www.npmjs.com/" },
      { name: "Arduino", icon: t.arduino, href: "https://www.arduino.cc/" },
      { name: "Bitbucket", icon: t.bitbucket, href: "https://bitbucket.org/product/" },
      { name: "IntelliJ IDEA", icon: t.intellij, href: "https://www.jetbrains.com/idea/" },
      { name: "Sourcetree", icon: t.sourcetree, href: "https://www.sourcetreeapp.com/" },
    ],
  },
];

function Technologies() {
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
      {sections.map(({ title, items }) => (
        <section key={title} className="pt-10">
          <h2 className="text-2xl text-light-heading md:text-4xl xl:leading-tight">{title}</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 pt-6">
            {items.map(({ name, icon, href, filter }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                title={name}
                className="group flex flex-col items-center gap-2"
              >
                <img
                  src={icon}
                  alt={name}
                  className="h-16 w-16 md:h-20 md:w-20 object-contain transition-transform group-hover:scale-110"
                  style={filter ? { filter } : undefined}
                />
                <span className="text-content text-xs md:text-sm font-light text-center">{name}</span>
              </a>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default Technologies;
