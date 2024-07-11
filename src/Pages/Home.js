import {BsArrowDownCircle} from 'react-icons/bs';
import { useEffect } from 'react';
import '../Style/Home.css';
import { BsGithub} from 'react-icons/bs';
import { FaTrophy , FaLinkedinIn } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

function Home() {

    useEffect(() => {
        const rows = [1, 2, 3, 4];


        rows.forEach((count, index) => {
            let row = document.querySelector(`.row-${count}`);
            row.innerHTML = '';
            row.style.padding = '6%';
            row.style.display = 'flex';
            row.style.justifyContent = 'space-evenly';
            for (let i = 0; i < count; i++) {
              let hex = document.createElement('div');
              hex.classList.add('hexagon');
              row.appendChild(hex);
            }
          });
    }, []);


    return (
        <div  className="Home">
            
            <div className='Homecontent'>
                <div className='rightSide'>

                <div id="manyHex" class="many">
                    <div class="hex-row row-1"></div>
                    <div class="hex-row row-2"></div>
                    <div class="hex-row row-3"></div>
                    <div class="hex-row row-4"></div>
                    <div class="hex-row row-5"></div>
                </div>

                <div className='phoneonly'>
                <div className='phoneonly-1'>
                    <div class="hexagon mobile-hex"></div>
                </div>
                <div className='phoneonly-2'>
                    <div class="hexagon mobile-hex"></div>
                    <div class="hexagon mobile-hex"></div>
                </div>

                <div className='phoneonly-3'>
                    <div class="hexagon mobile-hex"></div>
                    <div class="hexagon mobile-hex"></div>
                    <div class="hexagon mobile-hex"></div>
                </div>
                </div>

                <div className='Buttonclass'>
                    <button>Switch Animation</button>
                </div>
                </div>
                <div className='leftSide'>
                    <div className='naming'>
                        <h1>NAMRATA NARAYANA PRABHU</h1>
                        <p> Software Developer</p>
                        <div className='contact'>
                            <a style={{ marginLeft: '0%', color:'black'}} href='https://github.com/namrata3098'><BsGithub size={40}/></a>
                            <a style={{color:'black'}} href='namnp917@gmail.com'><BiLogoGmail size={40}/></a>
                            <a style={{color:'black'}} href='https://www.linkedin.com/in/namrata-n-8b87a31a4/'><FaLinkedinIn size={40}/></a>
                        </div>

                        <div style={{ display: 'flex' , justifyContent: 'center', paddingTop: '6%'}}>
                            <a href='#'><BsArrowDownCircle size={60} color='black' className='down-arrow'></BsArrowDownCircle></a>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}


export default Home;