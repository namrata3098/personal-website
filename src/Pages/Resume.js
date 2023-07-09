import '../Style/Resume.css'
import CustomizedTimeline from './Timeline';
import CustomizedTimelineEducation from './Timeline copy';

function Resume() {
   return (
    <div className="Resume">
        <p>RESUME</p>
        <p className='Heading'>EDUCATION</p>
        <CustomizedTimelineEducation />

        <p className='Heading'>WORK EXPERIENCE</p>
        <CustomizedTimeline/>
        
    </div>
   )
}


export default Resume;