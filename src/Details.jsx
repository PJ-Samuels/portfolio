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

//add unity and next as well as aws ans azure, swift, react native heroku C and C#




// Porject Images
import projectImage1 from "./assets/projects/drake.png";
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
  about: `Hey I'm Oliver Samuels, a Full-Stack and Mobile-App Web Developer. I have a strong background in team collaborations and have successfully delivered and worked on various web development projects. My current focus is on launching my career as a full-stack web developer, with ongoing projects in React and Angular. Additionally, I'm developing a mobile app using Flutter and working on a hardware project utilizing Arduino`,
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
    Location: "Remote",
    Type: "Part-Time",
    Duration: "Nov 2023 - Present",
  },
  {
    Position: "Software Engineer Intern",
    Company: `Nasdaq`,
    Location: "Boston, MA",
    Type: "Internship",
    Duration: "June 2022 - Aug 2022",
  },
  {
    Position: "Data Science Intern",
    Company: `CRACE Financial`,
    Location: "Takoma Park, MD",
    Type: "Internship",
    Duration: "June 2021 - Aug 2021",
  },
  {
    Position: "Test Automation Intern",
    Company: "CRACE Financial",
    Location: "Takoma Park, MD",
    Type: "Internship",
    Duration: "June 2020 - Aug 2020",
  }

];

// Enter your Education Details here
export const eduDetails = [
  // {
  //   Position: "Frontend Development",
  //   Company: "Udemy, YouTube, Google, Medium",
  //   Location: "Online",
  //   Type: "Full Time",
  //   Duration: "Jan 2022 - Present",
  // },
  {
    Position: "Bachelor in Computer Science",
    Company: `Boston Univeristy`,
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
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Notified",
    image: projectImage1,
    description: `Web and Mobile Application

    Summary: Experience the ultimate music companion with our Music Notification App—a seamless blend of web and mobile applications designed to keep you in tune with your favorite music tracks and artists. Stay up-to-date with the latest releases and never miss a beat.
    Features:
    Real-time Notifications: Receive instant notifications about new music releases, personalized playlists, and artist updates, ensuring you're always in the know.
    Cross-Platform Access: Enjoy the app's full functionality whether you're on your desktop or using your mobile device, ensuring continuous music discovery and enjoyment.
    Personalized Playlists: Curate your own playlists or discover personalized playlists based on your music preferences, moods, and listening history.`,
    techstack: "React.js, PostgreSQL, Express.js, Node.js, Spotify API, Flutter",
    previewLink: "https://google.com",
    githubLink: "https://github.com/PJ-Samuels/Notified-App",
  },
  {
    title: "Fitness Finder",
    image: projectImage2,
    description: `Web-App Application

    Summary: Experience the convenience of finding the perfect fitness center near you with our Fitness Center Locator web application.
    Whether you're a fitness enthusiast or just beginning your health journey, our app helps you locate and explore fitness centers tailored to your preferences.
    Features:
    Location-Based Search: Quickly discover fitness centers based on your location, ensuring convenience and accessibility.
    Detailed Information: Get details about each fitness center, including facilities, classes, trainers, and user reviews.
    User Reviews and Ratings: Make informed decisions by reading user reviews and ratings for each fitness center.
    Personalized Recommendations: Receive personalized recommendations based on your fitness goals, preferences, and activity levels.`,
    techstack: "Angular, TypeScript, Express, Node, Mongodb, Google Firebase",
    previewLink: "https://google.com",
    githubLink: "https://github.com/PJ-Samuels/Fitness-Center-App",
  },
  {
    title: "Pixel Man",
    image: projectImage3,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "Unity, C#",
    previewLink: "https://google.com",
    githubLink: "https://github.com/PJ-Samuels/Pixel-Man-1",
  },
  {
    title: "Video Game Rater",
    image: projectImage4,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "React Native, Google Firebase, RAWG API",
    previewLink: "https://google.com",
    githubLink: "https://github.com/PJ-Samuels/Stock-Visualizer"
  },
  {
    title: "Arduino Boards",
    image: projectImage5,
    description: `Introductry level electrical engineering and circuitry utilizing C++, Tinkercard, Arduino, and physical breadboards`,
    techstack: "Arduino, C++, Tinkercad",
    previewLink: "https://google.com",
    githubLink: "https://github.com/PJ-Samuels/Arduino-Boards",
  },
  {
    title: "PhotoShare",
    image: projectImage6,
    description: `Social media platform project, using MySQL, Flask, and Html. Built for users to upload photos to albums 
    while allowing commenting, liking, and viewing of other users photos with various filters`,
    techstack: "HTML, Python, Flask, MySQL",
    previewLink: "https://google.com",
    githubLink: "https://github.com/PJ-Samuels/Photoshare",
  },
  {
    title: "Vitamin App",
    image: projectImage6,
    description: `Mobile application built using Android Studio Java, Google Firebase, and SQLite for viewing Vitamins
    available given a set of user input of sympotoms or issues to help with health issues,`,
    techstack: "Android Stuido, Java, Google Firebase",
    previewLink: "https://google.com",
    githubLink: "https://github.com/CS501Fall2022/Vitamin_App",
  },
  {
    title: "Stock Visualizer",
    image: projectImage6,
    description: `React-Flask web application that takes user-input stock names and displays the current stock prices using the 
    Alpha Vantage API`,
    techstack: "React, Python-Flask, Javascript,Alpha Vantage API",
    previewLink: "https://google.com",
    githubLink: "https://github.com/PJ-Samuels/Stock-Visualizer",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "osamuels@bu.edu",
  phone: "+1-301-237-1240",
};
