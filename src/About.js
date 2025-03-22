import React from "react";
import { motion } from "framer-motion";
import "./About.css";
const About = () => {
  const tools = [
    {
      name: "Javascript",
      logo: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
    },
    {
      name: "React",
      logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    },
    {
      name: "Typescript",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
    },
    {
      name: "Node.js",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
    },
    {
      name: "Next.js",
      logo: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
    },
    {
      name: "CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
    },
    {
      name: "Redux",
      logo: "https://raw.githubusercontent.com/reactjs/redux/24bab8f05987542ffd186c19400a80f12f717492/logo/logo.png",
    },
    {
      name: "Bootstrap",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
    },
    {
      name: "Tailwind CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png",
    },
    {
      name: "Postman",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TB9d5YXwtKhv4NWbpeTBVveYvcxu9gMJng&s",
    },
    {
      name: "Express",
      logo: "https://logowik.com/content/uploads/images/express-js1720895488.logowik.com.webp",
    },
    {
      name: "Java",
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-pack-logos-icons-1174953.png?f=webp",
    },
  ];
  return (
    <div className="about">
      <h1>About Me</h1>
      <div>
        <h2 style={{ display: "flex", justifyContent: "flex-start" }}>
          A bit about me
        </h2>
        <p>
          I am a passionate Full Stack Developer with expertise in React.js,
          Node.js, JavaScript, TypeScript, and Spring Boot. With four years of
          experience, she has built and deployed scalable applications, handling
          everything from front-end UI/UX to back-end architecture and cloud
          infrastructure. Currently working as a Senior Software Engineer at
          Visa,I have a keen eye for detail and a strong problem-solving
          mindset.
        </p>
      </div>
      <div>
        <h2>Technologies And Tools</h2>
        <p>
          Using a combination of cutting-edge technologies and reliable
          open-source software I build user-focused, performant apps and
          websites for smartphones, tablets, and desktops.
        </p>
      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "20vh" }}
        transition={{
          duration: 2,
          ease: "linear",
          repeat: 3,
          repeatType: "reverse",
        }}
        className="about-tools"
      >
        {tools.map((tool, index) => (
          <div className="tool">
            <img src={tool.logo} alt={tool.name} />
            <h4>{tool.name}</h4>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
