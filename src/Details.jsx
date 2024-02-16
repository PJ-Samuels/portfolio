// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/headshot.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.svg";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import mongo from "./assets/techstack/mongodb.svg";
import cplus from "./assets/techstack/c++.svg";
import flutter from "./assets/techstack/flutter.svg";
import flask from "./assets/techstack/flask.svg";
import arduino from "./assets/techstack/arduino.svg";
import python from "./assets/techstack/python.svg";
import java from "./assets/techstack/java.svg";
import angular from "./assets/techstack/angular.svg";
import android from "./assets/techstack/android.svg";
import typescript from "./assets/techstack/ts.svg";
import firebase from "./assets/techstack/firebase.svg";
import express from "./assets/techstack/express.svg";
import node from "./assets/techstack/node.svg";
import postgres from "./assets/techstack/postgresql.svg";
import mysql from "./assets/techstack/mysql.svg";
import unity from "./assets/techstack/unity.svg";
import next from "./assets/techstack/nextjs-2.svg";
import aws from "./assets/techstack/aws.svg";
import azure from "./assets/techstack/azure.svg";
import swift from "./assets/techstack/swift.svg";
import reactnative from "./assets/techstack/react-native.svg";
import heroku from "./assets/techstack/heroku.svg";
import c from "./assets/techstack/clang.svg";
import csharp from "./assets/techstack/csharp.svg";

//add unity and next as well as aws ans azure, swift, react native heroku C and C#




// Porject Images
import projectImage1 from "./assets/projects/drake.png";
import videogame from "./assets/projects/videogame.png";
import vitalfix from "./assets/projects/vital.png";
import pixelman from "./assets/projects/pixelman.png";
import alpha from "./assets/projects/alpha-vantage.jpeg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/tinkercad1.png";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "PJ Samuels",
  tagline: "I'm a Full-Stack Software Developer",
  img: profile,
  about: `Hey I'm Oliver 'PJ' Samuels, a Full-Stack and Mobile-App Web Developer. 
  I have a strong background in team collaborations and have successfully delivered and worked on various web development projects. 
  My current focus is on launching my career as a Full-Stack Web Developer, with ongoing projects in React and Angular. 
  Additionally, I'm developing a mobile app using React Native, Firebase and the RAWG API while working on a hardware project utilizing Arduino`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/pj-samuels/",
  github: "https://github.com/PJ-Samuels/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

export const workDetails = [
  {
    Position: "Software Engineer",
    Company: `The Boardroom`,
    Description: `Prototyped Blackboard and Canvas alternative featuring an AI assistant, designed for widespread academic use utilizing Next.js, Typescript, PostgreSQL, and AWS to develop a web and mobile applications that addresses issues with UI/UX of its competitors.
    Collaborated with a team of 30 people resulting in the successful development of a web platform that attracted total investments exceeding $50,000, for widespread official use in numerous universities and colleges.
    Worked closely with Full-Stack, Mobile app, and Machine Learning executives to enhance the long-term sustainability, usability, and future features of the platform.`,
    Location: "Remote",
    Type: "Part-Time",
    Duration: "Nov 2023 - Present",
  },
  {
    Position: "Software Engineer Intern",
    Company: `Nasdaq`,
    Description: `Developed and prototyped conference meeting video web-application using HTML, CSS, JavaScript, PostgreSQL, GitLab, JSON, Flask-Python, and launched on to an AWS environment service with S3.
    Used the Zoom API and jQuery UI to enable interactive, feature-rich group calls with captions, text, and pinned participants, enhancing the corporate user experience.
    Collaborated with Audio-Visual team to develop long-term functionality for video-based boardroom web-app, for full company use in quarterly boardroom meetings, effectively replacing a 5-person team responsible for the meetings process resulting in annual savings exceeding $42,000 per year for the company`,
    Location: "Boston, MA",
    Type: "Internship",
    Duration: "June 2022 - Aug 2022",
  },
  {
    Position: "Data Science Intern",
    Company: `CRACE Financial`,
    Description:`Incorporated PCA and PCoA graphing to analyze the efficiency of groups generated from hierarchical clustering.
    Conducted analysis on financial statement datasets, identifying anomalies and differences within each group, contributing to company improvements and decision-making processes.
    Automated generation of PCA and PCoA graphs for efficient visualization of clustering groups using Python scripts with Matplotlib and pandas. Utilized Google Sheets for in-depth analysis and observations`,
    Location: "Takoma Park, MD",
    Type: "Internship",
    Duration: "June 2021 - Aug 2021",
  },
  {
    Position: "Test Automation Intern",
    Company: "CRACE Financial",
    Description: `Designed investor web-app working with JavaScript, CSS, X-path, basic Linux, and GitHub along with Selenium and Bootstrap.
    Collaborated with developers to extend automated Selenium tests, ensuring smooth user authentication, bug-free functionality, contributing to the successful launch of the web-app
    Automated input validation, error detection, document uploads, and user sign-up processes, while refining the calendar page appearance, saving $16,000 annually and improving website testing for team efficiency.`,
    Location: "Takoma Park, MD",
    Type: "Internship",
    Duration: "June 2020 - Aug 2020",
  }

];

export const eduDetails = [
  {
    Position: "Bachelor in Computer Science",
    Company: `Boston Univeristy`,
    Description: `Courses: Full-Stack Development, Software Engineering, Mobile-App Development, Databases, 
    Probability in Computing, Geometric Algorithms, Fundamentals in Computing Systems, Computer Systems, Intro to Data Sciences`,
    Location: "Boston, MA",
    Type: "Full Time",
    Duration: "Aug 2020 -  May 2023",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  flask: flask,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  mongo: mongo,
  github: github,
  figma: figma,
  cplus: cplus,
  flutter: flutter,
  arduino: arduino,
  python: python,
  java: java,
  typescript: typescript,
  angular: angular,
  android: android,
  firebase: firebase,
  express: express,
  node: node,
  postgres: postgres,
  mysql: mysql,
  unity: unity,
  next: next,
  aws: aws,
  azure: azure,
  swift: swift,
  reactnative: reactnative,
  heroku: heroku,
  c: c,
  csharp: csharp,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Notified",
    image: projectImage1,
    description: `
    A music notification web and mobile app that keeps you updated with the latest music releases and artist updates. 
    Receive real-time banners, emails, and texts notifications when an artist releases a new album, feature or single. 
    Keep a list of favorite artists and receive notifications when they release new music.`,
    techstack: "React.js, PostgreSQL, Express.js, Node.js, Spotify API, Flutter",
    previewLink: "https://google.com",
    githubLink: "https://github.com/PJ-Samuels/Notified-App",
  },
  {
    title: "Fitness Finder",
    image: projectImage2,
    description: `
    A web application that helps users find fitness centers near them. Users can search for fitness centers based on their location, preferences, and fitness goals. 
    The app provides detailed information about each fitness center, including facilities, classes, trainers, and user reviews.
    `,
    techstack: "Angular, TypeScript, Express.js, Node.js, MongoDB, Google Firebase",
    previewLink: "https://google.com",
    githubLink: "https://github.com/PJ-Samuels/Fitness-Center-App",
  },
  {
    title: "Pixel Man 1",
    image: pixelman,
    description: `This is a simple
    2D platformer video game with various enemies and obstacles to avoid as the 
    user traverses through multiple levels.`,
    techstack: "Unity, C#",
    previewLink: "https://google.com",
    githubLink: "https://github.com/PJ-Samuels/Pixel-Man-1",
  },
  {
    title: "Video Game Rater",
    image: videogame,
    description: `A mobile application allowing users to list video games they have played and rate them. 
    Share video game ratings with friends and view other users lists and ratings.`,
    techstack: "React Native, Google Firebase, RAWG API",
    previewLink: "https://google.com",
    githubLink: "https://github.com/PJ-Samuels/Stock-Visualizer"
  },
  {
    title: "Arduino Boards",
    image: projectImage5,
    description: `Introductory level Electrical Engineering and circuitry utilizing C++, Tinkercard, Arduino, and physical breadboards to get the experience of coding with hardware.`,
    techstack: "Arduino, C++, Tinkercad",
    previewLink: "https://google.com",
    githubLink: "https://github.com/PJ-Samuels/Arduino-Boards",
  },
  {
    title: "PhotoShare",
    image: projectImage6,
    description: `Social media platform project, using MySQL, Flask, and HTML. Built for users to upload photos to albums 
    while allowing commenting, liking, and viewing of other users photos with various ways to filter viewing of photos`,
    techstack: "HTML, Python, Flask, MySQL",
    previewLink: "https://google.com",
    githubLink: "https://github.com/PJ-Samuels/Photoshare",
  },
  {
    title: "Vitamin App",
    image: projectImage4,
    description: `Mobile application built for viewing vitamins available given a set of user input of symptoms
     or issues to help with health issues and shows popular vitamins and news in the medical field`,
    techstack: "Android Studio, Java, Google Firebase, SQLite",
    previewLink: "https://google.com",
    githubLink: "https://github.com/CS501Fall2022/Vitamin_App",
  },
  {
    title: "Stock Visualizer",
    image: alpha,
    description: `React-Flask web application that takes user-input stock names and displays the current stock prices using the 
    Alpha Vantage API`,
    techstack: "React.js, Python, Flask, JavaScript, Alpha Vantage API",
    previewLink: "https://google.com",
    githubLink: "https://github.com/PJ-Samuels/Stock-Visualizer",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "osamuels@bu.edu",
  phone: "+1-301-237-1240",
};
