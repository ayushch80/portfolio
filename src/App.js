import './App.css';
import Picture from './nigga.jpg';
import ProjStockfish from './stockfish-toolbox.png';
import ProjCalc from './calculator.png';
import { useState, useEffect } from 'react';

/* SVG Icons */
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";


function App() {

  const [currentIndex, setCurrentIndex] = useState(0);

  function handleCurrentIndexChange(index) {
    setCurrentIndex(index);
  }

  const buttons = [
    'About Me',
    'Projects',
    'Skills',
    'Contact Me'
  ]

  const content = [
    <AboutMe />,
    <Projects />,
    <Skills />,
    <ContactMe />
  ]

  return (
    <div className="App">
      <div className="image"><img src={Picture} alt="pfp" className="pfp" /></div>
      <div className="details">
        {content[currentIndex]}
      </div>
      <div className="buttons">
        {
          buttons.map((button, index) => (
            <a
              className={`${index === currentIndex ? "active-button" : "button"}`}
              key={index}
              onClick={() => { handleCurrentIndexChange(index) }}
            >
              {button}
            </a>
          ))
        }
      </div>
    </div>
  );
}


function AboutMe() {
  return (
    <div className="about-me handjet-regular">
      Hello, my name is <span className='name'>Ayush Choudhary</span>, and I'm a first-year student at <span className="bold">SRMIST</span> who passionate about coding and keen to learn new technologies.
    </div>
  )
}


function Projects() {

  const projects = [
    {
      name: "Stockfish Toolbox",
      url: "https://github.com/ayushch80/stockfish-toolbox",
      descripton: "This web application serves as the web interface for the Stockfish chess engine. It is capable of identifying the optimal movements for the specified FEN. This application employs web technologies such as Vite, HTML, CSS, and JS.",
      image: ProjStockfish,
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Chess Programming",
        "Stockfish",
        "Vite"
      ]
    },
    {
      name: "Calculator",
      url: "https://github.com/ayushch80/calculator",
      descripton: "React.JS and CSS were employed to construct this straightforward calculator. It is capable of performing fundamental computations and detecting any errors that may arise during the data processing process.",
      image: ProjCalc,
      tags: [
        "React.JS",
        "CSS",
        "JavaScript"
      ]
    }
  ]

  const [currentProjIndex, setCurrentProjIndex] = useState(0);

  function changeIndex(change) {
    if (currentProjIndex+change > -1 && currentProjIndex+change < projects.length) {
      setCurrentProjIndex(currentProjIndex+change);
    }
  }
  
  return (
    <div className="projects">
      <div className='proj-content'>
        <div className='proj-name'>
          {projects[currentProjIndex].name}
        </div>
        <div className='proj-details'>
          <div className='proj-link'>(<a className="link" href={projects[currentProjIndex].url}>{projects[currentProjIndex].url}</a>)</div>
          <div className='proj-description'>{projects[currentProjIndex].descripton}</div>
          <div className='proj-tags'>
            {
              projects[currentProjIndex].tags.map((tag, index) => (
                <a
                  key={index}
                  className='proj-tag'
                >
                  {tag}
                </a>
              ))
            }
          </div>
          <div className='proj-image'>
            <img src={projects[currentProjIndex].image} alt="proj-image" className="proj-image-tag" />
          </div>
        </div>
      </div>
      <div className='proj-buttons'>
        <FaCircleArrowLeft className='proj-btn-left' onClick={() => {changeIndex(-1)}} />
        <FaCircleArrowRight className='proj-btn-right' onClick={() => {changeIndex(+1)}} />
      </div>
    </div>
  )
}

function Skills() {

  const reactText = [
    {
      content: "<React.JS />",
      class: "skill-html"
    },
    {
      content: "React.JS",
      class: "skill-css"
    },
    {
      content: "React.JS",
      class: "skill-js"
    }]
  const [currentReactTextIndex, setReactTextIndex] = useState(0);
  const [currentReactText, setCurrentReactText] = useState(reactText[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setReactTextIndex((prevIndex) => (prevIndex + 1) % reactText.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentReactText(reactText[currentReactTextIndex]);
  }, [currentReactTextIndex]);

  return (
    <div className="skills">
      <span id="skill-html">&lt;HTML/&gt;</span>
      <span id="skill-css">CSS</span>
      <span id="skill-js">JavaScript</span>
      <span id="skills-react" className={currentReactText['class']}>{currentReactText.content}</span>
    </div>
  )
}

function ContactMe() {
  return (
    <div className="contact-me">

      <span id="contact-phone" className="flex">
        <IoIosCall className='icon' />
        +91 876xx xxxxx
      </span>

      <span id="contact-mail" className="flex">
        <MdOutlineEmail className='icon' />
        <a href="mailto:ayushch80@gmail.com" className="contact-link">
          ayushch80@gmail.com
        </a>
      </span>

      <span id="contact-github" className="flex">
        <FaGithub className='icon' />
        <a href="https://github.com/ayushch80" className="contact-link">
          @ayushch80
        </a>
      </span>

      <span id="contact-instagram" className="flex">
        <FaInstagram className='icon' />
        <a href="https://instagram.com/ayushch80" className="contact-link">
          @ayushch80
        </a>
      </span>
    </div>
  )
}

export default App;
