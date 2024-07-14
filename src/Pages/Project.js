import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import '../Style/Projects.css'
import photo from './photo.png';

import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

// function Projects() {


//     return (
//         <div className="About-Me">
//             <div className='galery'>
//                 <div className='firstName'>
//                  <div className='secondDiv-1'></div>
//                  <div className='secondDiv-2'></div>
//                 </div>

//                 <div className='firstName'>
//                 <div className='secondDiv-3'></div>
//                 <div className='secondDiv-4'></div>
            
//                 </div>
//                 <div className='firstName'>
//                 <div className='secondDiv-4'></div>
//                 <div className='secondDiv-5'></div>

//                 </div>

//             </div>
          
         
//         </div>
//     )
// }



function Projects() {
    const [activeDiv, setActiveDiv] = useState(null);

    const handleDivClick = (div) => {
        console.log('dev received', div)
        setActiveDiv(div);
    };

    return (
        <div className="About-Me">
            <div className='galery'>
                <div className='firstName'>
                    <div className={`secondDiv-1 ${activeDiv === 'div1' ? 'active' : ''}`} onClick={() => handleDivClick('div1')}>
                        {activeDiv === 'div1' && <div className="content"> 
                        
                        <p className='header'>AirBnb Price prediction</p>
                        <p className='line'>Predict the prices based on user's review using sentimental analysis and rating. Used ML Models: KNN, Linear regression, Naive bayeson</p>
                        
                        </div>}
                    
                    </div>
                    <div className={`secondDiv-2 ${activeDiv === 'div2' ? 'active' : ''}`} onClick={() => handleDivClick('div2')}>
                        {activeDiv === 'div2' && <div className="content"> 
                            
                            <p className='header'>AirBnb Price prediction</p>
                            <p className='line'>Predict the prices based on user's review using sentimental analysis and rating. Used ML Models: KNN, Linear regression, Naive bayeson</p>
                            
                            </div>}
                    </div>
                </div>
                <div className='firstName'>
                    <div className={`secondDiv-3 ${activeDiv === 'div3' ? 'active' : ''}`} onClick={() => handleDivClick('div3')}>
                    {activeDiv === 'div3' && <div className="content"> 
                            
                            <p className='header'>AirBnb Price prediction</p>
                            <p className='line'>Predict the prices based on user's review using sentimental analysis and rating. Used ML Models: KNN, Linear regression, Naive bayeson</p>
                            
                            </div>}
                    </div>
                    <div className={`secondDiv-4 ${activeDiv === 'div4' ? 'active' : ''}`} onClick={() => handleDivClick('div4')}>
                    {activeDiv === 'div4' && <div className="content"> 
                            
                            <p className='header'>AirBnb Price prediction</p>
                            <p className='line'>Predict the prices based on user's review using sentimental analysis and rating. Used ML Models: KNN, Linear regression, Naive bayeson</p>
                            
                            </div>}
                    </div>
                </div>
                <div className='firstName'>
                    <div className={`secondDiv-5 ${activeDiv === 'div5' ? 'active' : ''}`} onClick={() => handleDivClick('div5')}>
                    {activeDiv === 'div5' && <div className="content"> 
                            
                            <p className='header'>AirBnb Price prediction</p>
                            <p className='line'>Predict the prices based on user's review using sentimental analysis and rating. Used ML Models: KNN, Linear regression, Naive bayeson</p>
                            
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;