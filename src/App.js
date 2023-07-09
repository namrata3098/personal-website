import logo from './logo.svg';
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
        <a>HOME</a>
        <a>ABOUT</a>
        <a>RESUME</a>
        <a>PROJECTS</a>
        <a>ACHIEVEMENTS</a>
        <a>CONTACT</a>
      </div>

      <div className="About">
        <p style={{ fontSize : '60px'}}>Namrata Narayana Prabhu</p>
        <p>Software Engineer </p>
        <div className="Socialmedia">
        <a style={{ marginLeft: '0%'}} href=''><BsGithub /></a>
        <a><BiLogoGmail /></a>
        <a><FaLinkedinIn /></a>
        </div>
      </div>

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
       
      <div style={{ display: 'flex' , justifyContent: 'center' , paddingTop: '7%'}}>
      <button style={{ border: 'none' , background: 'transparent'}}><BsArrowDownCircle size={60} color='white'></BsArrowDownCircle></button>
      </div>
      </div>
      <AboutMe/>
      <Resume/>
      <Projects/>
      <Activities/>
      </div>
  );
}

export default App;
