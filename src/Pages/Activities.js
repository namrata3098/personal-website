import { FaAward, FaBasketballBall, FaCertificate, FaCookieBite } from 'react-icons/fa';
import '../Style/Activities.css'
import { useEffect , useState, useRef} from 'react';
function Activities() {

    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const activitiesRef = useRef(null);
    const activitiesRef2 = useRef(null);

    const handleScroll = () => {
        if (activitiesRef.current) {
            const rect = activitiesRef.current.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                setVisible(true);
            }
        }

        if (activitiesRef2.current) {
            const rect = activitiesRef2.current.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                setVisible2(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="Activities">
            <p style={{ fontWeight: 'initial', color: '#1976d2'}}>What's not in resume!</p>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
                <div ref={activitiesRef} className={`Acheivements ${visible ? 'visible' : 'normal'}`}>
                    <div className='awardbox'>
                        <FaAward size={40}/>
                        <p>SPOT AWARD, 1RST - Enquero hacks</p>
                    </div>
                    <div className='awardbox'>
                        <FaBasketballBall size={50}/>
                        <p>Gold medal - State Handball</p>
                    </div>
                    <div className='awardbox'>
                        <FaCertificate size={40}/>
                        <p>GCP,AWS</p>
                    </div>
                    <div className='awardbox'>
                        <FaCookieBite size={40}/>
                        <p>Love to cook & Eat</p>
                    </div>
                
                </div>
                <div ref={activitiesRef2} className={`footer ${visible2 ? 'visible2' : 'normal'}`}>
                        <p style={{ textAlign: 'left'}}>Namrata Narayana Prabhu</p>
                </div>
            </div>

        </div>
    )
}

export default Activities;