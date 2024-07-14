import '../Style/Resume.css'
import CustomizedTimeline from './Timeline';
import CustomizedTimelineEducation from './Timeline copy';

function Resume() {
   return (
    <div className="Resume">
        <div className='Resumecontent'>
            <p>Experience</p>
            <CustomizedTimeline/> 
            <div className='clients'>
                <div className='box'>
                    <div className='images-1'>
                    </div>
                    <div className='details'>
                        <p>Atlassian</p>
                        <p>Bitbucket - Frontend developer</p>
                    </div>
                </div>

                <div className='box'>
                    <div className='images-1'>
                    </div>
                    <div className='details'>
                        <p>Symphony</p>
                        <p>Data feed - Backend developer/SRE</p>
                    </div>
                </div>

                <div className='box'>
                    <div className='images-1'>
                    </div>
                    <div className='details'>
                        <p>Driscoll's</p>
                        <p>Frontend developer</p>
                    </div>
                </div>

                <div className='box'>
                    <div className='images-1'>
                    </div>
                    <div className='details'>
                        <p>Driscoll's</p>
                        <p>Frontend developer</p>
                    </div>
                </div>

             
                <div className='box'>
                    <div className='images-1'>
                    </div>
                    <div className='details'>
                        <p>Driscoll's</p>
                        <p>Frontend developer</p>
                    </div>
                </div>


            </div>
        </div>
        
    </div>
   )
}


export default Resume;