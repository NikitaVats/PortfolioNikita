import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  const sentenceList = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  const [curr, setCurr] = useState(0);

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < sentenceList[curr].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + sentenceList[curr][index]);
        setIndex(index + 1);
      }, 100); // Typing speed

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayedText(""); // Clear text
        setCurr(curr <= 1 ? curr + 1 : 0);
        setIndex(0); // Restart
      }, 1000); // Delay before restart
    }
  }, [index]);
  return (
    <motion.div
      initial={{ y: -100, opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      }}
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      className="main-home"
    >
      <div className="home">
        <div className="home-text">
          <h1>
            Hi, I am Nikita Vats
            <br />
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                //   delay: index * 0.1, // Delay each letter
                duration: 0.2,
                //   repeat: Infinity, // Infinite loop
                //   repeatDelay: 2, // Pause before restarting
              }}
              style={{
                color: "red",
              }}
            >
              {displayedText}
            </motion.span>
          </h1>
          I am a web developer. I am currently working at Visa as a Sr. Software
          Engineer.
        </div>
        <div className="home-link">
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
        <div className="home-resume">
          <button className="button">
            <a href="https://drive.google.com/file/d/1ONNHAA1eNux1YE9ZFXR8ik_AXT8ZKyUM/view?usp=sharing">
              Resume
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
