import React from 'react';
import ScrollReveal from 'scrollreveal'; // Import ScrollReveal if using npm

const Main = () => {
  const moveDiv = (div) => {
    // Use ScrollReveal to handle animations
    ScrollReveal().reveal('.skll1,.skll3,.nav', {
      reset: true,
      distance: '40px',
      delay: 400,
      origin: 'top'
    });
    ScrollReveal().reveal('.skll2,.skll4', {
      reset: true,
      distance: '40px',
      delay: 400,
      origin: 'bottom'
    });
    ScrollReveal().reveal('.contents');

    ScrollReveal().reveal('.education-timeline,.language-skills,.contents,.project-description', {
      reset: true,
      distance: '50px',
      delay: 200,
      origin: 'bottom'
    });

    ScrollReveal().reveal('.scrollanimationClass-1,.myprofile', {
      reset: true,
      distance: '20px',
      delay: 500,
      origin: 'right'
    });

    // Replace 'div' with 'section' which is passed to the function
    if (div === 'project') {
      document.getElementById('projects').scrollIntoView({
        behavior: 'smooth'
      });
    } else if (div === 'contact') {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main>
      <div className="bubble-bg">
        <div className="circle circle1"></div>
        <div className="circle circle2">
          <div className="rocket"><img src="assets/ufo.png" alt="UFO" /></div>
        </div>
        <div className="circle circle3">
          <div className="pits"></div>
        </div>
        <div className="circle circle4"></div>
      </div>
      
      <div className="contents">
        <h1>I'm Devananth<br />a <span>Web Developer</span> &<br />an <span>Innovator</span></h1>
        <div className="btns">
        <button><a href="#footer" style={{ textDecoration: 'none', color: 'inherit' }}>Contact Me</a></button>
         
         <button><a href="#projects" style={{ textDecoration: 'none', color: 'inherit' }}>Projects</a></button>
         
        </div>
      </div>
    </main>
  );
};

export default Main;
