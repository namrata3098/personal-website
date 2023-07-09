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

export default function CustomizedTimeline() {
  return (
    <Timeline position="Right">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          Software Engineer 
          <p>September 2020 - September 2022</p>
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
          <Typography>Built various interaction and progressive web applications for more than 5 clients projects using latest technologies. Developed custom pipelines for data 
            propogation till production.Awarded the best employee of the quater - 2021.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
        >
          Software Engineer Intern 
          <p>January 2020 - September 2020</p>
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
          <Typography>Participated in team discussion to created complex and interactive web visualization tool to display the skill organisation of the company based on React framework. Performed SEO operations on the compnay website and user navigation analysis.
          </Typography>
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
          <Typography>Owned the project and designed the schema of the database along with the R&D team. Ran high throughput computation analysis through SQL queries and data extraction.</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}