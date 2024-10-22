import React from 'react';
import './App.css';
import { ReactComponent as Logo } from './portfolio-logo.svg';
import { ReactComponent as LogoWithoutIcon } from './portfolio-logo-without-icon.svg'; 
import { HashLink as Link } from 'react-router-hash-link';


function App() {
  return (
    <main>
      <header className="header">
        <nav className='container'>
          <ul className='row'>
            <li className="col-6 logo-wrapper"><a href="/"><Logo /></a></li>
            <div className="col-6 header-links-wrapper">
              <li><Link to="/">Projects</Link></li>
              <li><a href="https://docs.google.com/document/d/e/2PACX-1vRWG4_jLWMsjLZmNRjULr_7-QE6Sk6P-Oxu7LUI5AG83c1tCQiYEHPD2eqKnmnrvNJrtirYV6eXUcO5/pub">Resume</a></li>
              <li><a href="mailto:fhernand0705@gmail.com" target="_blank" rel="noreferrer">Contact</a></li>
            </div>
          </ul>
        </nav>
      </header>
      {/* <iframe src="/public/Freddy Hernandez Resume 2024.pdf" title="Resume" width="100%" height="600px"></iframe> */}
      <section className='short-intro'>
        <div className='container'>
          <div className='row'>
            <h1><LogoWithoutIcon />ull Stack Developer</h1>
            <p>I build interactive and accessible digital experiences for clients across major industries.</p>
            <div className="col-12 short-intro-img">
              <img src="/images/portfolio graphic.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className='long-intro'>
        
      </section>
    </main>
  );
}

export default App;
