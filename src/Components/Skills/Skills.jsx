import React from "react";
import "./Skills.css";
import react from "../../assets/react.png";
import javascript from "../../assets/javascript.png";
import tailwindcss from "../../assets/tailwindcss.png";
import reactnative from "../../assets/reactnative.png";
import nodejs from "../../assets/nodejs.png";
import expressjs from "../../assets/expressjs.png";
import mongodb from "../../assets/mongodb.png";
import sql from "../../assets/sql.png";
import figma from "../../assets/figma.png";
import firebase from "../../assets/firebase.png";
import postman from "../../assets/postman.png";
import python from "../../assets/python.png";
// import java from "../../assets/java.png";
import aws from "../../assets/aws.png";
import socket from "../../assets/Socket-io.svg";
import websockets from "../../assets/images.png";
import jwt from "../../assets/jwt-flower.webp";
import typescript from "../../assets/typescript.svg";
import nextjs from "../../assets/nextjs.jpeg";
// import redis from "../../assets/redis.png";
import postgresql from "../../assets/postgresql.png";
import clerk from "../../assets/clerk.png";
import razorpay from "../../assets/razorpay.png";

const Skills = () => {
  const SKILL_CATEGORIES = [
    {
      category: "Frontend Frameworks",
      skills: [
        {
          name: "ReactJS",
          image: react,
          alt: "React - JavaScript library for building user interfaces",
        },
        {
          name: "Next.js",
          image: nextjs,
          alt: "Next.js - React framework for production-grade web applications",
        },
        {
          name: "React Native",
          image: reactnative,
          alt: "React Native - Cross-platform mobile app development framework",
        },
        {
          name: "Tailwind CSS",
          image: tailwindcss,
          alt: "Tailwind CSS - Utility-first CSS framework for responsive design",
        },
        {
          name: "Figma",
          image: figma,
          alt: "Figma - UI/UX design and prototyping tool",
        },
      ],
    },
    {
      category: "Backend & Runtime",
      skills: [
        {
          name: "Node.js",
          image: nodejs,
          alt: "Node.js - JavaScript runtime for server-side development",
        },
        {
          name: "Express",
          image: expressjs,
          alt: "Express - Minimal web application framework for Node.js",
        },
        {
          name: "JavaScript",
          image: javascript,
          alt: "JavaScript - Core programming language for web development",
        },
        {
          name: "TypeScript",
          image: typescript,
          alt: "TypeScript - Typed superset of JavaScript for scalable code",
        },
        {
          name: "Python",
          image: python,
          alt: "Python - Versatile programming language for backends",
        },
      ],
    },
    {
      category: "Databases & Tools",
      skills: [
        {
          name: "Postman",
          image: postman,
          alt: "Postman - API development and testing platform",
        },
        {
          name: "AWS",
          image: aws,
          alt: "AWS - Cloud computing platform for app deployment",
        },
        {
          name: "MongoDB",
          image: mongodb,
          alt: "MongoDB - NoSQL database for flexible data storage",
        },
        {
          name: "SQL",
          image: sql,
          alt: "SQL - Structured query language for relational databases",
        },
        {
          name: "PostgreSQL",
          image: postgresql,
          alt: "PostgreSQL - Advanced open-source relational database",
        },
      ],
    },
    {
      category: "Security & Real-time",
      skills: [
        {
          name: "Socket.io",
          image: socket,
          alt: "Socket.io - Real-time communication library for web apps",
        },
        {
          name: "Websockets",
          image: websockets,
          alt: "Websockets - Protocol for real-time bidirectional communication",
        },
        {
          name: "JWT",
          image: jwt,
          alt: "JWT - JSON Web Token for secure authentication",
        },
        {
          name: "Clerk",
          image: clerk,
          alt: "Clerk - Modern authentication and user management",
        },
        {
          name: "Firebase",
          image: firebase,
          alt: "Firebase - Google's platform for app development and backend services",
        },
      ],
    },{
      category: "Payments & Integrations",
      skills: [
        {
          name: "RazorPay",
          image: razorpay,
          alt: "RazorPay - Payment gateway for secure online transactions",
        },],
    },
  ];

  return (
    <section className="skills-div" id="skills" aria-labelledby="skills-heading">
      <div className="Heading-div">
        <h2 id="skills-heading">Technical Skills & Technologies</h2>
      </div>
      <div className="main-sec">
        <div className="skills">
          <div className="img-container">
            <img
              src={react}
              alt="React - JavaScript library for building user interfaces with component-based architecture"
            />
            <p>ReactJS</p>
          </div>
          <div className="img-container">
            <img
              src={nextjs}
              alt="Next.js - React framework enabling server-side rendering and static site generation"
            />
            <p>Next.js</p>
          </div>
          <div className="img-container">
            <img
              src={reactnative}
              alt="React Native - Framework for developing iOS and Android applications with React"
            />
            <p>React Native</p>
          </div>
          <div className="img-container">
            <img
              src={tailwindcss}
              alt="Tailwind CSS - Utility-first CSS framework for creating responsive and custom designs"
            />
            <p>Tailwind CSS</p>
          </div>
          <div className="img-container">
            <img
              src={figma}
              alt="Figma - Design and prototyping platform for UI/UX design and collaboration"
            />
            <p>Figma</p>
          </div>
        </div>
        <div className="skills">
          <div className="img-container">
            <img
              src={nodejs}
              alt="Node.js - JavaScript runtime environment for building backend servers and APIs"
            />
            <p>Node.js</p>
          </div>
          <div className="img-container">
            <img
              src={expressjs}
              alt="Express - Minimalist web framework for building robust APIs and web applications"
            />
            <p>Express</p>
          </div>
          <div className="img-container">
            <img
              src={javascript}
              alt="JavaScript - Versatile programming language for web development, client-side and server-side"
            />
            <p>JavaScript</p>
          </div>
          <div className="img-container">
            <img
              src={typescript}
              alt="TypeScript - Typed JavaScript for large-scale applications and improved code quality"
            />
            <p>TypeScript</p>
          </div>
          <div className="img-container">
            <img
              src={python}
              alt="Python - Powerful programming language for scripting, automation, and backend services"
            />
            <p>Python</p>
          </div>
        </div>
        <div className="skills">
          <div className="img-container">
            <img
              src={postman}
              alt="Postman - API development and testing tool for backend API documentation and testing"
            />
            <p>Postman</p>
          </div>
          <div className="img-container">
            <img
              src={aws}
              alt="AWS - Cloud infrastructure platform for scalable deployment and cloud services"
            />
            <p>AWS</p>
          </div>
          <div className="img-container">
            <img
              src={mongodb}
              alt="MongoDB - NoSQL database for flexible JSON-like document storage"
            />
            <p>MongoDB</p>
          </div>
          <div className="img-container">
            <img
              src={sql}
              alt="SQL - Language for managing relational databases and data queries"
            />
            <p>SQL</p>
          </div>
          <div className="img-container">
            <img
              src={postgresql}
              alt="PostgreSQL - Advanced relational database with ACID compliance and JSON support"
            />
            <p>PostgreSQL</p>
          </div>
        </div>
        <div className="skills">
          <div className="img-container">
            <img
              src={socket}
              alt="Socket.io - Library for real-time, bidirectional communication in web applications"
            />
            <p>Socket.io</p>
          </div>
          <div className="img-container">
            <img
              src={websockets}
              style={{ borderRadius: "50%" }}
              alt="Websockets - Web protocol enabling persistent, real-time data exchange between client and server"
            />
            <p>Websockets</p>
          </div>
          <div className="img-container">
            <img
              src={jwt}
              alt="JWT - JSON Web Tokens for secure, stateless authentication in APIs"
            />
            <p>JWT</p>
          </div>
          <div className="img-container">
            <img
              src={clerk}
              alt="Clerk - Modern authentication platform for user management and identity solutions"
            />
            <p>Clerk</p>
          </div>
          <div className="img-container">
            <img
              src={firebase}
              alt="Firebase - Google's backend platform offering database, authentication, and hosting services"
            />
            <p>Firebase</p>
          </div>
        </div>
        <div className="skills">
          <div className="img-container">
            <img
              src={razorpay}
              alt="Razorpay - Payment gateway for secure online transactions and payment processing"
            />
            <p>Razorpay</p>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema for Technical Skills */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Thing",
          name: "Aditya Kumar Technical Skills",
          description:
            "Full-stack MERN developer with expertise in React, Next.js, React Native, Node.js, Express, MongoDB, PostgreSQL, and UI/UX design",
        })}
      </script>
    </section>
  );
};
export default Skills;
