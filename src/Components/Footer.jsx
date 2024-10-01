import React from 'react';

const Footer = () => {
  const handleEmailClick = () => {
    const email = 'Devananthkalarickal85@gmail.com';
    const subject = 'Hello';
    const body = 'I am interested in your services.';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const tempLink = document.createElement('a');
    tempLink.href = mailtoLink;
    tempLink.style.display = 'none';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  };

  return (
    <footer>
      <div className="center-container" id="footer">
        <h4>Get in Touch</h4>
        <div className="flex-container">
          <div>
            <h3>For Hiring me or Collaborate</h3>
            <div className="send" id="sendEmailDiv" onClick={handleEmailClick}>
              <p>Send me email</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
              </svg>
            </div>
            <div className="link-icons">
              <a
                href="https://www.linkedin.com/in/devananth-kalarickal/"



                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/Devananthk85"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="details">
            <p>
              Devananth Kalarickal<i className="fa-solid fa-user"></i>
            </p>
            <p>
              +91 8590187029<i className="fa-solid fa-phone"></i>
            </p>
            <p>
              Devananthkalarickal85@gmail.com<i className="fa-solid fa-envelope"></i>
            </p>
            <p>
              Kothamangalam, Ernakulam, Kerala, India<i className="fa-solid fa-address-book"></i>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
