import React from "react";
import Logo from "../assets/logo.jpg";
import { FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiJava,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiJest,
  SiGit,
  SiOracle,
  SiMysql,
  SiCsharp,
  SiSelenium
} from "react-icons/si";

function About() {
  return (
    <div className="about__container">
      <h2 className="title">About me</h2>
      <div className="info">
        <div className="image">
          <img src={Logo} alt="me" />
        </div>
        <div className="text">
          <p>
            🎓 I am graduated from Mobile Application Design and Development diploma course, Algonquin college in April 2019.
          </p>
          <p>
            I have pursued Masters in Computer Application, LDRP instititue of Technology and research in India and graduated in April 2016 .
          </p>
        
          <p>
            As for my future, I am seeking to work as a Full Stack Developer |
            Backend Developer | Software Developer | Database Developer with a diverse team.
          </p>
        </div>
      </div>
      <div className="skills">
        <h2 className="title">Skills</h2>
        <div className="skills-section">
          <div className="skills-grid">
            <p className="skill">
              <span>
                <FaReact />
              </span>
              ReactJs
            </p>
            <p className="skill">
              <span>
                <FaNodeJs />
              </span>
              NodeJs
            </p>
            <p className="skill">
              <span>
                <SiTypescript />
              </span>
              Typescript
            </p>
            <p className="skill">
              <span>
                <SiJavascript />
              </span>
              Javascript
            </p>
            <p className="skill">
              <span>
                <SiJest />
              </span>
              Jest
            </p>
            <p className="skill">
              <span>
                <FaSass />
              </span>
              Sass/SCSS
            </p>
            <p className="skill">
              <span>
                <SiGit />
              </span>
              Version Control
            </p>
            <p className="skill">
              <span>
                <SiMongodb />
              </span>
              MongoDB
            </p>
            <p className="skill">
              <span>
                <SiPostgresql />
              </span>
              Postgres
            </p>
            <p className="skill">
              <span>
                <SiJava />
              </span>
              Java
            </p>
            <p className="skill">
              <span>
                <SiPython />
              </span>
              Python
            </p>
            <p className="skill">
              <span>
                <SiSelenium />
              </span>
              Selenium
            </p>
            <p className="skill">
              <span>
                <SiOracle />
              </span>
              Oracle
            </p>
            <p className="skill">
              <span>
                <SiMysql />
              </span>
              MySQL
            </p>
            <p className="skill">
              <span>
                <SiCsharp />
              </span>
              C#
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
