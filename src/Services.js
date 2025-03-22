import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="services">
      <h1>Services</h1>
      <h2>What I provide</h2>
      <div className="services-offerings">
        <div className="service">
          <h3>Full-Stack Development</h3>
          <img
            src="https://www.gyansetu.in/wp-content/uploads/2024/02/What-is-Full-stack-development-and-How-to-become-Full-Stack-Developer-810x4301_1.webp"
            alt="full-stack"
          />
          <p>
            As a Full Stack Developer, I offer end-to-end development solutions,
            handling both the front-end and back-end to create seamless,
            high-performance applications. From designing intuitive user
            interfaces to building scalable server-side architectures, I ensure
            robust, secure, and efficient software solutions tailored to your
            needs.
          </p>
        </div>
        <div className="service">
          <h3>Frontend Development</h3>
          <img
            src="https://e7.pngegg.com/pngimages/876/605/png-clipart-front-end-web-development-web-design-front-and-back-ends-web-developer-web-design-web-design-text-thumbnail.png"
            alt="frontend"
          />
          <p>
            I specialize in crafting responsive, visually appealing, and
            user-friendly web applications using React.js, Next.js, JavaScript,
            TypeScript, and Tailwind CSS. With a focus on clean UI/UX, I ensure
            that your website or app delivers a smooth and engaging experience
            across all devices.
          </p>
        </div>
        <div className="service">
          <h3>Backend Development</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqMZazPDdtv4daW_lTqY8cZ1QKKoWqm1eARA&s"
            alt="backend"
          />
          <p>
            I develop scalable and secure back-end solutions using Node.js,
            Spring Boot, PostgreSQL, MySQL, and MongoDB. Whether it’s API
            development, database management, or cloud integration, I build
            efficient server-side logic to power high-performance applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
