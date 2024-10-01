import React from 'react';

const Expertise = () => {
  return (
    <section>
      <hr />
      <h2 className="scrollanimationClass-1">My Expertise</h2>
      <p className="scrollanimationClass-1"></p>
      <div className="expertise">
        <div className="skill skll1">
          <img className="imgskill" src="assets/donut.png" alt="UI/UX Design" />
          <h3>UI/UX Design</h3>
          <p>Pixel perfect and mobile design, aesthetic, interactive animation.</p>
        </div>
        <div className="skill skll2">
          <img className="imgskill" src="assets/banana.png" alt="Full-stack Development" />
          <h3>Full-stack Development</h3>
          <p>Delivers a complete final product as per user needs.</p>
        </div>
        <div className="skill skll3">
          <img className="imgskill" src="assets/construction.png" alt="Project Management" />
          <h3>Project Management</h3>
          <p>Delivers a high quality product on time, open communication with client.</p>
        </div>
        <div className="skill skll4">
          <img className="imgskill" src="assets/robotic-arm.png" alt="Machine Learning" />
          <h3>Machine Learning</h3>
          <p>Solve problems using machine learning models, real time.</p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
