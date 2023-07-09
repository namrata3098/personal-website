import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

export default function CustomizedTimelineEducation() {
  return (
    <Timeline position="left">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
           Master's In Applied Computing 
          <p>August 2022 - August 2023</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='primary' variant='outlined'>
            < SchoolOutlinedIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '14px', px: 2 }}>
          <Typography variant="h6" component="span">
            Wilfrid Laurier University
            Waterloo, Ontario, Canada
          </Typography>
          <Typography> Majored in computer science, specialized in Algorithms and Machine Learning.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
        >
          Bachelor's In Science - Engineering 
          <p>August 2016 - August 2020</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant='outlined'>
            <SchoolOutlinedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '14px', px: 2 }}>
          <Typography variant="h6" component="span">
            BMS College Of Engineering
            Bangalore, India
          </Typography>
          <Typography> Graduted with Honors , majored in Electronics and computer engineering. Awarded the best final project and thesis.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}