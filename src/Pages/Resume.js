import '../Style/Resume.css'
import CustomizedTimeline from './Timeline';


function Resume() {
   return (
    <div className="Resume">
        <div className='Resumecontent'>
            <p>Experience</p>
            <CustomizedTimeline/> 
            <div className='clients'>
                <div className='box'>
                    <div className='images-1 client'>
                    </div>
                    <div className='details'>
                        <p>Atlassian</p>
                        <p>Frontend developer</p>
                    </div>
                </div>

                <div className='box'>
                    <div className='images-2 client'>
                    </div>
                    <div className='details'>
                        <p>Symphony</p>
                        <p>Data feed - Backend developer/SRE</p>
                    </div>
                </div>

                <div className='box'>
                    <div className='images-3 client'>
                    </div>
                    <div className='details'>
                        <p>Driscoll's</p>
                        <p>Frontend developer</p>
                    </div>
                </div>

                <div className='box'>
                    <div className='images-4 client'>
                    </div>
                    <div className='details'>
                        <p>Power me</p>
                        <p>Frontend developer</p>
                    </div>
                </div>

             
                <div className='box'>
                    <div className='images-5 client'>
                    </div>
                    <div className='details'>
                        <p>Enquero- internal product</p>
                        <p>Backend developer</p>
                    </div>
                </div>

                


            </div>
        </div>
        
    </div>
   )
}


export default Resume;