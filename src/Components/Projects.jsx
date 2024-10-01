import React, { useState, useEffect } from 'react';

function Projects() {
  const [count, setCount] = useState(1);
  const [projectIndex, setProjectIndex] = useState(0);
  const [projects] = useState([
    {
      name: 'Trackmate',
      shortDesc: 'A Bluetooth-powered app for attendance tracking',
      desc:  'Trackmate is an innovative application developed by a team of four, designed to streamline attendance management. Utilizing Bluetooth technology, it connects seamlessly with smartphones, making it easy to track and record attendance in real-time. Built using Kotlin for mobile functionality, Express.JS and JavaScript for the backend, and JSON DB for data storage, Trackmate ensures efficient and automated attendance tracking...',
      pictures: ['./assets/project1/Picture1.png', './assets/project1/Picture2.png'],
    },
    {
      name: 'AI Tutor',
      shortDesc: 'An AI-powered platform for immersive AWS learning',
      desc: 'AI Tutor is an advanced educational platform designed to enhance AWS learning experiences through artificial intelligence. By integrating user prompts with a GPT model, the platform provides personalized explanations and summaries. It incorporates visuals from the Pexels API and voice assistance with subtitles powered by AWS, creating an engaging and comprehensive learning environment...',
      pictures: ['./assets/project3/Picture1.png', './assets/project3/Picture2.png'],
    },
    

    {
      name: 'MovieChat Bot',
      shortDesc: 'A movie chatbot powered by DialoGPT and Flask for seamless user interaction',
      desc: 'MovieChat Bot is an interactive platform designed to enhance movie-related discussions using advanced AI models from Hugging Face. By integrating DialoGPT models, the bot provides conversational movie recommendations and insights. The use of Flask to develop a RESTful API simplifies communication between the chatbot and web applications, ensuring smooth integration and effortless user interactions...',
      pictures: ['./assets/project2/Picture1.png', './assets/project2/Picture2.png'],
    },
 


    
  ]);

  const currentProject = projects[projectIndex];

  useEffect(() => {
    if (currentProject) {
      setCount(1);
    }
  }, [projectIndex]);

  const handleDotClick = (index) => {
    setProjectIndex(index);
  };

  const handleNext = () => {
    if (count < currentProject.pictures.length) {
      setCount(count + 1);
    } else {
      setCount(1); // reset to the first image
    }
  };
  
  const handlePrev = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(currentProject.pictures.length); // reset to the last image
    }
  };
  return (
   
      <section>
        <hr />
        <h2 id="projects" className="scrollanimationClass-1">My Projects</h2>
        <p className="scrollanimationClass-1">
          These are my college projects; also, I have done many small projects too.
        </p>
        <div className="projects">
          <div className="dots">
            <div
              className={`dot1 ${projectIndex === 0 ? 'active' : ''}`}
              onClick={() => handleDotClick(0)}
              style={{ backgroundColor: projectIndex === 0 ? '#1260cc' : 'lightgray' }}
            >
              1
            </div>
            <div
              className={`dot2 ${projectIndex === 1 ? 'active' : ''}`}
              onClick={() => handleDotClick(1)}
              style={{ backgroundColor: projectIndex === 1 ? '#1260cc' : 'lightgray' }}
            >
              2
            </div>
            <div
              className={`dot3 ${projectIndex === 2 ? 'active' : ''}`}
              onClick={() => handleDotClick(2)}
              style={{ backgroundColor: projectIndex === 2 ? '#1260cc' : 'lightgray' }}
            >
              3
            </div>
          </div>
          <div className="project-container">
            <div className="project-details">
              <h1 className="project-name">{currentProject.name}</h1>
              <p className="project-short-description">{currentProject.shortDesc}</p>
              <p className="project-description">{currentProject.desc}</p>
            </div>
            <div className="project-photos">
            <div className="pictures">
    <img
        className="pic1"
        src={currentProject.pictures[count - 1]}
        alt="photo will be loaded"
        style={{ width: '120%', maxWidth: '700px', height: 'auto', margin: '5px' }}
    />
    <img
        className="pic2"
        src={currentProject.pictures[count]}
        alt="photo will be loaded"
        style={{ width: '120%', maxWidth: '700px', height: 'auto', margin: '5px' }}
    />
</div>

              <div className="sliders dots">
              <div
  className="previous"
  onClick={handlePrev}
  style={{ color: 'white', backgroundColor: '#1260cc', marginTop: '30px' }}
>
  &lt;
</div>
<div
  className="next"
  onClick={handleNext}
  style={{ color: 'white', backgroundColor: '#1260cc', marginTop: '30px' }}
>
  &gt;
</div>

              </div>
            </div>
          </div>
        </div>
        <div className="myprofile">
          <div className="myprofile-img">
            <img src="assets/dev.png" alt="" />
            <h3>Devananth Kalarickal</h3>
          </div>
          <p>
          💻 Enthusiastic CSE student 🤓 who loves coding, developing, and solving problems...
          </p>
        </div>
      </section>
    );
  }
  
  export default Projects;

