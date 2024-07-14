import './App.css';
import { BsAward , BsCodeSlash , BsFileEarmarkFill , BsGithub , BsArrowDownCircle} from 'react-icons/bs';
import { ImBooks } from 'react-icons/im';
import { FaTrophy , FaLinkedinIn } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import Projects from './Pages/Project';
import Resume from './Pages/Resume';
import Activities from './Pages/Activities';
import Home from './Pages/Home';
import About from './Pages/About';
import { blue } from '@mui/material/colors';

function App() {

  return (
    <>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      </head>
      <body>
        <div className="App-header">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
          
          {/* //NavBar */}
          <div className="NavBar">    
          <div className="NavbarLinks">
          <a href='#AboutMe' style={{ color: 'black'}}>HOME</a>
          <a href='#AboutMe' style={{ color: 'black'}}>ABOUT ME</a>
          <a href='#AboutMe' style={{ color: 'black'}}>PROJECTS</a>
          <a href='#Resume' style={{ color: 'black'}}>RESUME</a>
          <a href='#Activities' style={{ color: 'black'}}>ACHEIVEMENTS</a>
          </div>
          <div className="ResumeLinks">
            <button style={{ width: '90%'}}> RESUME </button>
          </div>
          </div>
          

          {/* // HOME */}
          <div id='Home'>
            <Home/>
          </div>
    
           {/* // ABOUT */}
           <div id='About'>
              <About/>
          </div>  

          {/* // arrow  */}
          
        


          <div id="Resume">
          <Resume />
          </div>

          
          <div id='Projects'>
          <Projects />
          </div>
          

          <div id="Acheivements">
          <Activities />
          </div>

        </div>

      </body>
    </>
    
  );
}

export default App;
