import React, { useState, useEffect } from 'react';

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setSidebarVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header>
        <nav>
          <div className="nav" style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <div className="logo">
              <h1>my<span>Portfolio.</span></h1>
            </div>
            <ul>
              <li className="hidden-class"><a href="#">Home</a></li>
              <li className="hidden-class"><a href="#footer">About</a></li>
              <li className="hidden-class"><a href="#footer">Contact</a></li>
              <li className="hidden-class">
               <a>
               <button className="resume" onClick={() => window.open('/assets/x.pdf')}>
  Resume
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="#1260cc"
    aria-label="Download Resume"
  >
    <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
  </svg>
</button>

                </a>
              </li>
              <li id="menu" onClick={toggleSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#063f8e" aria-label="Open Menu">
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </li>
            </ul>
          </div>

          <ol id="sidebar" style={{ display: sidebarVisible ? 'block' : 'none' }}>
            <svg onClick={toggleSidebar} className="close" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#0b2e5f" aria-label="Close Menu">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
            <li><a href="#">Home</a></li>
            <li><a href="#projects">About</a></li>
            <li><a href="#">Contact</a></li>
            <li>
              <a id="resume" href="assets/Akshay-Babu-K-FlowCV-Resume-20240714.pdf" download="Akshay-Babu-K-CV-Resume.pdf">
                <button className="resume">
                  Resume
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1260cc" aria-label="Download Resume">
                    <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                  </svg>
                </button>
              </a>
            </li>
          </ol>
        </nav>
      </header>
    </>
  );
};

export default Header;
