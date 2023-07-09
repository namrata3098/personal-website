import { Box } from '@mui/material';
import '../Style/AboutMe.css'
import photo from './photo.png';

import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

function AboutMe() {
    return (
        <div className="About-Me">
            <p style={{ color: '#1976d2' , fontFamily: 'sans-serif' , fontWeight: 'bolder' , fontSize: '41px' , paddingTop: '2%'}}>ABOUT</p>
            <p style={{ color: 'black', fontFamily: 'sans-serif' , fontSize: '50px'}}>Let Me Introduce Myself</p>
            <div className="info">
            <img src={photo} style={{ borderRadius: '50%' , height: '31vh' , width: '29vh'}}></img>
                <div className='write-up'>
                    <p>I am an ambitious engineer seeking a moonshot in Software application development with 2.5 years of industry experience.
                       I'm also Golden Hawk from Wilfrid Laurier University class of 2023 M.S. in Appled Computing. 
                       My primary interests lies in delivering high-quality backend solutions , seamless user interfaces and the list is still growing.
                       Driven by a desire to continually learn with a solid foundation in software engineering and a strong drive to excel, I am poised to make a significant impact in the world of technology</p>
                </div>

            </div>
           
           <p style={{ fontWeight: 'bold'}}>SKILLS</p>

           <div className='ski'>
            <div className='written-skill'>
            <p className='textHighlight'>OPERATING SYSTEM</p>
            <p>Windows, MacOs, Linux</p>
            <br></br>
            <br></br>
            <p className='textHighlight'>TOOLS</p>
            <p>Git, Docker, Jira, BitBucket, PostgreSql</p>
            <br></br>
            <br></br>
            <p className='textHighlight'>CLOUD SERVICES</p>
            <p>AWS: Dynamo Db, SQS/SNS , RDS , Lambda </p>
            <p>GCP: VPC, Subnets , Bigtable , kubernetes</p>
            </div>

            <div>
                <p className='textHighlight'>PROGRAMMING LANGUAGE</p>
            <div className='Skills'>
            <div>
                <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                    <CircularProgress  size={140} variant="determinate" value={90} color='warning' />
                        <Box
                        sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                        <Typography variant="heading" component="div" color="text.secondary">90%</Typography>
                    </Box>
                </Box>
                <p>React/JS/TS</p>
                <p></p>
            </div>
            
            <div>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                    <CircularProgress  size={140} variant="determinate" value={85} color='primary' />
                        <Box
                        sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                        <Typography variant="heading" component="div" color="text.secondary">85%</Typography>
                    </Box>
                </Box>
                <p>Node</p>
            </div>

            <div>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                    <CircularProgress  size={140} variant="determinate" value={75} color='warning' />
                        <Box
                        sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                        <Typography variant="heading" component="div" color="text.secondary">75%</Typography>
                    </Box>
                </Box>
                <p>Java</p>
            </div>

            </div>
  
            <div className='Skills'>
            <div>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                    <CircularProgress  size={140} variant="determinate" value={85} color='warning' />
                        <Box
                        sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                        <Typography variant="heading" component="div" color="text.secondary">85%</Typography>
                    </Box>
                </Box>
                <p>SQL</p>
            </div>

            <div>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                    <CircularProgress  size={140} variant="determinate" value={60} color='primary' />
                        <Box
                        sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                        <Typography variant="heading" component="div" color="text.secondary">60%</Typography>
                    </Box>
                </Box>
                <p>Python</p>
            </div>

            <div>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                    <CircularProgress  size={140} variant="determinate" value={90} color='warning' />
                        <Box
                        sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                        <Typography variant="heading" component="div" color="text.secondary">70%</Typography>
                    </Box>
                </Box>
                <p>C++</p>
            </div>
            </div>
            </div>
           </div>
           <button type="button" class="btn btn-primary"><a href="https://drive.google.com/file/d/1WdHQaGpbMz4ufDlGmml1gIeXjZPXm081/view?usp=sharing"download={'url.txt'} style={{ color: 'white'}}>Download Resume</a></button>
           <br></br>
        </div>
    )
}

export default AboutMe;