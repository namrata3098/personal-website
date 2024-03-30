import './App.css';
import { BsAward , BsCodeSlash , BsFileEarmarkFill , BsGithub , BsArrowDownCircle} from 'react-icons/bs';
import { ImBooks } from 'react-icons/im';
import { FaTrophy , FaLinkedinIn } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import AboutMe from './Pages/About';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import Activities from './Pages/Activities';

function App() {

  return (
    <>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      </head>
      <body>
      <div className="App">
        <div className="App-header">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
        <div className="NavBar">
          <button><a href='#AboutMe' style={{ color: 'black'}}>PROJECTS</a></button>
          <button><a href='#Resume' style={{ color: 'black'}}>RESUME</a></button>
          <button><a href='#Activities' style={{ color: 'black'}}>AWARDS</a></button>
        </div>


        <div className='info'>
        <div className="image">
          <div className='imageCard'></div>
        </div>
        <div className="About">
          <p style={{ fontSize : '80px', fontWeight: '300'}} className='name'>Namrata Prabhu</p>
          <p style={{ fontSize : '60px', fontWeight: '100'}} className='title'>Software Developer </p>
          <div className="Socialmedia">
          <a style={{ marginLeft: '0%', color:'black'}} href='https://github.com/namrata3098'><BsGithub size={40}/></a>
          <a style={{color:'black'}} href='namnp917@gmail.com'><BiLogoGmail size={40}/></a>
          <a style={{color:'black'}} href='https://www.linkedin.com/in/namrata-n-8b87a31a4/'><FaLinkedinIn size={40}/></a>
          </div>
        </div>

        </div>   
        <div style={{ display: 'flex' , justifyContent: 'center' , paddingTop: '5%', height:'200px'}}>
        <a href='#AboutMe'><BsArrowDownCircle size={60} color='black' className='down-arrow'></BsArrowDownCircle></a>
        </div>
        </div>
        <div id='AboutMe'>
        <AboutMe />
        </div>
        <div id="Resume">
        <Resume />
        </div>
        <div id="Activities">
        <Activities />
        </div>
        </div>

      </body>
    </>
    
  );
}

export default App;
