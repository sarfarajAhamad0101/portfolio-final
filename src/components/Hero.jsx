

import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      
    
      <div className="floating-bg"></div>

      <div className="hero-card">
        <img 
          src="/photo.png" 
          alt="Sarfaraj" 
          className="profile-pic"
        />

        


        <h1>
          Hi, I'm <span>Sarfaraj Ahamad</span> 
          
        </h1>
    
         <h3>
          I am a (C.S.E) Diploma Student 
        </h3>
        

        <h4>
          CURRENT C.G.P (8.00)
        </h4>

        <h2>Frontend Developer</h2>

        
         

        <p>
          I am learning React and building modern responsive websites.
          Improving my skills in JavaScript, Git and GitHub.
        </p>

        <div className="buttons">
          <a 
            href="https://www.linkedin.com/in/sarfaraj-ahamad-50598a34b/"
            target="_blank"
            rel="noreferrer"
            className="glass-btn"
          >
            <FaLinkedin className="icon" /> LinkedIn
          </a>

          <a 
            href="https://github.com/sarfarajAhamad0101" 
            target="_blank"
            rel="noreferrer"
            className="glass-btn"
          >
            <FaGithub className="icon" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;