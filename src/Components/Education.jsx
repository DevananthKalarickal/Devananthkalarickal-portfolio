import React, { useEffect } from 'react';

const Education = () => {
  useEffect(() => {
    const animateBoxes = document.querySelectorAll('.animateBox');
    
    const handleScroll = () => {
      animateBoxes.forEach(box => {
        const boxRect = box.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (boxRect.top < viewportHeight / 2 && boxRect.bottom > viewportHeight / 2) {
          box.classList.add('grow');
        } else {
          box.classList.remove('grow');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="flexed-container">
      <hr />
      <h2 className="scrollanimationClass-1">My Education</h2>
      <div className="education-timeline">
        <div className="timeline">

          <div className="timeline-dates">
            <div className="timeline-beads"></div>
            <div className="dates animateBox">
              <h4>2020-2024</h4>
              <p>
                BTech CSE<br />
                Mar Baselios Institute of Technology and Science (MBITS) <br />Kothamangalam
                
              </p>
            </div>
          </div>

          <div className="timeline-dates">
            <div className="timeline-beads"></div>
            <div className="dates animateBox">
              <h4>2018-2020</h4>
              <p>
                Higher Secondary Computer Science (CS)<br />
               
                SNDP HSS ADIMALI<br />

Adimali

              </p>
            </div>
          </div>

          <div className="timeline-dates">
            <div className="timeline-beads"></div>
            <div className="dates animateBox">
              <h4>2015-2018</h4>
              <p>
                High School<br />
                CARMEL MATHA HIGH SCHOOL<br/>

Mankadavu,kerala
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Education;
