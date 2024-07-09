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

        
          <div style={{ width: '70%', height: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
          <a href='#AboutMe' style={{ color: 'black'}}>HOME</a>
          <a href='#AboutMe' style={{ color: 'black'}}>ABOUT ME</a>
          <a href='#AboutMe' style={{ color: 'black'}}>PROJECTS</a>
          <a href='#Resume' style={{ color: 'black'}}>RESUME</a>
          <a href='#Activities' style={{ color: 'black'}}>ACHEIVEMENTS</a>
          </div>


          <div style={{ width: '30%', height: '100%'}}>
            <button> RESUME </button>
          </div>
          


          </div>
          

          {/* // HOME */}
          <div id='Home'>
            <Home/>
          </div>
    
           {/* // ABOUT */}
           <div id='About'>
              {/* <div className="About">
                <p style={{ fontSize : '80px', fontWeight: '300'}} className='name'>Namrata Prabhu</p>
                <p style={{ fontSize : '60px', fontWeight: '100'}} className='title'>Software Developer </p>
                <div className="Socialmedia">
                <a style={{ marginLeft: '0%', color:'black'}} href='https://github.com/namrata3098'><BsGithub size={40}/></a>
                <a style={{color:'black'}} href='namnp917@gmail.com'><BiLogoGmail size={40}/></a>
                <a style={{color:'black'}} href='https://www.linkedin.com/in/namrata-n-8b87a31a4/'><FaLinkedinIn size={40}/></a>
                </div>
              </div> */}
              <About/>
          </div>  

          {/* // arrow  */}
          <div style={{ display: 'flex' , justifyContent: 'center' , paddingTop: '5%', height:'200px'}}>
            <a href='#'><BsArrowDownCircle size={60} color='black' className='down-arrow'></BsArrowDownCircle></a>
          </div>
        

          <div id='Projects'>
          <Projects />
          </div>

          <div id="Resume">
          <Resume />
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
