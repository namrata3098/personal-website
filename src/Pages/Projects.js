import '../Style/Project.css'
import ImgMediaCard from '../Components/Card';
import ImgMediaCardCopy from '../Components/Card copy';


function Projects() {

   

    return (
        <div className="Project">
            <p style={{ fontWeight: 'initial'}}>PROJECTS</p>
            <div className='display-cards'>
                <ImgMediaCard/>
                <br></br>
                <ImgMediaCardCopy/>
            </div>
        </div>
    )
}

export default Projects;