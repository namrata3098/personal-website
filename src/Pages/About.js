import { useEffect , useState, useMemo} from 'react';
import '../Style/About.css'
function About() {

    const words = useMemo(() => ['Hello','Hi','Bonjour','Nin hao','Hola', 'Ciao'],[]);
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % words.length);
        }, 1000); // Change word every 2 seconds

        return () => clearInterval(interval);
    }, [words.length]);

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

                        <div className='textarea'>  
                            <p className='details'>  As much I love to code, I love doing many other things!</p>
                            <p className='details jr'> 🌏 Learning French, my 5th language!</p>
                            <p className='details jr'> 💻 Working on an open source AI-driven project to advise youngster's their career goals!</p>
                            <p className='details jr'> ✈️ Travelling across canada - all provinces, 4 done!</p>
                            <p className='details jr'> 🏅 Reworking on my fitness and Hope to get back to Handball, I played for my undergrad university team and won gold!</p>
                        </div>  

                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;