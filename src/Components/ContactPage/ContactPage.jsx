import React from "react";
import "./ContactPage.css";
import contactme from "../../assets/contactme.png";
import linkdin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import leetcode from "../../assets/leetcode.png";
const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio Contact Form Message");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:adityakumar07024@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <section className="full-page" id="contact" aria-labelledby="contact-heading">
      <div className="main">
        <div className="left-div">
        <div className="social-icon-div">
          <a href="https://www.linkedin.com/in/adityakumar0702/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <img src={linkdin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/Aditya07024" target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://leetcode.com/u/adityakumar07024/" target="_blank" rel="noreferrer" aria-label="LeetCode profile">
            <img src={leetcode} alt="LeetCode" />
          </a>
          <a href="https://x.com/Aditya07024" target="_blank" rel="noreferrer" aria-label="X profile">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/aditya_chaudhary_._/" target="_blank" rel="noreferrer" aria-label="Instagram profile">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
        <div className="contact-div">
          <h2 id="contact-heading">Let's Connect</h2>
          <p>I’m open to collaborations and projects.</p>
          
          <a href="https://api.whatsapp.com/send?phone=918650970092" target="_blank" rel="noreferrer"><h3>+91 8650970092</h3></a>
          <a href="mailto:adityakumar07024@gmail.com">adityakumar07024@gmail.com</a>
          <div className="contact-image"><img src={contactme} alt="Illustration for contacting Aditya Kumar" /></div>
        </div>
        <div className="address-div"></div>
        
      </div>
      
      <div className="connect-right-div">
        
        <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
      </div>
      </div>
      <hr></hr>
      <div className="footer"><p>© 2025 Aditya Kumar. All Rights Reserved.</p></div>
    </section>
  );
};

export default ContactPage;
