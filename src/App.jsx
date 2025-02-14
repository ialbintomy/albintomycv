
import React from 'react'
import './index.css'
import Navbar from './components/navbar'
import Myname from './components/myname'
import Aboutme from './components/aboutme'
import Contact from './components/contact'
import Skills from './components/skills'
import Skillbox from './components/skillbox'
import Projects from './components/projects'
import Projectbox from './components/projectbox'
import Experience from './components/exprience'
import Expedu from './components/expedu'

const App = () => {
  return (
    <div>
      <Navbar />
      <Myname />
      <Aboutme />
      <Skills skill={{technical:"TECHNICAL",ability:"SKILLS",title:'',about:''}} />
      <Skillbox skills={{title:'CSS3',about:'For stylish and responsive web applications'}} />
      <Skillbox skills={{title:'JAVASCRIPT',about:'Provides life to the websites'}} />
      <Skillbox skills={{title:'REACT',about:'Most popular frontend library '}} />
      <Skillbox skills={{title:'NODE JS',about:'Th javascript runtime built on Chromes V8 engine'}} />
      <Skillbox skills={{title:'GIT',about:'Most popular version control system '}} />
      <Skillbox skills={{title:'PYTHON',about:'Versatile,high level and interpreted programming language '}} />
      <Skillbox skills={{title:'GITHUB',about:'Version control,collaboration and projec management tools'}} />
      <Skillbox skills={{title:'SQL',about:'Structured Query Language '}} />
      <Skillbox skills={{title:'MONGODB',about:'NoSQL,document oriented database'}} />
      <Skillbox skills={{title:'EXPRESS JS',about:'Lightweight,flexible and modular Node.js web framework'}} />
      <Skillbox skills={{title:'C/C++',about:'High level OOP programming languages'}} />
      <Skillbox skills={{title:'MYSQL',about:'SQL based database '}} />
      <Projects />
      <Projectbox project={{title:'WEATHER APP',about:'I developed a responsive weather application using React, HTML, CSS, and JavaScript that provides real-time weather updates for user-specified locations. The app integrates with a third-party weather API to fetch current weather conditions, temperature, humidity, and wind speed. Key features include a dynamic user interface with interactive components, a search bar for location input, and error handling for invalid entries. Designed with a clean and modern UI using CSS Flexbox and media queries for seamless responsiveness across devices. This project demonstrates proficiency in front-end development, API integration, and state management using React Hooks.'}}/>
      <Projectbox project={{title:"TO-DO LIST",about:"Built a dynamic and user-friendly to-do list application using React, HTML, CSS, and JavaScript to help users manage tasks efficiently. The app allows users to add, edit, delete, and mark tasks as completed, with data persistence using local storage. Designed a clean and intuitive interface with CSS Flexbox for layout and React Hooks for state management. Implemented features like task filtering (all, active, completed) and responsive design for optimal usability across devices. This project demonstrates expertise in front-end development, state management, and creating interactive web applications."}}/>
      <Experience />
      <Expedu />
      <Contact />
    </div>
  )
}

export default App