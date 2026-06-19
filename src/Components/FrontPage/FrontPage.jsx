import React from 'react'
import './FrontPage.css'
import linkdin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import leetcode from '../../assets/leetcode.png'

const FrontPage = () => {
  return (
    <section className='front-page' id="home" aria-labelledby="hero-title">
      <div className="text">
        <div className="hello">
          <h2>Hello.</h2>
        </div>
        <div className="name">
          <h1 id="hero-title">I'm Aditya Kumar</h1>
        </div>
        <div className="description">
          <p>Full-Stack MERN, React Native, and UI/UX Developer building web and mobile products.</p>
        </div>
        <div className="button-div">
          <a href="#project" className='project-button'>View My Projects</a>
          <a href="https://drive.google.com/drive/folders/1-ADQBKLl0qADph0_T-f-CiBb6pQoVNsh?usp=sharing" target="_blank" rel="noreferrer">Download My Resume</a>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/adityakumar0702/" target="_blank" rel="noreferrer" title="Aditya Kumar on LinkedIn" aria-label="Visit LinkedIn profile"><img src={linkdin} alt="LinkedIn - Connect with Aditya Kumar, Full-Stack Developer" /></a>
          <a href="https://github.com/Aditya07024" target="_blank" rel="noreferrer" title="Aditya Kumar on GitHub" aria-label="Visit GitHub repository"><img src={github} alt="GitHub - View Aditya Kumar's code projects and repositories" /></a>
          <a href="https://leetcode.com/u/adityakumar07024/" target="_blank" rel="noreferrer" title="Aditya Kumar on LeetCode" aria-label="Visit LeetCode profile"><img src={leetcode} alt="LeetCode - Aditya Kumar's algorithmic solutions" /></a>
          <a href="https://x.com/Aditya07024" target="_blank" rel="noreferrer" title="Aditya Kumar on Twitter" aria-label="Visit Twitter profile"><img src={twitter} alt="Twitter / X - Follow Aditya Kumar for tech updates" /></a>
          <a href="https://www.instagram.com/aditya_chaudhary_._/" target="_blank" rel="noreferrer" title="Aditya Kumar on Instagram" aria-label="Visit Instagram profile"><img src={instagram} alt="Instagram - Follow Aditya Kumar for creative work and updates" /></a>
        </div>
      </div>
      <div className="com-image" aria-hidden="true">
      </div>
    </section>
  )
}

export default FrontPage
