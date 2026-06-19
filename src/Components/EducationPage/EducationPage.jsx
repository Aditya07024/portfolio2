import React from "react";
// import collegeImg from "../../assets/images/educat/college.jpg";
// import schoolImg from "../../assets/images/educat/school.jpg";
import "./EducationPage.css";
const EducationPage = () => (
  <section className="education" id="education">
    <h1 className="heading">
      <i className="fas fa-graduation-cap"></i> My <span>Education</span>
    </h1>
    <p className="qoute">
      Education is not the learning of facts, but the training of the mind to
      think.
    </p>
    <div className="box-container">
      <div className="box">
        <div className="image">
          {/* <img draggable={false} src={collegeImg} alt="College" /> */}
        </div>
        <div className="content">
          <h3>Bachelor of Engineering in Information Technology</h3>
          <p>Zeal College of engineering and research | SPPU</p>
          <h4>2020-2024 | Pursuing</h4>
        </div>
      </div>
      <div className="box">
        <div className="image">
          {/* <img draggable={false} src={schoolImg} alt="School" /> */}
        </div>
        <div className="content">
          <h3>HSC Science | Informatic Practices</h3>
          <p>Shri L. G. Haria Multipurpose School | CBSE</p>
          <h4>2018-2020 | Completed</h4>
        </div>
      </div>
    </div>
  </section>
);

export default EducationPage;
