import React, { useState } from 'react';
import '../Style/Projects.css'


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
            <p>Projects(click each)</p>
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
                            
                            <p className='header'>Toronto crime prediction analysis</p>
                            <p className='line'>Data Visualization and extraction of hotspot around the city of toronto. Random Forest and Gradient Boosting method was considered for model training</p>
                            
                            </div>}
                    </div>
                </div>
                <div className='firstName'>
                    <div className={`secondDiv-3 ${activeDiv === 'div3' ? 'active' : ''}`} onClick={() => handleDivClick('div3')}>
                    {activeDiv === 'div3' && <div className="content"> 
                            
                            <p className='header'>E-commerce application UI/UX redesign</p>
                            <p className='line'>Re-design a e-commerce web application to ensure inclusivity , cognitiviity and enhance user interaction and features. </p>
                            <p className='line'><a href='https://www.figma.com/file/dRIApTPlq82SO1BTzWBZcQ/UI_UX_Delverable4_UISpartans'>LINK</a></p>
                            
                            </div>}
                    </div>
                    <div className={`secondDiv-4 ${activeDiv === 'div4' ? 'active' : ''}`} onClick={() => handleDivClick('div4')}>
                    {activeDiv === 'div4' && <div className="content"> 
                            
                            <p className='header'>Android app-Skil Matrix</p>
                            <p className='line'>Designed and developed an app to represent a one-stop shop for IT organizations management. Lead a team of five and delegated tasks and completed the project within the deadline.</p>
                            </div>}
                    </div>
                </div>
                <div className='firstName'>
                    <div className={`secondDiv-5 ${activeDiv === 'div5' ? 'active' : ''}`} onClick={() => handleDivClick('div5')}>
                    {activeDiv === 'div5' && <div className="content"> 
                            
                            <p className='header'>Netflix clone</p>
                            <p className='line'>This project is a Netflix clone built with React.js. It replicates the core functionality of Netflix, allowing users to browse movies and TV shows, view details, and watch trailers. </p>
                            <p className='line'><a href='https://github.com/namrata3098/-netflix-clone'>LINK</a></p>
                            </div>}
                    </div>
                    <div className={`secondDiv-6 ${activeDiv === 'div6' ? 'active' : ''}`} onClick={() => handleDivClick('div6')}>
                    {activeDiv === 'div6' && <div className="content"> 
                            
                            <p className='header'>Resume parser</p>
                            <p className='line'>Used the Bag of words ML model to create a python script that scans through the resume and ranks the user based on the JD.</p>
                            
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;