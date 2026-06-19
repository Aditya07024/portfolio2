import React from "react";
import "./Certificates.css";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.jpeg";
import c3 from "../../assets/c3.jpeg";
import c4 from "../../assets/c4.jpeg";
const certificates = [
  { title: "WIN Agent-a-thon",
    image: c1,
  },
  { title: "UI/UX Design",
    image: c2,
  },
  { title: "Advanced react",
    image: c3,
  },
  { title: "Data Structures and Algorithm",
    image: c4,
  },
];

const Certificates = () => {
  return (
    <section className="certificates-section" id="certificates" aria-labelledby="certificates-heading">
      <h2 className="certificates-heading" id="certificates-heading">Certificates and Achievements</h2>

      <div className="certificates-container">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <img src={cert.image} alt={cert.title} />
            <p>{cert.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
