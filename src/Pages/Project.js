import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import '../Style/AboutMe.css'
import photo from './photo.png';

import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

function Projects() {

    // const [colorIndex, setColorIndex] = useState(0);
    // const colors = ['rgb(97, 91, 216)','rgb(159, 155, 222)', 'rgb(255, 255, 255)','white']; // Add more colors as needed
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    //     }, 1500); // Change color every 1 second
    //     return () => clearInterval(interval);
    // }, []);


    return (
        <div className="About-Me">
            <div className='galery'>
                <div className='firstName'>

                 <div className='secondDiv-1'></div>
                 <div className='secondDiv-2'></div>

                </div>
                <div className='firstName'>
                <div className='secondDiv-3'></div>
                    

                </div>
                <div className='firstName'>
                <div className='secondDiv-4'></div>
                <div className='secondDiv-5'></div>

                </div>

            </div>
          
         
        </div>
    )
}

export default Projects;