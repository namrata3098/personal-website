import './App.css';
import Projects from './Pages/Project';
import Resume from './Pages/Resume';
import Activities from './Pages/Activities';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {

  const downloadPDF = () => {
    const pdfUrl = 'https://drive.google.com/file/d/1L_Y8DW2l5IaEOubYQKoheiPXgG4jjFBn/view?usp=sharing';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <a href='#Home' style={{ color: 'black'}}>HOME</a>
          <a href='#About' style={{ color: 'black'}}>ABOUT ME</a>
          <a href='#Resume' style={{ color: 'black'}}>RESUME</a>
          <a href='#Projects' style={{ color: 'black'}}>PROJECTS</a>
          <a href='#Acheivements' style={{ color: 'black'}}>ACHEIVEMENTS</a>
          </div>
          <div className="ResumeLinks">
            <button style={{ width: '90%'}} onClick={downloadPDF}> RESUME </button>
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
