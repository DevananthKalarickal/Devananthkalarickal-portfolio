import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Header from './Components/Header';
import Main from './Components/Main';
import Expertise from './Components/Expertise';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import { app } from './Components/Firebase';




const animationSettings = {
  default: {
    reset: true,
    distance: '40px',
    delay: 400,
    origin: 'top'
  },
  bottomOrigin: {
    reset: true,
    distance: '40px',
    delay: 400,
    origin: 'bottom'
  },
  rightOrigin: {
    reset: true,
    distance: '20px',
    delay: 500,
    origin: 'right'
  }
};

const App = () => {
  useEffect(() => {
    ScrollReveal().reveal('.skll1, .skll3, .nav', animationSettings.default);
    ScrollReveal().reveal('.skll2, .skll4', animationSettings.bottomOrigin);
    ScrollReveal().reveal('.contents');
    ScrollReveal().reveal('.education-timeline, .language-skills, .contents, .project-description', {
      reset: true,
      distance: '50px',
      delay: 200,
      origin: 'bottom'
    });
    ScrollReveal().reveal('.scrollanimationClass-1, .myprofile', animationSettings.rightOrigin);
  }, []);

  return (
    <div>
      <Header />
      <Main />
      <Expertise />
      <Skills />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;