import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const Portfolio = () => {
  const projects = [
    { title: "Project 1", description: "Description of Project 1" },
    { title: "Project 2", description: "Description of Project 2" },
    // Add more projects as needed
  ];

  const contactLinks = [
    { label: "Email", link: "mailto:arunkumare.dev@gmail.com.com" },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/arun-kumar-e-1a6b421a6/",
    },
    { label: "GitHub", link: "https://github.com/StarkBannerman" },
    // Add more contact links as needed
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <header style={{ textAlign: "center" }}>
        <h1 style={{ margin: "0", fontSize: "2em" }}>Arun Kumar</h1>
        <p style={{ color: "#777" }}>Web Developer</p>
      </header>

      <section style={{ marginTop: "40px" }}>
        <h2>About Me</h2>
        <p>
          Welcome to my portfolio! I am a passionate web developer with
          experience in building modern and responsive web applications.
        </p>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            style={{
              marginBottom: "40px",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
            }}
          >
            <h3 style={{ margin: "10px 0" }}>{project.title}</h3>
            <p style={{ color: "#555" }}>{project.description}</p>
          </motion.div>
        ))}
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>Contact Me</h2>
        {contactLinks.map((link, index) => (
          <a
            key={index}
            href={link.link}
            style={{ display: "block", marginBottom: "10px", color: "#333" }}
          >
            {link.label}
          </a>
        ))}
      </section>

      <footer style={{ marginTop: "40px", textAlign: "center", color: "#888" }}>
        <p>&copy; 2024 Arun. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
