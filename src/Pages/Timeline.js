import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import '../Style/Timeline.css'

export default function CustomizedTimeline() {
  return (
    <div className='Timelinecontent'>
          <Timeline position="Right">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          Software Engineer 
          <p>October 2023 - Present</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='primary' variant='outlined'>
            < WorkOutlineIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '14px', px: 2 }}>
          <Typography variant="h6" component="span">
            Venuiti Healthcare Inc
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          Software Engineer 
          <p>May 2020 - September 2022</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='primary' variant='outlined'>
            < WorkOutlineIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '14px', px: 2 }}>
          <Typography variant="h6" component="span">
            Enquero Global
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
        >
          Software Engineer Intern 
          <p>January 2020 - April 2020</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant='outlined'>
            <WorkOutlineIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '14px', px: 2 }}>
          <Typography variant="h6" component="span">
            Enquero Global
          </Typography>
          {/* <Typography>Participated in team discussion to created complex and interactive web visualization tool to display the skill organisation of the company based on React framework. Performed SEO operations on the compnay website and user navigation analysis.
          </Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
        >
           Intern 
          <p>June 2019 - September 2019</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <WorkOutlineIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'primary' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Suntroop Solar Pvt Limited
          </Typography>
          
        </TimelineContent>
      </TimelineItem>
    </Timeline>

    </div>

  );
}