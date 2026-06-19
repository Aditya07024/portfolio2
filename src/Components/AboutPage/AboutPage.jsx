import React from "react";
import "./AboutPage.css";
import image from "../../../src/assets/image.png";

const AboutPage = () => {
  return (
    <section className="about-div" id="about" aria-labelledby="about-heading">
      <div className="about-me">
        <h2 className="about" id="about-heading">About</h2>
        <p className="me">ME.</p>
      </div>
      <hr />
      <div className="container">
        <div className="row1">
          <div className="item1">
            <div className="text-item">
              <h2>Background</h2>
              <p>
                I'm a Computer Science graduate with a passion for full-stack
                web development, mobile app development, and UI/UX design. My
                curiosity for technology led me to explore MERN stack
                development and React Native through hands-on projects,
                bootcamps, and seminars, building expertise as a full-stack
                developer in India.
              </p>
            </div>
            <div className="box-creative">
              <img
                src={image}
                alt="Aditya Kumar - Full-Stack Developer professional profile"
              />
            </div>
          </div>
          <div className="item2">
            <div className="item">
              <h2>Expertise</h2>
              <p>
                As a full-stack developer, I build fast, scalable, and
                user-friendly web and mobile applications. My work combines
                strong React and Next.js frontend skills with robust backend API
                development using Node.js and Express, complemented by creative
                UI/UX design capabilities.
              </p>
            </div>
            <div className="item">
              <h2>Approach</h2>
              <p>
                Clean, maintainable code and thoughtful design define my work. I
                prioritize understanding user needs, planning effectively, and
                delivering on time with attention to both performance and
                aesthetics.
              </p>
            </div>
          </div>
        </div>
        <div className="row2">
          <div className="item3">
            <h2>Professional Goals</h2>
            <p>
              I'm committed to continuously enhancing my skills as a MERN stack
              developer and React Native specialist, engaging with challenging
              projects that push my boundaries. Having recently expanded my
              expertise in mobile app development and UI/UX design, I'm excited
              to apply these competencies in real-world projects. I'm
              enthusiastic about exploring emerging technologies and defining
              what's possible in web development, mobile app development, and
              modern design practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
