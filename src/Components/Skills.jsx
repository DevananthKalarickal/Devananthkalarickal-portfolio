import React from 'react';


const Skills = () => {


  return (
    
   
    <section className="flex-container">
    <div className="flexed-container">
    <hr />
      <h2 className="scrollanimationClass-1">My Skills</h2>
      <p className="scrollanimationClass-1">    Other than technical skills I'm a good team player and have kind-hearted personality.</p>
        
       
        <div className="language-skills">
            <div className="lang-skill">
                <div className="lang">
                    <img src="assets/python.png" alt="Python" />
                    <h3>Python</h3>
                </div>
                <input type="range" step="20" min="0" max="100" value="60" disabled />
            </div>
            <div className="lang-skill">
                <div className="lang">
                    <img src="assets/html-5.png" alt="HTML" />
                    <h3>HTML</h3>
                </div>
                <input type="range" step="20" min="0" max="100" value="80" disabled />
            </div>
            <div className="lang-skill">
                <div className="lang">
                    <img src="assets/letter-c.png" alt="C" />
                    <h3>C</h3>
                </div>
                <input type="range" step="20" min="0" max="100" value="80" disabled />
            </div>
            <div className="lang-skill">
                <div className="lang">
                    <img src="assets/css-3.png" alt="CSS" />
                    <h3>CSS</h3>
                </div>
                <input type="range" step="20" min="0" max="100" value="80" disabled />
            </div>
            <div className="lang-skill">
                <div className="lang">
                    <img src="assets/js.png" alt="JavaScript" />
                    <h3>JS</h3>
                </div>
                <input type="range" step="20" min="0" max="100" value="60" disabled />
            </div>
            <div className="lang-skill">
                <div className="lang">
                    <img src="assets/sql-server.png" alt="SQL" />
                    <h3>SQL</h3>
                </div>
                <input type="range" step="20" min="0" max="100" value="60" disabled />
            </div>
            <div className="lang-skill">
                <div className="lang">
                    <img src="assets/php.png" alt="PHP" />
                    <h3>Php</h3>
                </div>
                <input type="range" step="20" min="0" max="100" value="40" disabled />
            </div>
            <div className="lang-skill">
                <div className="lang">
                    <img src="assets/horn.png" alt="Flask" />
                    <h3>Flask</h3>
                </div>
                <input type="range" step="20" min="0" max="100" value="40" disabled />
            </div>
        </div>
    </div>
</section>

  );
};

export default Skills;





