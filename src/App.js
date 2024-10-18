import React from 'react';
import './App.css';
import { ReactComponent as Logo } from './freddy-logo.svg';
import { HashRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


function App() {
  return (
    <main>
      <HashRouter>
        <header className="header">
          <nav className='container'>
            <ul className='row'>
              <li className="col-lg-6 logo-wrapper"><a href="/"><Logo /></a></li>
              <div className="col-lg-6 header-links-wrapper">
                <li><Link to="/">Projects</Link></li>
                <li><a href="https://docs.google.com/document/d/e/2PACX-1vRWG4_jLWMsjLZmNRjULr_7-QE6Sk6P-Oxu7LUI5AG83c1tCQiYEHPD2eqKnmnrvNJrtirYV6eXUcO5/pub">Resume</a></li>
                <li><a href="mailto:fhernand0705@gmail.com" target="_blank" rel="noreferrer">Contact</a></li>
              </div>
            </ul>
          </nav>
        </header>
      </HashRouter>
      {/* <iframe src="/public/Freddy Hernandez Resume 2024.pdf" title="Resume" width="100%" height="600px"></iframe> */}
      <section className='short-intro'>
        <div className='container'>
          <div className='row'>
            <h1>Full Stack Developer</h1>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
