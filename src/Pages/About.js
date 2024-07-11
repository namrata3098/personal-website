import { useEffect , useState} from 'react';
import '../Style/About.css'
import ProgressBar from '../Components/Progressbar';
function About() {

    const skills = [{ skill: 'React/Angular', percentage: 70 }, { skill: 'JavaScript', percentage: 85 },{ skill: 'Java/Node', percentage: 60 }, { skill: 'Python', percentage: 60 }, { skill: 'Cloud (AWS/GCP)', percentage: 60 }] ;
    const words = ['Hello','Hi','Bonjour','Nin hao','Hola', 'Ciao'];
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % words.length);
        }, 1000); // Change word every 2 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setCurrentWord(words[index]);
    }, [index, words]);


    return (
        <div className="About">
            <div className='Aboutcontent'>
                <div className='intro'>
                    <div className='imagecontainer'>
                        <div className='photo'></div>
                    </div>
                    <div className='paragraph'>
                        <p>{currentWord}!</p>
                        <p className='details'> 
                            I am a software developer with 3+ years of work experience in building scalable, interactive and large scale systems.
                            I like building applications as I enjoy what I can see and play around with. Apart from my frontend and backend skills, I have experience on cloud and CICD pipelines.
                            I love playing sports and enjoy a cup of coffee while I travel.
                        </p>
                    </div>
                </div>

                <div className='skills'>
                    <div className='progressbar'>
                        {
                            skills.map((it) => {
                                return (<div>
                                    <ProgressBar skill={it.skill} percentage={it.percentage}/>
                                </div>)
                                
                            })
                        }
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default About;