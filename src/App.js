import React from 'react';
import './App.css';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as LogoWithoutIcon } from './logo-without-icon.svg'; 
import { ReactComponent as LogoInverse } from './logo-inverse.svg'; 
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { PiStackPlus } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HashLink as Link } from 'react-router-hash-link';
import ProjectCard from './ProjectCard';
import { projects } from './projects'; 

function App() {
  return (
    <main>
      <header className="header">
        <nav className='container'>
          <ul className='row'>
            <li className="col-6 logo-wrapper"><a href="/" aria-label="Site Logo"><Logo /></a></li>
            <div className="col-6 header-links-wrapper">
              <li><Link to="#projects">Projects</Link></li>
              <li><a href="Freddy Hernandez Resume 2024.pdf" target='_blank' rel='noreferrer'>Resume</a></li>
              <li><a href="mailto:fhernand0705@gmail.com" target="_blank" rel="noreferrer">Contact</a></li>
            </div>
          </ul>
        </nav>
      </header>
      <section className='short-intro'>
        <div className='container'>
          <div className='row'>
            <h1><span><LogoWithoutIcon /></span>ull Stack Developer</h1>
            <p>I build interactive and accessible digital experiences for clients across major industries.</p>
            <div className="col-12 short-intro-img">
              <img src={require("./images/portfolio graphic.png")} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className='long-intro'>
        <div className='container'>
          <div className='row'>
            <div className='long-intro-copy'>
              <h2>Hey, my name is Freddy. Welcome to my portfolio.</h2>
              <p>Ever since pivoting careers to tech 5 years ago, I've carved out a diverse path beginning at a non-profit in public health where I designed and built internal software tools, reshaping company-wide operations. In my current role as a Application Developer, I bring life to interactive web and mobile experiences. I've contributed to projects for <strong>Valvoline</strong>, <strong>Vassar College</strong>, <strong>Wake Forest University: School of Professional Studies</strong>, <strong>Professional Bull Riders</strong>, <strong>Love Travels by Marriott Bonvoy</strong>, <strong>Alabama A&M University</strong>, <strong>Obsidianworks</strong>, <strong>LUIGI'S Real Italian Ice</strong>, <strong>SUPERPRETZEL</strong>, <strong>Cal Poly Pamona</strong>, and <strong>NYU Online</strong>. My tech journey is about innovation and a commitment to transforming ideas into practical and accessible digital solutions.</p>
              <p>Outside of tech, I run my own squash coaching company<span>&#8212;</span>Atomic Squash LLC<span>&#8212;</span>as a side hustle, I travel when I can, and I like to cook and read.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='skills'>
        <div className='container'>
          <div className='row'>
            <div className='skills-header'>
              <h2>Skills</h2>
            </div>
            <div className='skills-cards'>
              <div className='skills-card--left col-12 col-lg-5'>
                <i className='skills-icon'><HiOutlineSquare3Stack3D style={{color: '#242F40', width: '50px', height: '50px'}}/></i>
                <h3>Frontend</h3>
                <h5>Languages</h5>
                <ul className='skills-languages'>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Sass</li>
                </ul>
                <h5>Tools & Frameworks</h5>
                <ul className='skills-tools'>
                  <li>React</li>
                  <li>React Native</li>
                  <li>WordPress</li>
                  <li>Pug.js</li>
                  <li>JQuery</li>
                  <li>Bootstrap</li>
                  <li>NPM</li>
                  <li>Git</li>
                </ul>
              </div>
              <div className='col-12 col-lg-2 divider'></div>
              <div className='skills-card--right col-12 col-lg-5'>
                <i className='skills-icon'><PiStackPlus style={{color: '#242F40', width: '50px', height: '50px'}}/></i>
                <h3>Backend</h3>
                <h5>Languages</h5>
                <ul className='skills-languages'>
                  <li>PHP</li>
                  <li>JavaScript</li>
                  <li>Java</li>
                </ul>
                <h5>Tools & Frameworks</h5>
                <ul className='skills-tools'>
                  <li>Spring Boot</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>AWS</li>
                  <li>MySQL</li>
                  <li>SQL Server</li>
                  <li>WordPress</li>
                  <li>Pantheon</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='projects' className='projects'>
        <div className='container'>
          <div className='row'>
            <header className='projects-header'>
              <h1>My Recent Client Projects</h1>
            </header>
            {projects && projects.length > 0 && projects.map((project, i) => 
              <div key={i} className='col-lg-4'>
                <ProjectCard project={project} />
              </div>
            )}
          </div>
        </div>
      </section>
      <footer className='footer'>
          <div className='container'>
            <div className='footer-logo'>
              <LogoInverse />
            </div>
            <div className='row'>
              <h2 className='footer-copy'>Let's work together.</h2>
            </div>
            <ul className='row'>
              <li className='footer-icons'><a href="mailto:fhernand0705@gmail.com" title="Email" target="_blank" rel='noreferrer' aria-label="Personal Email"><MdOutlineMailOutline style={{color: "#242F40", width: "50px", height: "auto"}} /></a></li>
              <li className='footer-icons'><a href="https://github.com/fhernand0705" title="GitHub" target="_blank" rel='noreferrer' aria-label='GitHub Profile'><IoLogoGithub style={{color: "#242F40", width: "50px", height: "auto"}} /></a></li>
              <li className='footer-icons'><a href="Freddy Hernandez Resume 2024.pdf" title="Resume" target="_blank" rel='noreferrer' aria-label="Resume"><IoDocumentTextOutline style={{color: "#242F40", width: "50px", height: "auto"}} /></a></li>
            </ul>
          </div>
      </footer>
    </main>
  );
}

export default App;
