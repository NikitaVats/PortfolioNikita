import React from "react";
import "./Social.css";
const Social = () => {
  return (
    <div className="social">
      <div className="social-text">
        <h2>Email</h2>
        <p>vatsnikita953@gmail.com</p>
      </div>
      <div className="social-text">
        <h2>Address</h2>
        <p>Bangalore</p>
      </div>
      <div>
        <h1>Social</h1>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/nikitavats1/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
              alt="linked-in"
            />
          </a>
          <a href="https://github.com/NikitaVats/NikitaVats">
            <img
              src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"
              alt="github"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
