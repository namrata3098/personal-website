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
    <div className="App">
      <div className="App-header">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
      <div className="NavBar">
        <p onHo><a href='#AboutMe' style={{ color: 'white'}}>ABOUT</a></p>
        <p><a href='#Resume' style={{ color: 'white'}}>RESUME</a></p>
        <p><a href='#Projects' style={{ color: 'white'}}>PROJECTS</a></p>
        <p><a href='#Activities' style={{ color: 'white'}}>ACHIEVEMENTS</a></p>
      </div>

      <div className="About">
        <p style={{ fontSize : '60px'}}>Namrata Narayana Prabhu</p>
        <p>Software Engineer </p>
        <div className="Socialmedia">
        <a style={{ marginLeft: '0%', color:'white'}} href='https://github.com/namrata3098'><BsGithub /></a>
        <a style={{color:'white'}} href='namnp917@gmail.com'><BiLogoGmail /></a>
        <a style={{color:'white'}} href='https://www.linkedin.com/in/namrata-n-8b87a31a4/'><FaLinkedinIn /></a>
        </div>
      </div>
      <br></br>

      <div className="Highlight">
        <div className="Highlight-divs">
           <BsAward size={50} color='black'/>
           <p> 3 </p>
           <p style={{ marginTop : '-6%'}}> Certifications</p>
        </div>
        <div className="Highlight-divs">
           <BsFileEarmarkFill size={50} color='black'/>
           <p> 10 +</p>
           <p style={{ marginTop : '-6%'}}> Projects</p>
        </div>
        <div className="Highlight-divs">
           <FaTrophy size={50} color='black'/>
           <p> 3 </p>
           <p style={{ marginTop : '-6%'}}> Awards </p>
        </div>
        <div className="Highlight-divs">
           < BsCodeSlash size={50} color='black'/>
           <p> 1000+ </p>
           <p style={{ marginTop : '-6%'}}> Coding Hours </p>
        </div>
        <div className="Highlight-divs">
           <ImBooks size={50} color='black'></ImBooks>
           <p> 100 + </p>
           <p style={{ marginTop : '-6%'}}> Books Read</p>
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
      <div id="Projects">
      <Projects />
      </div>
      <div id="Activities">
      <Activities />
      </div>
      </div>
  );
}

export default App;
